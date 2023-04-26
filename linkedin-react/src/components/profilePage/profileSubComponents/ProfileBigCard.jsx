import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { useLocation } from "react-router-dom";
const ProfileBigCard = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const myInfo = useSelector((state) => state.userInfo.me);
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const formData = new FormData();
  const location = useLocation();
  // console.log("myInfo", myInfo);
  //console.log(location.pathname)

  const changeProfilePic = async () => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${myInfo._id}/picture`,
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
        dispatch({
          type: "UPDATE_COUNTER",
          payload: counter + 1,
        });
      } else {
        return new Error("Errore nella fetch");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ProfileBigCardContainer">
      <div className="profileBigCardCoverContainer">
        <img alt="cover" src="https://i.ibb.co/C6zmzQ2/cover-linkedin.jpg" />
      </div>
      <div className="profilepicContainer">
        {location.pathname === "/profile/me" ? (
          <>
            <img
              className="profilepic profilepichover"
              alt="profilepic"
              src={myInfo.image}
              onClick={handleShow}
            />
            <div
              className="edit-text text-dark"
              onClick={handleShow}
              style={{ cursor: "pointer" }}
            >
              Edit Image
            </div>
          </>
        ) : (
          <img className="profilepic" alt="profilepic" src={myInfo.image} />
        )}
        {/* <img className="profilepic" alt="profilepic" src={myInfo.image} onClick={handleShow} /> */}
        {/* <div class="edit-text text-dark">Edit Image</div> */}
      </div>
      {location.pathname === "/profile/me" && (
        <>
          <div className="pencil-right">
            <i className="bi bi-pencil"></i>
          </div>
        </>
      )}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Change Profile Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFile" className="mb-3">
              <Form.Label>Choose a pic.</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];
                  console.log(file);

                  formData.append("profile", file);
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
              changeProfilePic();
              handleClose();
            }}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="profileBigCardTextContainer">
        <h5 className="mb-0">
          {myInfo.name} {myInfo.surname}
        </h5>
        <p className="mb-2">
          <small>{myInfo.title}</small>
        </p>
        <p className="mb-2 text-secondary">
          <small>{myInfo.bio} </small>
        </p>
        <p className="text-secondary mb-2">
          <small>{myInfo.area}</small>
        </p>
        <p>
          <span className="text-primary" style={{ cursor: "pointer" }}>
            Informazioni di contatto{" "}
          </span>{" "}
        </p>
        <span className="text-primary" style={{ cursor: "pointer" }}>
          78 collegamenti{" "}
        </span>
        {location.pathname==='/profile/me'?(<>
        <div className=" my-3 ProfilePicButtons">
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-primary me-2"
          >
            Disponibile per
          </button>
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-outline-primary me-2"
          >
            Aggiungi sezione del profilo
          </button>
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-outline-secondary"
          >
            Altro
          </button>
        </div>
        </>):(
          <>
          <div className=" my-3 ProfilePicButtons">
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-primary me-2 d-flex align-items-center"
          >
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" className="mercado-match" width="16" height="16" focusable="false">
  <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
</svg> <span className="ms-1">Messaggio  </span>
          </button>
          <button
            type="button"
            className="rounded-pill px-3 py-1 btn btn-outline-secondary"
          >
            Altro
          </button>
        </div>
          
          </>
        )

        }
        

        <div className="carousel container mt-3">
          <div className="carouselCard1 d-flex me-2">
            <div className="carouselTextContainer">
              <p className="mb-0" style={{ cursor: "pointer" }}>
                <strong>Disponibile a lavorare </strong>
              </p>
              <p className="mb-0">Ruoli di Sviluppatore Html5, Sviluppatore </p>
              <p className="mb-0 text-primary" style={{ cursor: "pointer" }}>
                Mostra dettagli
              </p>
            </div>
            <div>
              {location.pathname === "/profile/me" && (
                <>
                  <i className="bi bi-pencil" style={{ cursor: "pointer" }}></i>
                </>
              )}
            </div>
          </div>
          <div className="carouselCard1 d-flex bg-light me-2">
            <div className="carouselTextContainer">
              <p className="mb-0">
                <strong style={{ cursor: "pointer" }}>
                  {" "}
                  Fai sapere che stai facendo selezione
                </strong>{" "}
                e attrai candidati qualificati.
              </p>
              <p className="mb-0 text-primary" style={{ cursor: "pointer" }}>
                {" "}
                Inizia
              </p>
            </div>

            {location.pathname === "/profile/me" && (
              <>
                <div>
                  <svg
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                </div>
              </>
            )}
          </div>

          <div className="carouselCard1 d-flex bg-light">
            <div className="carouselTextContainer">
              <p className="mb-0">
                <strong style={{ cursor: "pointer" }}>
                  Metti in risalto i servizi
                </strong>{" "}
                che offri, così tu e la tua azienda potrete apparire nei
                risultati di ricerca.
              </p>
              <p className="mb-0 text-primary" style={{ cursor: "pointer" }}>
                {" "}
                Inizia
              </p>
            </div>
            {location.pathname === "/profile/me" && (
              <>
                <div>
                  <svg
                    style={{ cursor: "pointer" }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    data-supported-dps="16x16"
                    fill="currentColor"
                    className="mercado-match"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBigCard;
