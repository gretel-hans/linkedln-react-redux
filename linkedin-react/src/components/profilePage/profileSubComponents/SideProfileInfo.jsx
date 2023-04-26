import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const SideProfileInfo = () => {
  const location = useLocation();
  const mySecondInfo = useSelector((state) => state.myInfo.myInfo);

  return (
    <>
      {location.pathname === "/profile/me" && (
        <>
          {/* prima card con info profilo */}
          <Card className="mb-2 text-secondary">
            <Card.Body className="p-3">
              <div className="d-flex justify-content-between">
                <Card.Text className="mb-0">
                  {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="" className="profileUrl">
                    Modifica il profilo pubblico e l'URL
                  </a>
                </Card.Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </div>
              <hr className="mx-1" />
              <div className="d-flex justify-content-between">
                <Card.Text className="mb-0">
                  {/*  eslint-disable-next-line jsx-a11y/anchor-is-valid*/}
                  <a href="" className="profileUrl">
                    Aggiungi il tuo profilo in un'altra lingua
                  </a>
                </Card.Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  data-supported-dps="16x16"
                  fill="currentColor"
                  className="mercado-match"
                  width="16"
                  height="16"
                  focusable="false"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zm0 11.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zM8.82 9H7v-.95l.93-.46C8.64 7.24 9 6.89 9 6.6S8.57 6 8 6a6.49 6.49 0 00-3 .91V4.84A6.35 6.35 0 018.1 4c2 0 2.9 1 2.9 2.4 0 .9-.5 1.83-2.18 2.6z"></path>
                </svg>
              </div>
            </Card.Body>
          </Card>
          
        </>
      )}
      {/* seconda card con annuncio */}
      <Card className="mb-2">
            <Card.Body className="p-1">
              <div className="text-end" id="ad-dx">
                <span>Annuncio</span>&nbsp;<i className="bi bi-three-dots"></i>
              </div>
              <div className="d-flex flex-column text-center p-2">
                <small>Scopri le ultime offerte di lavoro</small>
                <div className="d-flex justify-content-center my-2">
                  <img
                    src={mySecondInfo.image}
                    alt="placeholder"
                    className="rounded-circle"
                    style={{ width: "70px" }}
                  />
                  <img
                    src="https://picsum.photos/200"
                    alt="placeholder"
                    className="ms-3"
                    style={{ width: "70px" }}
                  />
                </div>
                <p>{mySecondInfo.name}, scopri le opportunità offerte da XXX</p>
                <div>
                  <Button
                    variant="outline-primary"
                    className="rounded-pill px-3 py-1"
                  >
                    Segui
                  </Button>
                </div>
              </div>
            </Card.Body>
          </Card>
    </>
  );
};

export default SideProfileInfo;
