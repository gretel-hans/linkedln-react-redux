import { Card, Row, Col } from "react-bootstrap";

const Formazione = () => {
    return (
        <Card className="mb-3" >
            <Card.Body>
                <div className="d-flex justify-content-between">
                    <Card.Title>Formazione</Card.Title>
                    <div>
                        <i className="bi bi-plus-lg px-3"></i>
                        <i className="bi bi-pencil"></i>
                    </div>
                </div>
                <Card className="insideCards">
                    <Row>
                        <Col xs={3} lg={1} >
                            <Card.Img style={{cursor:"pointer"}} className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                        </Col>
                        <Col>
                            <Card.Body className="p-0">
                                <p className="fw-bold m-0">Università</p>
                                <p className="m-0">Descrizione</p>
                                <small className="text-muted">data inizio - data fine</small>
                                <p>Voto</p>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Card.Body>
        </Card>
    )
}

export default Formazione;