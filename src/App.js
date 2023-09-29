// import "primereact/resources/primereact.min.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Registro } from "./Pages/Registro";
import { MenuPro } from "./Pages/MenuPro";
import { MenuCli } from "./Pages/PagesCli/MenuCli";
import { Perfil } from "./Pages/PerfilProfesional";
import { EditarPerfilPro } from "./Pages/EditarPerfilPro";
import { EditarPerfilCli } from "./Pages/PagesCli/EditarPerfilCli";
import PerfilCliente from "./Pages/PagesCli/PerfilCliente";

// Estilos
// import "./index.css";

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
          <Route path="/MenuCli" element={<MenuCli />}></Route>
          <Route path="/MenuPro" element={<MenuPro />}></Route>
          <Route path="/PerfilProfesional" element={<Perfil />}></Route>
          <Route path="/PerfilCliente" element={<PerfilCliente />}></Route>
          <Route path="/EditarPerfilPro" element={<EditarPerfilPro />}></Route>
          <Route path="/EditarPerfilCli" element={<EditarPerfilCli />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
