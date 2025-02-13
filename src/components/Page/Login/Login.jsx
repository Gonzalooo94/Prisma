import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import "./login.css"

export default function () {
    const [user, errorUser] = useState("");
    const [pass, errorPass] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate(); // Hook para redirigir

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Usuario y contraseña correctos
        if (user === "sysadmin" && pass === "sysadmin") {
          
          // Aquí puedes redirigir al usuario a otra página o cambiar el estado de autenticación.
          navigate("/Dashboard"); // Redirige a la página Dashboard
        } else {
          setError("Credenciales incorrectas");
        }
      };

  return (
   
    <div >
   <div><h2>Iniciar Sesión</h2></div>
  <form className="login-container" onSubmit={handleSubmit}>
    <div className="input-group">
      <label>Email:</label>
      <input type="text" placeholder="Ingresa tu correo"  value={user} onChange={(e) => errorUser(e.target.value)}
            required />
    </div>

    <div className="input-group">
      <label>Contraseña:</label>
      <input type="password" placeholder="Ingresa tu contraseña" value={pass}
            onChange={(e) => errorPass(e.target.value)}
            required
 />
    </div>
    {error && <p className="error">{error}</p>}

    <button type="submit">Iniciar Sesión</button>
  </form>
</div>
   
  )
}
