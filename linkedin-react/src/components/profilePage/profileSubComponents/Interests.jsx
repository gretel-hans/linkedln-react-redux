import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";

const Interests = () => {
  let addSvg = (
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
      <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
    </svg>
  );
  return (
    <Card className="mb-2">
      <ListGroup variant="flush" className="p-3">
        <h5 className="mb-0">Potrebbe interessarti</h5>
        <p className="text-secondary">
          <em>Pagine per te</em>
        </p>
        <ListGroup.Item>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
              <img
                src="https://media.licdn.com/dms/image/C4E0BAQHYgix-Ynux1A/company-logo_200_200/0/1646830188434?e=1689811200&v=beta&t=QmtbmtMGPwf7Lq7qDefWvy0QmCWhig-NUW_ipNWCcoU"
                alt="placeholder"
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">Epicode</h6>
                <p className="mb-1">
                Formiamo i nuovi talenti del tech e acceleriamo la loro carriera epica.
                </p>
                <p><small>5.518 follower</small></p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                  {addSvg}
                  &nbsp;Segui
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
        <ListGroup.Item>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
              <img
                src="https://media.licdn.com/dms/image/C4D0BAQHiNSL4Or29cg/company-logo_200_200/0/1519856215226?e=1689811200&v=beta&t=Q11-2QjCnyDNbrltgDEzuflOMtHtFPjIxAhlNVy574U"
                alt="placeholder"
                style={{ width: "50px" }}
                className="rounded-circle"
              />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">Google</h6>
                <p className="mb-1">
                  Tecnologia, informazioni e internet
                </p>
                <p><small>28 Mln follower</small></p>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                  {addSvg}
                  &nbsp;Segui
                </Button>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
      </ListGroup>
      <Card.Footer id="showMore">
        Visualizza altro&nbsp;
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          data-supported-dps="16x16"
          fill="currentColor"
          className="mercado-match mb-1"
          width="16"
          height="16"
          focusable="false"
        >
          <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
        </svg>
      </Card.Footer>
    </Card>
  );
};

export default Interests;
