import { Col, Container, Row } from "react-bootstrap";
import MyFooter from "../MyFooter";
import Analisi from "./profileSubComponents/Analisi";
import Risorse from "./profileSubComponents/Risorse";
import Attivita from "./profileSubComponents/Attivita";
import Esperienza from "./profileSubComponents/Esperienza";
import Formazione from "./profileSubComponents/Formazione";
import Competenze from "./profileSubComponents/Competenze";
import Interessi from "./profileSubComponents/Interessi";
import SideProfileInfo from "./profileSubComponents/SideProfileInfo";
import OtherProfiles from "./profileSubComponents/OtherProfiles";
import PeopleWhoMightKnow from "./profileSubComponents/PeopleWhoMightKnow";
import Interests from "./profileSubComponents/Interests";
import ProfileBigCard from "./profileSubComponents/ProfileBigCard";
import { useEffect } from "react";
import { useDispatch,useSelector} from "react-redux";
import { useParams } from "react-router-dom";



const ProfilePage = () => {

const counter=useSelector(state=>state.counter.counter)
    const dispatch = useDispatch();
    //const myInfo = useSelector(state => state.userInfo.me);
    const params = useParams();
    //console.log('params', params.id);
    //const myID = "643cf25b186a8700143867ae";
    //fetch per ottenere info sul profilo
    // profile/me --> miei dati
    // profile/123 --> dati di utente con id 123

    const getUserInfo = async () => {
        try {
            let response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${params.id}`, {
                method: "GET",
                headers: {
                    Authorization:process.env.REACT_APP_API_KEY},
            });
            if (response.ok) {
                let data = await response.json();
                //console.log("dati ottenuti dalla fetch:", data);
                dispatch({
                    type: 'SAVE_MY_INFO',
                    payload: data
                })
            }
            else{
                return new Error('Errore nella fetch');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getUserInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.id,counter]) // componentDidMount 

   // console.log('useSelector:', myInfo);

    return (
        <Container className="pageContainer">
            <Row>
                {/* COLONNA SX */}
                <Col xs={12} md={6} lg={8}>
                    <Row xs={1}>
                        <Col><ProfileBigCard /></Col>
                        <Col><Analisi /></Col>
                        <Col><Risorse /></Col>
                        <Col><Attivita /></Col>
                        <Col><Esperienza /></Col>
                        <Col><Formazione /></Col>
                        <Col><Competenze /></Col>
                        <Col><Interessi /></Col>
                    </Row>
                </Col>
                {/* FINE COLONNA SX */}

                {/* COLONNA DX */}
                <Col xs={12} md={6} lg={4}>
                    <Row xs={1}>
                        <Col><SideProfileInfo /></Col>
                        <Col><OtherProfiles /></Col>
                        <Col><PeopleWhoMightKnow /></Col>
                        <Col><Interests /></Col>
                    </Row>
                </Col>
                {/* FINE COLONNA DX */}
            </Row>
            <MyFooter />
        </Container>
    )
}

export default ProfilePage;