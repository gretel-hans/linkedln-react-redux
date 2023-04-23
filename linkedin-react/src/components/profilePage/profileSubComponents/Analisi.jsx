import { Card, Col, Row } from "react-bootstrap";


const Analisi = () => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="mb-3">
                    <Card.Title className="m-0">Analisi</Card.Title>
                    <i className="bi bi-eye-fill" style={{cursor:"pointer"}}></i>
                    <span> Solo per te</span>
                </div>
                <Row>
                    {/* COL SX */}
                    <Col xs={12} md={4}>
                        <Card className="insideCards">
                            <Row>
                                <Col xs={3} lg={1} >
                                    <i style={{cursor:"pointer"}} className="bi bi-people-fill"></i>
                                </Col>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">9 visualizzazioni del profilo</p>
                                        <small>Scopri chi ha visualizzato il tuo profilo</small>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* FINE COL SX */}

                    {/* COL DX */}
                    <Col xs={12} md={4}>
                        <Card className="insideCards">
                            <Row>
                                <Col xs={3} lg={1} >
                                    <i style={{cursor:"pointer"}} className="bi bi-search"></i>
                                </Col>
                                <Col>
                                    <Card.Body className="p-0">
                                        <p className="fw-bold m-0">3 comparse nei motori di ricerca</p>
                                        <small>Vedi quante volte compari nei risultati di ricerca</small>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    {/* FINE COL DX */}
                </Row>
            </Card.Body>
        </Card >
    )
}

export default Analisi;