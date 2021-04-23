  
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
