import React from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importando o hook useNavigate

function Register() {
  const navigate = useNavigate(); // Usando o hook para obter a função de navegação

  const handleRegister = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/users/register', data);
      console.log(response.data);

      // Redireciona para a página de login após um registro bem-sucedido
      navigate('/login');

    } catch (error) {
      if (error.response) {
        // O pedido foi feito e o servidor respondeu com um status fora do intervalo de 2xx
        console.error("Error registering", error.response.data);
      } else if (error.request) {
        // O pedido foi feito, mas não houve resposta
        console.error("No response from server", error.request);
      } else {
        // Alguma outra coisa aconteceu ao configurar a requisição
        console.error("Error setting up request", error.message);
      }
    }
  };

  return (
    <div>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default Register;
