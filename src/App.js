// import logo from './logo.svg';
import "./App.css";
// import "primereact/resources/primereact.min.css";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login";
import { Registro } from "./Pages/Registro";
import { Menu } from "./Pages/Menu";
import { Perfil } from "./Pages/Perfil";

function App() {
  return (
    <div className="App">
      <header>
        <Routes>
          <Route path="/Perfil" element={<Perfil />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/Registro" element={<Registro />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
