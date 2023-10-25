import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault(); // Prevent default form submission
        try {
            const response = await axios.post('http://localhost:3001/users/login', { email, password });

            // Se o login for bem-sucedido e o token estiver presente na resposta:
            if (response.data.token) {
                // Armazena o token no localStorage
                localStorage.setItem('authToken', response.data.token);
                localStorage.setItem('username', response.data.user.username); // save the username
        
                // (Opcional) Redireciona o usuário para uma página após o login
                window.location.href = '/';
                console.log("Login bem-sucedido!");
            } else {
                setError("Sem resposta");
            }
        } catch (error) {
            console.log(error)
            // Trate erros específicos conforme necessário, por exemplo, credenciais inválidas
            setError(error.response?.data?.error || 'Ocorreu um erro durante o login. Tente novamente.');
        }
    };

    return (
        <div>
        <div className="menu">
             <div className="menu-esquerda">
 
             </div>
 
             <div className="menu-direita">
             
                     <h3 className="menu-texto">Home</h3>
                 
                     <h3 className="menu-texto">Sobre</h3>
                 
                     <h3 className="menu-texto">Contato</h3>
                 
                     <h3 className="menu-texto">login</h3>
                 
                     <h3 className="menu-texto">Registrar</h3>
 
             </div>
 
         </div>
             <div className="fundo">
             
             </div>
             
 
         <div className="login"> 
             {error && <p style={{ color: 'red' }}>{error}</p>}
             <form>
                <div className="items"> 
 
                     <label className="login-cpf">CPF/CNPJ</label><p></p> <input 
                         type="email"
                         placeholder="Email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                     /><br></br>
 
                     <label className="senha">Senha</label><p></p><input 
                         type="password"
                         placeholder="Password"
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                     /><br></br>
                      <button onClick={(e) => handleLogin(e)}>Login</button>
                </div> 
             </form>
         </div>
             <div className="fundo2">
             
             </div>
         <div className="rodape-footer">
             <div className="footer-esquerda">
 
             </div>
             <div className="footer-direita">
                     <h3 className="footer-texto">Home</h3>
                 
                     <h3 className="footer-texto">Sobre</h3>
                 
                     <h3 className="footer-texto">Contato</h3>
                 
                     <h3 className="footer-texto">login</h3>
                 
                     <h3 className="footer-texto">Registrar</h3>
 
             </div>
         </div>
         
     </div>
 
    );
}

export default Login;
