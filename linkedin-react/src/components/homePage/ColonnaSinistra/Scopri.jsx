import { Card, Col, Row } from "react-bootstrap";

const Scopri = () => {
  return (
    <Card className="mb-2" id="scopriSticky">
      <Row className="d-flex align-items-center p-2 flex-nowrap">
        <Col xs={10}>
          <p style={{cursor:"pointer"}} className="linkHome text-primary mb-2">Gruppi</p>
          <p style={{cursor:"pointer"}} className="linkHome text-primary mb-2">Eventi</p>
          <p style={{cursor:"pointer"}} className="linkHome text-primary mb-1">Hashtag seguiti</p>
        </Col>
        <Col xs={2}>
          <div className="plusIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              data-supported-dps="16x16"
              fill="grey"
              className="mercado-match"
              width="16"
              height="16"
              focusable="false"
            >
              <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
            </svg>
          </div>
        </Col>
      </Row>
      <Card.Footer id="showMore" className="text-center text-secondary fs-6">
        Scopri di più
      </Card.Footer>
    </Card>
  );
};

export default Scopri;