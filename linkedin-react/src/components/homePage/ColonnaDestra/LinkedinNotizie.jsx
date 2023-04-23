import { Card } from "react-bootstrap";

const LinkedinNotizie = () => {
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
  return (
    <Card className="mb-2" id="notizie">
      <div className="d-flex p-3 justify-content-between align-items-center px-2">
        <h6>Linkedin Notizie</h6>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-info-square-fill mb-1"
          viewBox="0 0 16 16"
        >
          <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
        </svg>
      </div>
      <div>
        <a href="#" className="listaNotizie">
          <div className="d-flex align-items-center">
            <div id="bulletPoint"></div>
            <h6> Le Top Companies del 2023 in Italia</h6>
          </div>
          <small>
            <p className="fw-light" id="dataNotizie">Notizie principali · 206 lettori</p>
          </small>
        </a>
        <a href="#" className="listaNotizie">
          <div className="d-flex align-items-center">
            <div id="bulletPoint"></div>
            <h6>Scaldare le case con la grappa</h6>
          </div>
          <small>
            <p className="fw-light" id="dataNotizie">21 ore fa</p>
          </small>
        </a>
        <a href="#" className="listaNotizie">
          <div className="d-flex align-items-center">
            <div id="bulletPoint"></div>
            <h6>Come si posiziona il soft pover italiano</h6>
          </div>
          <small>
            <p className="fw-light" id="dataNotizie">Notizie principali · 206 lettori</p>
          </small>
        </a>
        <a href="#" className="listaNotizie">
          <div className="d-flex align-items-center">
            <div id="bulletPoint"></div>
            <h6>Pettinare le barbie con le forchette</h6>
          </div>
          <small>
            <p className="fw-light" id="dataNotizie">4 giorni fa · 54 lettori</p>
          </small>
        </a>
        <a href="#" className="listaNotizie">
          <div className="d-flex align-items-center">
            <div id="bulletPoint"></div>
            <h6>SONDAGGIO: cosa mangia Franchino?</h6>
          </div>
          <small>
            <p className="fw-light" id="dataNotizie">5 giorni fa · 506 lettori</p>
          </small>
        </a>
      </div>
      <Card.Footer id="showMore" className="text-center">
        {/* {showMore ? ( */}
        <>Visualizza altro {showMoreSvg}</>
        {/* ) : (
          <>Meno dettagli {showLessSvg}</>
        )} */}
      </Card.Footer>
    </Card>
  );
};

export default LinkedinNotizie;
