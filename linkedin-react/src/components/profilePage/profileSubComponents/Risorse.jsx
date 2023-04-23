import { Card, Row, Col } from "react-bootstrap";


const Risorse = () => {
    return (
        <Card  className="mb-3">
            <Card.Body>
                <div className="mb-3">
                    <Card.Title className="m-0">Risorse</Card.Title>
                    <i className="bi bi-eye-fill"></i>
                    <span> Solo per te</span>
                </div>
                <Row>
                    <Col>
                        {/* MODALITA CREAZIONE CONTENUTI */}
                        <Card className="insideCards">
                            <Row>
                                <Col xs={3} lg={1} >
                                    <i className="bi bi-reception-4"></i>
                                </Col>
                                <Col className="px-0">
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">Modalità creazione di contenuti</p>
                                        <small>Fatti scoprire, metti in risalto i contenuti sul tuo profilo e accedi agli strumenti di creazione</small>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                         {/* FINE MODALITA CREAZIONE CONTENUTI */}
                        <hr/>
                        {/* LA MIA RETE */}
                        <Card className="insideCards">
                            <Row>
                                <Col xs={3} lg={1} >
                                    <i className="bi bi-people-fill"></i>
                                </Col>
                                <Col className="px-0">
                                    <Card.Body className="p-0">
                                        <p className="m-0 fw-bold">La mia rete</p>
                                        <small>Salva e gestisci i tuoi collegamenti e interessi.</small>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                        {/* FINELA MIA RETE */}
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default Risorse;