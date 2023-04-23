import { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

const OtherProfiles = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);

  const [visibleProfiles, setVisibleProfiles] = useState(4);
  const [showMore, setShowMore] = useState(true);

  const getProfileData = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/",
        {
          method: "GET",
          headers: {
            Authorization:process.env.REACT_APP_API_KEY},
        }
      );
      let data = await response.json();

      dispatch({
        type: 'SAVE_ALL_PROFILES_INFO',
        payload: data
    });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMore = () => {
    if (visibleProfiles === 4) {
      setVisibleProfiles(visibleProfiles + 3);
      setShowMore(false);
    } else {
      setVisibleProfiles(4);
      setShowMore(true);
    }
  };

  let messageSvg = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      width="16"
      height="16"
      focusable="false"
      className="mercado-match mb-1"
    >
      <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
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
  );

  return (
    <Card className="mb-2">
      <ListGroup variant="flush" className="p-3">
          <h5>Altri profili consultati</h5>
        {profiles.slice(0, visibleProfiles).map((profile) => (
          <ListGroup.Item key={profile._id}>
            <Row className="d-flex justify-content-start">
              <Col xs={2} className="p-0 p-sm-2">
                <img
                  src={profile.image}
                  alt={profile.name}
                  onError={(e)=>{
                    e.currentTarget.src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
                }}
                  style={{ width: "50px" }}
                  className="rounded-circle"
                />
              </Col>
              <Col xs={10}>
                <div>
                  <h6 className="mb-1">
                    {profile.name}&nbsp;{profile.surname}
                  </h6>
                  <p className="mb-1">{profile.title}</p>
                  <Button
                    variant="outline-secondary"
                    className="rounded-pill px-3 py-1 btn-profile"
                  >
                    {messageSvg}
                    &nbsp;Messaggio
                  </Button>
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

export default OtherProfiles;