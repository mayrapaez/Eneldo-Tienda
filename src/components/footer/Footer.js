import { Link } from 'react-router-dom';
import './styleFooter.css';

const Footer = () => {
    return (
        <>
            <footer className="container-fluid text-center d-flex py-3">
		        <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-5 mb-sm-0 p-0" id="divLogoFooter">
                        <Link to={`/`}>
                            <img src="../images/EneldoLogo.svg" className="footerLogo" alt="Logo Eneldo"/> 
                        </Link>
                    </div>
                    <div className="col-12 col-md-4 col-lg-3 d-sm-none d-lg-block mb-5 mb-md-0 p-0">
                        <Link to={`/nosotros`}>Nosotros</Link><br/>
                        <Link to={`/contacto`}>Contacto</Link><br/>
                        <a href="https://outlook.live.com/">Sumate a nuestro equipo</a><br/>
                     </div>
                     <div className="col-12 col-sm-6 col-lg-3 mb-sm-0 p-0" id="iconosFooter">
                        <h6>Escribinos por mail</h6>
                        <a href="https://outlook.live.com/">
                            <img src="../images/mail.png" className="footerIcon mr-3" alt="Ícono mail"/>
                        </a>
                    </div>    
                    <div className="col-12 col-sm-6 col-lg-3 mb-sm-0 p-0" id="iconosFooter">
                        <h6>Seguinos en nuestras redes</h6>
                        <a href="https://www.facebook.com/">
                            <img src="../images/facebook.png" className="footerIcon mr-3" alt="Ícono Facebook"/>
                        </a>
                        <a href="https://www.instagram.com/">
                            <img src="../images/instagram.png" className="footerIcon mr-3" alt="Ícono Instagram"/>
                        </a>
                        <a href="https://web.whatsapp.com/">
                            <img src="../images/whatsapp.png" className="footerIcon" alt="Ícono whatsapp"/>
                        </a>
                    </div>
                </div>
	        </footer>
        </>
    );
};

export default Footer;