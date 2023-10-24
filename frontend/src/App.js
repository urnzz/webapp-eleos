import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <div>
        {/* Navegação */}
        <nav>
          <ul>
            <li>
              <Link to="/register">Registrar</Link></li>
              <li>  <Link to="/login">Login</Link>
            </li>
            {/* Você pode adicionar outros links de navegação aqui */}
          </ul>
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