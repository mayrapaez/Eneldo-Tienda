  
import React from "react";
import CartIcon from "../CardIcon/CardIcon";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from "react-bootstrap";
import './navbar.css';
import CartWidget from '../cartWidget/cartWidget.jsx';
import { useCartContext } from '../../context/cartContext/cartContext.jsx';

const Navbarr = () => {
  const { cartQuantity } = useCartContext();
  
  return (
    <>
      <Navbar>
        <Navbar.Brand href={`/`} className="icon">
          <CartIcon />
        </Navbar.Brand>
        <Nav className="mr-auto navbar">
          <Nav.Link href={`/home`}>Home </Nav.Link>
          <Nav.Link href={`/nosotros`}>Nosotros</Nav.Link>
          <NavDropdown title="Tienda" id="collasible-nav-dropdown">
          <NavDropdown.Item href={`/productos/categorias/4CmZhL0Mk7Cq2RpoIFBj`}>Alacena</NavDropdown.Item>
          <NavDropdown.Item href={`/productos/categorias/hzCAF0ClPPKqZNqw3qqH`}> Productos a Granel</NavDropdown.Item>
          <NavDropdown.Item href={`/productos/categorias/jCwywDqKRtYORLIuFRSr`}>Frescos y Congelados</NavDropdown.Item>
          <NavDropdown.Item href={`/productos/categorias/z3gj0ryaRhRffsr1QQAI`}>Bebidas e Infusiones</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href={`/productos`}>Ver Todo</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={`/contacto`}>Contacto</Nav.Link>
        </Nav>
        <div className="cartQuantity"  >
          <CartWidget/>
          {cartQuantity > 0 &&
          <p>{cartQuantity}</p>
          }
        </div>
        <Form inline>
          <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
          <Button variant="outline-info">Buscar</Button>
        </Form>
      </Navbar>
      
    </>
  );
};

export default Navbarr;
// import { NavLink, Link } from 'react-router-dom';
// import './navbar.scss';
// import CartWidget from '../cartWidget/cartWidget.jsx';
// import { useCartContext } from '../../context/cartContext/cartContext.jsx';
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faHeadset } from "@fortawesome/free-solid-svg-icons";
// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// const Navbar = () => {
//     const { cartQuantity } = useCartContext();

//     return (
//         <nav className="navbar navbar-expand-lg d-block sectionBrown p-2">
//             <div className="container-fluid d-flex align-items-baseline">
//                 <Link to={`/`} className="navbar-brand">
//                     <img src="/images/EneldoLogo.svg" className="navbarLogo" alt="Logo Lakay Design"/> 
//                 </Link>
//                 <div className="d-lg-none cartIcon">
//                     <CartWidget/>
//                     {cartQuantity > 0 &&
//                         <p className="cartQuantity">{cartQuantity}</p>
//                     }
//                 </div>
//                 <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <FontAwesomeIcon icon={faBars} id="burgerMenuIcon"/>
//                 </button>
//                 <div id="iconsContainer">
//                     <form className="d-none d-xl-flex input-group w-auto ml-5 mr-3">
//                         <input type="search" className="form-control mr-2" placeholder="Buscar..." aria-label="Search"/>
//                         <button className="btn" id="searchButton" type="button" data-ripple-color="dark">
//                             <FontAwesomeIcon icon={faSearch} id="searchIcon"/>
//                         </button>
//                     </form>
//                     <div className="d-none navbarIconSection">
//                         <a className="navbarIcon p-2">
//                             <FontAwesomeIcon icon={faHeadset} type="button" className="iconFontAwesone"/>
//                             <p className="m-0">Ayuda</p>
//                         </a>
//                         <a className="navbarIcon p-2">
//                             <FontAwesomeIcon icon={faUser} type="button" className="iconFontAwesone"/>
//                             <p className="m-0">Mi cuenta</p>
//                         </a>
//                         <CartWidget/>
//                         {cartQuantity > 0 &&
//                             <p className="cartQuantity">{cartQuantity}</p>
//                         }
//                     </div>
//                 </div>
//             </div>
//             <div className="container-fluid" id="categoriesContainer">
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li><NavLink to={`/productos/categorias/4CmZhL0Mk7Cq2RpoIFBj`} activeClassName="activeSection" className="mx-3">Alacena</NavLink></li>
//                         <li><NavLink to={`/productos/categorias/hzCAF0ClPPKqZNqw3qqH`} activeClassName="activeSection" className="mx-3">Productos a Granel</NavLink></li>
//                         <li><NavLink to={`/productos/categorias/jCwywDqKRtYORLIuFRSr`} activeClassName="activeSection" className="mx-3">Frescos y Congelados</NavLink></li>
//                         <li><NavLink to={`/productos/categorias/z3gj0ryaRhRffsr1QQAI`} activeClassName="activeSection" className="mx-3">Bebidas e Infusiones</NavLink></li>
//                         <li><Link to={`/productos`} className="mx-3">Ver todos</Link></li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;