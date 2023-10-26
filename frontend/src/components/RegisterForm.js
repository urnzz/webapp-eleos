import React, { useState } from 'react';
import './RegisterForm.css';

function RegisterForm({ onRegister }) {
  const [formData, setFormData] = useState({
    user_type: 'PERSON',
    cpf_cnpj: '',
    full_name: '',
    username: '',
    email: '',
    password: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zip_code: '',
    description: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onRegister(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Tipo:
        <select name="user_type" value={formData.user_type} onChange={handleChange}>
          <option value="PERSON">Pessoa</option>
          <option value="ONG">ONG</option>
        </select>
      </label>
      <br />

      <label>
        CPF/CNPJ:
        <input
          type="text"
          name="cpf_cnpj"
          value={formData.cpf_cnpj}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Nome Completo/Organização:
        <input
          type="text"
          name="full_name"
          value={formData.full_name}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Username:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Senha:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </label>
      <br />

      <label>
        Telefone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Endereço:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Cidade:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Estado:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        CEP:
        <input
          type="text"
          name="zip_code"
          value={formData.zip_code}
          onChange={handleChange}
        />
      </label>
      <br />

      <label>
        Descrição:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
      <br />

      <button type="submit">Registrar</button>
    </form>
  );
}

export default RegisterForm;
