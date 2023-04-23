import { Button, Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Annuncio = () => {

  const myInfo = useSelector((state) => state.myInfo.myInfo);
  
return (
<Card className="mb-2" id="stickyAnnuncio">
<Card.Body className="p-1">
  <div className="text-end" id="ad-dx">
    <span>Annuncio</span>&nbsp;<i className="bi bi-three-dots"></i>
  </div>
  <div className="d-flex flex-column text-center p-2">
    <small>{myInfo.name}, want to learn what the future of medicine holds?</small>
    <div className="d-flex justify-content-center my-2">
      <img
        src={myInfo.image}
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
    <p>Learn why biosimilars are the future of medicine.</p>
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
)}

export default Annuncio