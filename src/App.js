// import "primereact/resources/primereact.min.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Registro } from "./Pages/Registro";
import { Menu } from "./Pages/Menu";
import { Perfil } from "./Pages/PerfilProfesional";
import { EditarPerfil } from "./Pages/EditarPerfil";
import PerfilCliente from "./Pages/PerfilCliente";
// Estilos
// import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/PerfilProfesional" element={<Perfil />}></Route>
          <Route path="/PerfilCliente" element={<PerfilCliente />}></Route>
          <Route path="/EditarPerfil" element={<EditarPerfil />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
