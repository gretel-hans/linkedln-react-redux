

import { useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const PeopleWhoMightKnow = () => {

  const profiles = useSelector((state) => state.profiles.profiles);
  const [visibleProfiles, setVisibleProfiles] = useState(4);
  const [showMore, setShowMore] = useState(true);

  const handleShowMore = () => {
    if (visibleProfiles === 4) {
      setVisibleProfiles(visibleProfiles + 3);
      setShowMore(false);
    } else {
      setVisibleProfiles(4);
      setShowMore(true);
    }
  };

  let connectSvg = (
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
      <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
    </svg>
  );

  let showMoreSvg = (
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
      <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z"></path>
    </svg>
  );

  let showLessSvg = (
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
      <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z"></path>
    </svg>
  )

  return (
    <Card className="mb-2">
      <ListGroup variant="flush" className="p-3">
        <h5 className="mb-0">Persone che potresti conoscere</h5>
        <p className="text-secondary">
          <em>Dalla tua scuola o dalla tua università</em>
        </p>
        {profiles.slice(8, visibleProfiles + 8).map((profile) => (
        <ListGroup.Item key={profile._id}>
          <Row className="d-flex justify-content-start">
            <Col xs={2} className="p-0 p-sm-2">
            <img
                  src={profile.image}
                  alt={profile.name}
                  style={{ width: "50px" }}
                  className="rounded-circle"
                  onError={(e)=>{
                    e.currentTarget.src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                }}
                />
            </Col>
            <Col xs={10}>
              <div>
                <h6 className="mb-1">{profile.name}&nbsp;{profile.surname}</h6>
                <p className="mb-1">
                {profile.title}
                </p>
                <Link to={'/profile/' + profile._id}>
                <Button
                  variant="outline-secondary"
                  className="rounded-pill px-3 py-1 btn-profile"
                >
                  {connectSvg}
                  &nbsp;Collegati
                </Button>
                </Link>
              </div>
            </Col>
          </Row>
        </ListGroup.Item>
        ))}
      </ListGroup>
        <Card.Footer id="showMore" onClick={handleShowMore}>
        {showMore ? (
          <>Visualizza altro {showMoreSvg}</>
        ) : (
          <>Meno dettagli {showLessSvg}</>
        )}
      </Card.Footer>
    </Card>
  );
};

export default PeopleWhoMightKnow;
