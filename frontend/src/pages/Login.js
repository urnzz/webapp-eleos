import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:3001/users/login', { email, password });

            // Se o login for bem-sucedido e o token estiver presente na resposta:
            if (response.data.token) {
                // Armazena o token no localStorage
                localStorage.setItem('authToken', response.data.token);
                
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
        <div class="menu">
             <div class="menu-esquerda">
 
             </div>
 
             <div class="menu-direita">
             
                     <h3 class="menu-texto">Home</h3>
                 
                     <h3 class="menu-texto">Sobre</h3>
                 
                     <h3 class="menu-texto">Contato</h3>
                 
                     <h3 class="menu-texto">login</h3>
                 
                     <h3 class="menu-texto">Registrar</h3>
 
             </div>
 
         </div>
             <div class="fundo">
             
             </div>
             
 
         <div class="login"> 
             {error && <p style={{ color: 'red' }}>{error}</p>}
             <form>
                <div class="items"> 
 
                     <label class="login-cpf">CPF/CNPJ</label><p></p> <input 
                         type="email"
                         placeholder="Email"
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                     /><br></br>
 
                     <label class="senha">Senha</label><p></p><input 
                         type="password"
                         placeholder="Password"
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                     /><br></br>
                      <button onClick={handleLogin}>Login</button>
                </div> 
             </form>
         </div>
             <div class="fundo2">
             
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

export default Login;
