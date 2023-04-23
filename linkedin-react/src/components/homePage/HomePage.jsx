import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Annuncio from "./ColonnaDestra/Annuncio";
import LinkedinNotizie from "./ColonnaDestra/LinkedinNotizie";
import Messaggistica from "./ColonnaDestra/Messaggistica";

import HomeProfile from "./ColonnaSinistra/HomeProfile";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Post from "./ColonnaCentrale/Post";
import CreazionePost from "./ColonnaCentrale/creazionePost";
import Scopri from "./ColonnaSinistra/Scopri";
import ScrollToTopButton from "./ColonnaDestra/ScrollToTopButton";
import FooterHome2 from "./FooterHome/FooterHome2";

const HomePage = () => {
  const dispatch = useDispatch();
  const postRedux = useSelector((state) => state.post.post);
  const counter = useSelector((state) => state.counter.counter);

  //const myInfo=useSelector(state=>state.myInfo)
  const [isLoading, setIsLoading] = useState(true);

  const getPosts = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          method: "GET",
          headers: {
            Authorization:process.env.REACT_APP_API_KEY,
          },
        }
      );
      if (response.ok) {
        let post = await response.json();
       // console.log("tutti i post", post);
        let fiftyPost = post.reverse().slice(0, 50);
        dispatch({
          type: "SAVE_POST",
          payload: fiftyPost,
        });
        setIsLoading(false);
      } else {
        return new Error("Errore nella fetch:", response.status);
      }
    } catch (err) {
      console.error(err);
    }

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:process.env.REACT_APP_API_KEY
          },
        }
      );
      let data = await response.json();
      dispatch({
        type: "HOMEPAGE_SAVE_MY_INFO",
        payload: data,
      });
      //console.log("Dati", data);
    } catch (error) {
      console.log(error);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);

  return (
    <Container className="pageContainer">
      <Row>
        <Col xs={12} md={4} lg={3}>
          <HomeProfile />
          <Scopri />
        </Col>
        <Col xs={12} md={8} lg={6}>
          <Row xs={1}>
            <Col>
              <CreazionePost />{" "}
            </Col>
          </Row>

          {isLoading && (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          )}
          {postRedux.map((post, index) => {
            return <Post post={post} key={index} />;
          })}
        </Col>
        <Col xs={12} lg={3}>
          <LinkedinNotizie />
          <div className="" id="deviStareStickyTop">
            <Annuncio />
            <FooterHome2></FooterHome2>
          </div>
          <Messaggistica />
          <ScrollToTopButton/>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
