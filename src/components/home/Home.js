import React from 'react';
import { CardDeck, Card,} from 'react-bootstrap';
import './home.css';

const Home = () => {
    return (
        <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 img-fluid" src="../images/frutas.jpg" alt="Imagen carousel 1"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src="../images/verduras.jpg" alt="Imagen carousel 2"/>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 img-fluid" src="../images/carnes.jpg" alt="Imagen carousel 3"/>
                </div>
            </div>
        </div>
        <div className="container-fluid text-center py-3 px-3 ">
            <div className="row pb-1">
                <div className="col-12 homeTitle">
                    <h3>Bienvenidos </h3>
                </div>
            </div>   
        <div className="row pb-2"> 
            <div className="col-12 d-flex justify-content-center">
                <p className="hero">Nuestro Mercado Natural es un espacio donde confluyen los aromas, las texturas y los sabores de una gran variedad de productos. Como todo Mercado respetamos y valoramos la frescura, la calidad y lo natural de los productos que ofrecemos, sin dejar de lado la calidez de la atención.
                <br></br> 
                Nuestra diversidad y variedad de productos hace que puedas encontrar todo lo que necesites para tu alimentación.</p>
            </div>
        </div> 
        </div>
        <div className="container-fluid my-5">
            <div className="row row-cols-1 row-cols-md-3">
                <div className="col text-center mb-5 mb-md-0 px-4">
                    <img src="../images/whatsapp.png" className="img-fluid iconos mb-3" alt="Ícono Whatsapp"/>
                    <h6 className="homeTitle">Escribinos por Whatsapp</h6>
                    <p className="d-md-none d-lg-block homeText">Respondemos a todas tus consultas.</p>
                </div>
                <div className="col text-center mb-5 mb-md px-4">
                    <img src="../images/tarjeta.png" className="img-fluid iconos mb-3" alt="Ícono tarjeta"/>
                    <h6 className="homeTitle">Pagá en cuotas y con Mercado Pago.</h6>
                    <p className="d-md-none d-lg-block homeText">Aceptamos todas las tarjetas con hasta 6 cuotas sin interés</p>
                </div>
                <div className="col text-center px-4">
                    <img src="../images/envios.png" className="img-fluid iconos mb-3" alt="Ícono seguridad"/>
                    <h6 className="homeTitle">Hacemos envios a todo el pais.</h6>
                    <p className="d-md-none d-lg-block homeText">Compra tranquilo que te lo enviamos donde sea.</p>
                    </div>
                </div>
        </div>
        <div className="container-fluid text-center py-3 px-3 homeEneldo ">
            <div className="row pb-2">
                <div className="col-12">
                    <h3>Eneldo Mercado Natural en tu casa.</h3>
                </div>
            </div>
            <div className="row pb-6">
                <div className="col-12 d-flex justify-content-center">
                    <p>Conoce nuestras categorias</p>
                </div>
            </div>
            <CardDeck className="categoriasHome">
                <Card>
                    <Card.Img variant="top" src="../images/home/categorias/azucar.jpg" />
                    <Card.Footer>
                    <small className="text-muted">Productos Sin Azucar</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../images/home/categorias/gluten.jpg" />
                    <Card.Footer>
                    <small className="text-muted">Productos sin Gluten</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../images/home/categorias/gourmet.jpg" />
                    <Card.Footer>
                    <small className="text-muted">Productos Gourmet</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../images/home/categorias/vegano.jpg" />
                    <Card.Footer>
                    <small className="text-muted">Productos Veganos</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../images/home/categorias/keto.jpg" />
                    <Card.Footer>
                    <small className="text-muted">Productos Aptos Keto</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../images/home/categorias/organico.jpg" />
                    <Card.Footer>
                    <small className="text-muted">Productos Organicos</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
	    </div>
    </>
    );
};

export default Home;
