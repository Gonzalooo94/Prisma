import React from 'react'
import "./Dashboard.css"
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate(); // Hook para redirigir
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/"); // Redirige a la página Login
  };

  const handlepdv = (e) => {
    e.preventDefault();
    navigate("/PDV"); // Redirige a la página Login
  };
  
  return (
    <div>
      <form >
      <div className="dash-container" >
      <button type="submit" className="bts" onClick={handlepdv} >Punto de venta</button>
      <button type="submit" className="bts">Busqueda de transacciones</button>
      <button type="submit" className="bts">Boletas pendientes</button>
      <button type="submit" className="bts">Sorpresas</button>
     
    </div>
    </form>
    <div > 
      <form onSubmit={handleSubmit}>
      <button type="submit" className="bts">Menú</button>
      <button type="submit" className="bts" >Cerrar Sesión</button>
      </form>
      
    </div>
    
    </div>
    
  )
}

