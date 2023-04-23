/* eslint-disable jsx-a11y/anchor-is-valid */
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Col } from "react-bootstrap";

const Messaggistica = () => {
  const myInfo = useSelector((state) => state.myInfo.myInfo);

  return (

    <div className="fixed-bottom" id="messaggistica">
        <Col xs={2}>
          <Card className="d-flex">
            <Card.Body className="p-0">
              <div className="d-flex justify-content-between">
                <a href="#" className="text-dark text-decoration-none">
                  <div className="d-flex align-items-center p-2">
                    <img
                      src={myInfo.image}
                      alt="placeholder"
                      className="rounded-circle me-2"
                      style={{ width: "30px" }}
                    />
                  <h6 className="m-0">Messaggistica</h6>
                  </div>
                </a>
                <div className="d-flex justify-content-center align-items-center">
                  <a href="#" className="p-1 simbolini">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>{" "}
                  </a>
                  <a href="#" className="p-1 simbolini">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      className="bi bi-pencil-square"
                      viewBox="0 0 16 16"
                    >
                      <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                      <path
                        fillRule="evenodd"
                        d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                      />
                    </svg>{" "}
                  </a>
                  <a href="#" className="p-1 simbolini">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      className="bi bi-caret-up-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                    </svg>{" "}
                  </a>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </div>
  );
};

export default Messaggistica;
