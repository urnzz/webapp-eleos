import React, { useState } from 'react';
import '../pages/Menu.css';
import './cadastro-instituicao.css';

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
   <div>

    <div class="cadastro-prestador">

      <form onSubmit={handleSubmit}>
       <div class="menu-cadastro">
          <h1 class="titulo-cadastro">Cadastro</h1>
         {/*  talvez não ira ser usador

          <label class="">
          Tipo:
          <select name="user_type" value={formData.user_type} onChange={handleChange}>
          <option value="PERSON">Pessoa</option>
          <option value="ONG">ONG</option>
          </select><p></p>
          </label>
          <br/>
        */} 

          <label >
          <input
            class="texto-cadastro"
            type="text"
            placeholder=' Nome Completo'
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
            />
          </label>
          <br />

          <label>
          <input
            class="texto-cadastro"
            type="text"
            placeholder=' CPF'
            name="cpf_cnpj"
            value={formData.cpf_cnpj}
            onChange={handleChange}
            required
            />
          </label>
          <br/>

          <label >
          <input
            class="texto-cadastro"
            type="text"
            placeholder=' Usuario'
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            />
          </label>
          <br />

          <label >
          <input

type="email"
            class="texto-cadastro"
            placeholder=' E-mail'
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          </label>
          <br />
          <label >
          <input
            class="texto-cadastro"
            type="tel"
            placeholder=' Telefone'
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            />
          </label>
          <br />

          <label >
          <input
            class="texto-cadastro"
            type="password"
            placeholder=' Senha'
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            />
          </label>
          <br />




           {/*  dopo a não ser utilizado
         <label class="">
          <input
            type="text"
            placeholder=' Endereço'
            name="address"
            value={formData.address}
            onChange={handleChange}
            />
            </label >
            <br />
            
            <label class="">
            <input
            type="text"
            placeholder=' Cidade'
            name="city"
            value={formData.city}
            onChange={handleChange}
          />
          </label>
          <br />

          <label class="">
          <input
            type="text"
            placeholder=' Estado'
            name="state"
            value={formData.state}
            onChange={handleChange}
            />
            </label>
            <br />
            
            <label class="">          
            <input
            type="text"
            placeholder=' CEP'
            name="zip_code"
            value={formData.zip_code}
            onChange={handleChange}
            />
            </label>
            <br />
            
            <label class="">
            Descrição:
            <textarea
            name="description"
            value={formData.description}
             onChange={handleChange}
             />
             </label>
             <br />
            */}   

          <button class="botao-cadastro" type="submit">Registrar</button>
        </div> 
        
      </form>
      
    </div>
    <div class="rodape-footer">
    <div class="footer-esquerda">

    </div>
    <div class="footer-direita">
        
            <h3 class="footer-texto">Home</h3>
        
            <h3 class="footer-texto">Sobre</h3>
        
            <h3 class="footer-texto">Contato</h3>
        
            <h3 class="footer-texto">login</h3>

            <h3 class="footer-texto">Registrar</h3>

    </div>
</div>
            </div> 
  );
}

export default RegisterForm;
