// import logo from './logo.svg';
import "./App.css";
// import "primereact/resources/primereact.min.css";
import { Login } from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import { Perfil } from "./Pages/Perfil";
import { Registro } from "./Pages/Registro";
import { Menu } from "./Pages/Menu";

function App() {
  return (
    <div className="App">
      <header>
        <Menu />
        <Routes>
          <Route path="/Perfil" element={<Perfil />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
