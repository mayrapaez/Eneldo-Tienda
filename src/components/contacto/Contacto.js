import React from "react";
import { Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    
    <div className="formulario" >
      <Form className="formulario m-5">
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="password" placeholder="Escribi tu nombre" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="password" placeholder="Escribi tu apellido" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Escribi tu email" />
          <Form.Text className="text-muted">
            Nunca compartiremos tu mail con nadie.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Escribi tu mensaje</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};

export default Contacto;
