import { Card, Row, Col, Button } from "react-bootstrap";

const Interessi = () => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <Card.Title>Interessi</Card.Title>
                <Row className="justify-content-start">
                    <Col xs={4} lg={2}>
                        <p className="m-0">Aziende</p>
                    </Col>
                    <Col>
                        <p className="m-0">Scuole e Università</p>
                    </Col>
                </Row>
                <hr />
                <Row xs={1} md={2}>
                    {/* AZIENDA */}
                    <Col>
                        <Card className="insideCards">
                            <Row>
                                <Col xs={3} lg={4} >
                                    <Card.Img style={{cursor:"pointer"}} className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                                </Col>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">Azienda</p>
                                        <p style={{cursor:"pointer"}} className="text-muted">893473 followers</p>
                                        <Button variant="outline-secondary" className="rounded-pill">
                                            <i className="bi bi-check2"></i>
                                            Già segui
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* FINE AZIENDA */}
                    {/* AZIENDA */}
                    <Col>
                        <Card className="insideCards">
                            <Row>
                                <Col xs={3} lg={4} >
                                    <Card.Img style={{cursor:"pointer"}} className="rounded rounded-0" variant="top" src="http://placekitten.com/50" />
                                </Col>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">Azienda</p>
                                        <p style={{cursor:"pointer"}} className="text-muted">893473 followers</p>
                                        <Button variant="outline-secondary" className="rounded-pill">
                                            <i className="bi bi-check2"></i>
                                            Già segui
                                        </Button>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* FINE AZIENDA */}
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Interessi;