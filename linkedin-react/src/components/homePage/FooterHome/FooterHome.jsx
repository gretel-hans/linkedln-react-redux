import { Row, Col, NavDropdown } from "react-bootstrap";
import { HiOutlinePlus } from "react-icons/hi";


export const FooterHome = () => {
  return (
    <Row className="d-flex justify-content-center align-items-center d-block">
      <Col>
        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color"> <a href="https://about.linkedin.com/it-it">Informazioni</a></small>
            <small className="color"><a href="https://it.linkedin.com/accessibility?">Accessibilità</a> </small>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color"><a href="https://www.linkedin.com//help/linkedin?trk=footer_d_flagship3_feed"> Centro assistenza</a> </small>
            <small>
              <NavDropdown title="Privacy e condizioni" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="dropdown-text">
                  Informazioni sulla privacy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="dropdown-text">
                  Contratto di licenza
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="dropdown-text">
                Termini e condizioni delle pagine
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdown-text">
                  Informativa sui coockie
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdown-text">
                  Informativa sul copyright
                </NavDropdown.Item>
              </NavDropdown>
            </small>
          </Col>
        </Row>
  
        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color"><a href="https://www.linkedin.com/help/linkedin/answer/a1342443?lang=it">
              Opzioni per gli annunci pubblicitari </a></small>
          </Col>
        </Row>


        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color"><a href="https://business.linkedin.com/marketing-solutions/ads?trk=n_nav_ads_rr_b&src=li-nav&veh=ad%2Fstart"> Pubblicità </a></small>
            <small> <NavDropdown title="Servizi alle aziende" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1" className="dropdown-text2">
                  <p className="m-0 text-black">Talent Solutions</p>
                  <small className="text-secondary">
                    Trova, attrai e assumi
                  </small>

                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2" className="dropdown-text2">
                  <p className="m-0 text-black">Sales Solutions</p>
                  <small className="text-secondary">
                    Sblocca nuove oportunità di vendita
                  </small>

                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3" className="dropdown-text2">
                  <p className="m-0 text-black">
                    Pubblica offerta di lavoro gratuita
                  </p>
                  <small className="text-secondary">
                    Raggiungi i migliori candidati con la tua offerta di lavoro
                  </small>
                </NavDropdown.Item>
 
                <NavDropdown.Item href="#action/3.4" className="dropdown-text2">
                  <p className="m-0 text-black">Marketing Solutions</p>
                  <small className="text-secondary">
                    Acquisisci clienti e fai crescere la tua azienda
                  </small>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4" className="dropdown-text2">
                  <p className="m-0 text-black">Learning Solutions</p>
                  <small className="text-secondary">
                    Promuovi l'acquisizione di competenze nella tua
                    organizzazione
                  </small>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  href="#action/3.4"
                  className="dropdown-text2 d-flex align-items-center text-decoration-none">
                  <p className="m-0 text-black color">
                    Crea una pagina aziendale
                  </p>

                  <span>
                    <HiOutlinePlus />
                  </span>
                </NavDropdown.Item>
              </NavDropdown>
            </small>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex justify-content-around align-items-center text-secondary text-footer mt-2">
            <small className="color">Scarica l'app LinkedIn</small>
            <small className="color">Altro</small>
          </Col>
        </Row>

        <Row>
          <Col className="d-flex align-items-center mt-2 justify-content-center">
            <img className="p-0 m-0" id="logoFooter"
              src="https://1000marche.net/wp-content/uploads/2020/03/LinkedIn-Logo-1-600x340.png"
              alt="LogoFooter" style={{ width: "70px", height: "50px"}}/> 
            <span className="footerQuestion2 p-0 m-0">
              LinkedIn Corporation © 2023
            </span>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};