import React from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';

function Register() {
  const handleRegister = async (data) => {
    try {
      const response = await axios.post('http://localhost:3001/users/register', data);
      console.log(response.data);
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
      <h2>Register</h2>
      <RegisterForm onRegister={handleRegister} />
    </div>
  );
}

export default Register;
