import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "../../Page/Dashboard/Dashboard.jsx"
import Login from '../../Page/Login/Login.jsx';
import PDV from '../../Page/Punto de venta/PDV.jsx';

export default function RoutePublic() {
  return (
    <Router background="100%"> {/* 🔹 Asegurar que Router envuelve todo */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Puntodeventa" element={<PDV />} />
      </Routes>
    </Router>
  )
}
