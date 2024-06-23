import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent';
import FooterComponent from './FooterComponent/FooterComponent';
import CardComponent from './CardComponent/CardComponent';
import data from './data.json'; 

function App() {
  const [buscarProducto, setbuscarProducto] = useState('');

  const handleSearch = (value) => {
    setbuscarProducto(value);
  };

  return (
    <>
      <div className="container-app">
        <HeaderComponent onSearch={handleSearch} />
        <CardComponent data={data} buscarProducto={buscarProducto} />
        <FooterComponent />
      </div>
    </>
    
  );
}

export default App;
