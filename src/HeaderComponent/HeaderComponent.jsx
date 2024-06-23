import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import cardIcon from '../icons/card.ico';
import userIcon from '../icons/user.ico';
import favoriteIcon from '../icons/favorite.ico';

function HeaderComponent({ onSearch }) {
  const [buscarProducto, setbuscarProducto] = useState('');

  const handleBuscador = (event) => {
    const value = event.target.value;
    setbuscarProducto(value);
    onSearch(value);
  };

  return (
      <>
        <Navbar className="navbar-container">
        <Nav className="nav-links">
              <Nav.Link><strong>MiTienda</strong></Nav.Link>
              <Nav.Link>INICIO</Nav.Link>
              <Nav.Link>CATEGORÍAS</Nav.Link>
              <Nav.Link>OFERTAS</Nav.Link>
              <Nav.Link>CONTACTO</Nav.Link>
            </Nav>
            <Form className="form-buscador">
              <Form.Control
                type="search"
                placeholder="Buscar productos"
                aria-label="Search"
                value={buscarProducto}
                onChange={handleBuscador}
              />
              <img src={cardIcon} alt="Carrito icono" className="icon" />
              <img src={favoriteIcon} alt="Favorito icono" className="icon" />
              <img src={userIcon} alt="Usuario Icono" className="icon" />
            </Form>
        </Navbar>
        <aside>
          <div className="descuento">
            <b>¡20% de descuento para nuevos clientes!</b>
          </div>
        </aside>
      </>
  );
}

export default HeaderComponent;
