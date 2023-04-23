import { Card, Button } from "react-bootstrap";

const Attivita = () => {
    return (
        <Card className="mb-3">
            <Card.Body>
                <div className="mb-3">
                    <div className="d-flex justify-content-between align-items-center">
                        <Card.Title className="m-0">Attività</Card.Title>
                        <Button variant="outline-primary" className="rounded-pill">Avvia un post</Button>
                    </div>
                    <span>2 follower</span>
                </div>
                <p className="fs-5 fw-bold m-0">È da un po' che non pubblichi qualcosa</p>
                <Card.Text>
                    I post recenti che condividi o commenti appariranno qui
                </Card.Text>
            </Card.Body>
            <Card.Footer id="showMore" style={{cursor:"pointer"}}>
                <span className="mx-3">Mostra tutte le attività</span><i className="bi bi-arrow-right"></i>
            </Card.Footer>
        </Card>
    )
}

export default Attivita;