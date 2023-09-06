// import logo from './logo.svg';
import './App.css';
import { Login } from './components/Login';
import { Routes, Route } from 'react-router-dom';
import { Perfil } from './components/Perfil';
import { Registro } from './components/Registro';
import { Menu } from './components/Menu'
import "primereact/resources/primereact.min.css"; 

function App() {
  return (
    <div className="App">
      <header>
        <Menu/>
        <Routes>
          <Route path='/Perfil' element={<Perfil/>}></Route>
          <Route path='/Login' element={<Login/>}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
