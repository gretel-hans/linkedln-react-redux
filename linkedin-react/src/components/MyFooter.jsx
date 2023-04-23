import { Col, Row, NavDropdown} from "react-bootstrap";


const MyFooter = () => {
  return (
    <>
      <Row className="footer w-100 bottom">
        <Col xs={6} className="footer-col">
          <ul>
            <Col className="firstcol" xs={4}>
              <li> <a href="https://about.linkedin.com/it-it">
                   Informazioni</a></li>
              <li> <a href="https://it.linkedin.com/legal/professional-community-policies?">
                 Linee guida della comunity </a></li>
              <li>
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
              </li>
              <li><a href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer">
              Sales Solutions</a> </li>
              <li> <a href="https://safety.linkedin.com/">Centro sicurezza</a></li>
            </Col>

            <Col className="secondcol" xs={4}>
              <li> <a href="https://it.linkedin.com/accessibility?"> Accessibilità </a></li>
              <li><a href="https://careers.linkedin.com/">Carriera</a></li>
              <li> <a href="https://www.linkedin.com/help/linkedin/answer/a1342443?lang=it">Opzioni</a></li>
              <li> <a href="https://mobile.linkedin.com/it-it"> Mobile</a></li>
            </Col>

            <Col className="thirdcol" xs={4}>
              <li> <a href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer">
                Talent Solutions</a></li>
              <li> <a href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer">
                Soluzioni di marketing</a></li>
              <li> <a href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f">
                Pubblicità</a></li>
              <li> <a href="https://business.linkedin.com/grow?&src=li-footer">Piccole impresa </a></li>
            </Col>
          </ul>
        </Col>
        <Col className="fourcol" xs={3}>
          <Row className="rowcircle me-0">
            <Col className="pe-0" xs={10}>
              <h6 className="mb-0">
                <i className="bi bi-question-circle-fill">
                <a href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_profile_view_base">
                Domande?</a> </i></h6>
              <p>Visita il nostro Centro assistenza.</p>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <h6 className="mb-0"> 
              <i className="bi bi-gear-fill"> 
              <a href="https://www.linkedin.com/mypreferences/d/categories/account">
              Gestisci il tuo account e la tua privacy</a></i></h6>
              <p>Vai alle impostazioni</p>
            </Col>
          </Row>
          <Row>
            <Col xs={10}>
              <h6 className="mb-0"><i className="bi bi-shield-shaded"> 
                <a href="https://www.linkedin.com/help/linkedin/answer/a1339724">Trasparenza sui contenuti consigliati</a> </i></h6>
              <p>Scopri di più sui contenuti consigliati.</p>
            </Col>
          </Row>
        </Col>
        <Col xs={3}>
        <label>Seleziona lingua</label>
          <br />
          <select name="language" id="" defaultValue={"Italiano - Italiano"}>
          <option value="0"> Italiano </option>
            <option value="0"> Spagnolo </option>
            <option value="1"> Inglese</option>
            <option value="2">Francese</option>
            <option value="3">Arabo</option>
            <option value="4">Coreano</option>
            <option value="5">Tedesco</option>
            <option value="6">Danese </option>
            <option value="7">Portoghese</option>
            <option value="8">Russo</option>
          </select>
        </Col>
        <span className="footerCopiright mb-2">
          LinkedIn Corporation © 2023
        </span>
      </Row>
    </>
  );
};

export default MyFooter;


  
  