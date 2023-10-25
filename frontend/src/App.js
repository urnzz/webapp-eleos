import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import './pages/login.css';
import './pages/Menu.css';


function App() {
  return (
    <Router>
      <div>
        {/* Navegação */}
        <nav>
         <div class="menu">
          <div class="menu-esquerdar">
            <div class="imagem-menu">
              <img src=''></img>
            </div>  

          </div>


          <div class="menu-direita">

              <h3 class="menu-texto">Home</h3>
         
              <h3 class="menu-texto">Sobre</h3>
         
              <h3 class="menu-texto">Contato</h3>
  
              <h3 class="menu-texto"><Link to="/login">Login</Link></h3>

              <h3 class="menu-texto"><Link to="/register">Cadastrar</Link></h3>
            {/* Você pode adicionar outros links de navegação aqui */}
          
          </div>
          </div>
        </nav>

        {/* Definição das Rotas */}
        <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
          {/* Adicione outras rotas conforme necessário */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;