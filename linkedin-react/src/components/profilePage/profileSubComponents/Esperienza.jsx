import { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { Dropdown } from "react-bootstrap";
import { useLocation } from "react-router-dom";

const Esperienza = () => {
  const location = useLocation().pathname;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experiences.experiences);
  const myInfo = useSelector((state) => state.userInfo.me);
  const [selectedExperienceId, setSelectedExperienceId] = useState(null);
  const [experienceModInfo, setExperienceModInfo] = useState(null);
  const [idExperience, setIdExperience] = useState("");
  const [counter, setCounter] = useState(0);

  //console.log("myInfo", myInfo);

  const esperienza = {
    role: "",
    company: "",
    startDate: "",
    endDate: undefined, // could be null
    description: "",
    area: "",
  };

  //console.log("experiences", experiences);
  //console.log(id)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [modalExperience, setModalExperience] = useState(false);
  const closeExperience = () => setModalExperience(false);
  const showExperience = () => setModalExperience(true);

  const [modalModifyExperience, setModalModifyExperience] = useState(false);
  const closeExperienceMod = () => setModalModifyExperience(false);
  const showExperienceMod = () => setModalModifyExperience(true);

  const formData = new FormData();
  const formDataExperienceImg = new FormData();
  const ModifyFormData = new FormData();
  let file = undefined;

  const addExperience = async () => {
    if (esperienza.endDate === undefined) {
      delete esperienza.endDate;
    }
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/experiences`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
          body: JSON.stringify(esperienza),
        }
      );
      if (response.ok && file===undefined) {
        setCounter(counter + 1);
      }
      if (response.ok) {
        const infoExperience = await response.json();
        const experienceId = infoExperience._id;
        if (formDataExperienceImg.has("experience")) {
          let responseImg = await fetch(
            `https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/experiences/${experienceId}/picture`,
            {
              method: "POST",
              headers: {
                Authorization: process.env.REACT_APP_API_KEY,
              },
              body: formDataExperienceImg,
            }
          );
          if (responseImg.ok) {
            alert("You have added your new experience!");
            setCounter(counter + 1);
          } else {
            alert("ERROR you haven't added your new experience...");
          }
        }
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const changeExperiencePic = async (id) => {
    //console.log("id", id);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/experiences/${id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
          body: formData,
        }
      );
      if (response.ok) {
        alert("Your profile pic has been changed!");
        setCounter(counter + 1);
      } else {
        return new Error("Errore nella fetch");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getExperiences = async () => {
    if (myInfo._id !== undefined) {
      try {
        let response = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/experiences`,
          {
            method: "GET",
            headers: {
              Authorization: process.env.REACT_APP_API_KEY,
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          dispatch({
            type: "ADD_TO_EXPERIENCES",
            payload: data,
          });
        } else {
          return new Error("Errore nella fetch");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const cancelExperience = (idCancel) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/experiences/${idCancel}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.REACT_APP_API_KEY,
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          alert("La tua esperienza è stata rimossa con successo!");
          setCounter(counter + 1);
        } else {
          alert("Errore la tua esperienza non è stata rimossa...");
        }
      })
      .catch((error) => console.log("ERRORE", error));
  };

  const fillInputExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myInfo}/experiences/${idExperience}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: process.env.REACT_APP_API_KEY,
          },
          body: JSON.stringify(experienceModInfo),
        }
      );
      if (response.ok && file===undefined) {
        alert("Hai modificato correttamente la tua esperienza.");
        setCounter(counter + 1);
      }

      if (response.ok && file) {
        const response2 = await fetch(
          `https://striveschool-api.herokuapp.com/api/profile/${myInfo}/experiences/${idExperience}/picture`,
          {
            method: "POST",
            headers: {
              Authorization: process.env.REACT_APP_API_KEY,
            },
            body: ModifyFormData,
          }
        );

        if (response2.ok) {
          alert("Hai modificato correttamente la tua esperienza.");
          setCounter(counter + 1);
        }
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  useEffect(() => {
    getExperiences();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myInfo, counter]);
  // console.log(location)

  return (
    <>
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <Card.Title>Esperienza</Card.Title>
            {location === "/profile/me" && (
              <div>
                <i
                  type="button"
                  className="bi bi-plus-lg px-3"
                  onClick={showExperience}
                ></i>
              </div>
            )}
          </div>

          <Modal show={modalExperience} onHide={closeExperience}>
            <Modal.Header closeButton>
              <Modal.Title>Aggiungi nuova esperienza</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Ruolo ricoperto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il ruolo ricoperto..."
                    onChange={(e) => {
                      esperienza.role = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Nome azienda</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci il nome dell'azienda..."
                    onChange={(e) => {
                      esperienza.company = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Descrizione</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci la descrizione del lavoro svolto..."
                    onChange={(e) => {
                      esperienza.description = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Località</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Inserisci la località..."
                    onChange={(e) => {
                      esperienza.area = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Data di inizio</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => {
                      esperienza.startDate = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="mb-1">Data di fine</Form.Label>
                  <Form.Control
                    type="date"
                    onChange={(e) => {
                      esperienza.endDate = e.target.value;
                    }}
                  />
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label className="mb-1">Allega un'immagine</Form.Label>
                  <Form.Control
                    type="file"
                    onChange={(e) => {
                       file = e.target.files[0];
                      formDataExperienceImg.append("experience", file);
                    }}
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer className="d-flex justify-content-center">
              <Button
                variant="primary"
                onClick={() => {
                  addExperience();
                  closeExperience();
                  //console.log(esperienza);
                }}
              >
                Aggiungi esperienza
              </Button>
            </Modal.Footer>
          </Modal>

          {experiences.map((experience, index) => {
            let startDate = new Date(experience.startDate);
            let startYear = startDate.getFullYear();
            let endDate = new Date(experience.endDate);
            let endYear;
            
              if( experience.endDate) {
endYear= endDate.getFullYear();
              } 
            
             
            return (
              <div key={index}>
                <Card className="my-3 insideCards position-relative">
                  <Row>
                    <Col xs={3} lg={1}>
                      <Card.Img
                        className="rounded rounded-0"
                        variant="top"
                        src={
                          experience.image
                            ? experience.image
                            : "https://placekitten.com/200"
                        }
                        onClick={() => {
                          handleShow();
                          setSelectedExperienceId(experience._id);
                          //console.log("img selezionata", experience._id);
                        }}
                      />
                    </Col>
                    <Col>
                      <Card.Body className="p-0">
                        <p className="fw-bold m-0">{experience.role}</p>
                        <p className="m-0">{experience.company}</p>
                        <small className="text-muted">
                          {startYear} - {endYear ? endYear : "In corso"}
                        </small>
                        <p>{experience.description}</p>
                      </Card.Body>

                      <div className="dotsDivAbsolute">


                        <Dropdown>
                          {location === "/profile/me" && (
                            <>
                              <Dropdown.Toggle
                                id="dropdown-basic"
                                className="drop"
                              >
                                <i className="bi bi-three-dots fs-3"></i>
                              </Dropdown.Toggle>
                            </>
                          )}

                          <Dropdown.Menu >
                            <div className="px-3 d-flex flex-column">

                            
                            <div
                              className="m-1 cursor"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    "Vuoi davvero rimuovere questa esperienza"
                                  )
                                ) {
                                  cancelExperience(experience._id);
                                 // console.log("esperienza eliminata");
                                }
                              }}
                            >
                              Elimina{" "}
                            </div>
                            <div
                              className="m-1 cursor"
                              onClick={() => {
                                showExperienceMod();
                                setExperienceModInfo(experience);
                                setIdExperience(experience._id);
                                //console.log(experience._id)
                              }}
                            >
                              Modifica{" "}
                            </div>
                            </div>
                          </Dropdown.Menu>
                        </Dropdown>


                      </div>
                    </Col>
                  </Row>
                </Card>
                {index !== experiences.length - 1 ? (
                  <hr className="my-4" />
                ) : <></>}
              </div>
            );
          })}
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Experience Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose a pic.</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  file = e.target.files[0];
                  formData.append("experience", file);
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              changeExperiencePic(selectedExperienceId);
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {experienceModInfo && (
        <Modal show={modalModifyExperience} onHide={closeExperienceMod}>
          <Modal.Header closeButton>
            <Modal.Title>Modifica esperienza</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Ruolo ricoperto</Form.Label>
                <Form.Control
                  type="text"
                  value={experienceModInfo.role}
                  onChange={(e) => {
                    setExperienceModInfo({
                      role: e.target.value,
                      company: experienceModInfo.company,
                      startDate: experienceModInfo.startDate,
                      endDate: experienceModInfo.endDate, // could be null
                      description: experienceModInfo.description,
                      area: experienceModInfo.area,
                    });
                    //console.log(experienceModInfo.role)
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Nome azienda</Form.Label>
                <Form.Control
                  type="text"
                  value={experienceModInfo.company}
                  onChange={(e) => {
                    setExperienceModInfo({
                      role: experienceModInfo.role,
                      company: e.target.value,
                      startDate: experienceModInfo.startDate,
                      endDate: experienceModInfo.endDate, // could be null
                      description: experienceModInfo.description,
                      area: experienceModInfo.area,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Descrizione</Form.Label>
                <Form.Control
                  type="text"
                  value={experienceModInfo.description}
                  onChange={(e) => {
                    setExperienceModInfo({
                      role: experienceModInfo.role,
                      company: experienceModInfo.company,
                      startDate: experienceModInfo.startDate,
                      endDate: experienceModInfo.endDate, // could be null
                      description: e.target.value,
                      area: experienceModInfo.area,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Località</Form.Label>
                <Form.Control
                  type="text"
                  value={experienceModInfo.area}
                  onChange={(e) => {
                    setExperienceModInfo({
                      role: experienceModInfo.role,
                      company: experienceModInfo.company,
                      startDate: experienceModInfo.startDate,
                      endDate: experienceModInfo.endDate, // could be null
                      description: experienceModInfo.description,
                      area: e.target.value,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Data di inizio</Form.Label>
                <Form.Control
                  type="date"
                  value={experienceModInfo.startDate.slice(0, 10)}
                  onChange={(e) => {
                    setExperienceModInfo({
                      role: experienceModInfo.role,
                      company: experienceModInfo.company,
                      startDate: e.target.value,
                      endDate: experienceModInfo.endDate, // could be null
                      description: experienceModInfo.description,
                      area: experienceModInfo.area,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="mb-1">Data di fine</Form.Label>
                <Form.Control
                  type="date"
                  value={
                    experienceModInfo.endDate
                      ? experienceModInfo.endDate.slice(0, 10)
                      : <></>
                  }
                  onChange={(e) => {
                    setExperienceModInfo({
                      role: experienceModInfo.role,
                      company: experienceModInfo.company,
                      startDate: experienceModInfo.startDate,
                      endDate: e.target.value, // could be null
                      description: experienceModInfo.description,
                      area: experienceModInfo.area,
                    });
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label className="mb-1">Allega un'immagine</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => {
                    file = e.target.files[0];
                    ModifyFormData.append("experience", file);
                  }}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-center">
            <Button
              variant="primary"
              onClick={() => {
                fillInputExperience();
                closeExperienceMod();
                // console.log(idExperience)
              }}
            >
              Modifica esperienza
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Esperienza;
