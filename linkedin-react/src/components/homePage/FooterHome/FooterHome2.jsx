import { Container,NavDropdown } from "react-bootstrap";

const FooterHome2 = () => {
    return (
        <Container id="footerHome" className="text-center text-secondary my-3">
            <div className="mb-1">
                <span className="mx-2">Informazioni</span>
                <span className="mx-2">Accessibilità</span>
            </div>
            <div className="mb-1">
                <span>Centro Assistenza</span>
            </div>
            <div className="mb-1">
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
                        Informativa sui cookie
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="dropdown-text">
                        Informativa sul copyright
                    </NavDropdown.Item>
                </NavDropdown>
            </div>
            <div className="mb-1">
                <span>Opzioni per gli annunci pubblicitari</span>
            </div>
            <div className="mb-1">
                <span>Pubblicità</span>

                <span> <NavDropdown title="Servizi alle aziende" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1" className="dropdown-text2">
                        <p className="m-0 text-black">Talent Solutions</p>
                        <span className="text-secondary">
                            Trova, attrai e assumi
                        </span>

                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2" className="dropdown-text2">
                        <p className="m-0 text-black">Sales Solutions</p>
                        <span className="text-secondary">
                            Sblocca nuove oportunità di vendita
                        </span>

                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3" className="dropdown-text2">
                        <p className="m-0 text-black">
                            Pubblica offerta di lavoro gratuita
                        </p>
                        <span className="text-secondary">
                            Raggiungi i migliori candidati con la tua offerta di lavoro
                        </span>
                    </NavDropdown.Item>

                    <NavDropdown.Item href="#action/3.4" className="dropdown-text2">
                        <p className="m-0 text-black">Marketing Solutions</p>
                        <span className="text-secondary">
                            Acquisisci clienti e fai crescere la tua azienda
                        </span>
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4" className="dropdown-text2">
                        <p className="m-0 text-black">Learning Solutions</p>
                        <span className="text-secondary">
                            Promuovi l'acquisizione di competenze nella tua
                            organizzazione
                        </span>
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                        href="#action/3.4"
                        className="dropdown-text2 d-flex align-items-center text-decoration-none">
                        <p className="m-0 text-black color">
                            Crea una pagina aziendale
                        </p>
                    </NavDropdown.Item>
                </NavDropdown>
                </span>
            </div>
            <div className="mb-1">
                <span className="mx-2">Scarica l'App Linkedin</span>
                <span className="mx-2">Altro</span>
            </div>
            <div className="mb-1">
                <img src="https://content.linkedin.com/content/dam/me/business/en-us/amp/brand-site/v2/bg/LI-Logo.svg.original.svg" alt="logo"  height={14} style={{display: "inline"}}/>
                <span className="mx-2">LinkedIn Corporation © 2023</span>
            </div>
        </Container>
    )
}

export default FooterHome2;