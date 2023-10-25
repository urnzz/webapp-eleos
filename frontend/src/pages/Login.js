import React, { useState } from 'react';
import axios from 'axios';
import './login.css';
import './Menu.css';
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
    
             <div class="fundo">
             
             </div>   
         <div class="login-prestador"> 
             {error && <p style={{ color: 'red' }}>{error}</p>}

             <form>
             <h1 class="titulo-login"> Login</h1>
                <div class="items"> 
 
                      <input 
                         class="login-caixa"
                         type="email"
                         placeholder="  CPF"
                         value={email}
                         onChange={e => setEmail(e.target.value)}
                     /><br></br>
 
                     <input 
                         class="login-caixa1"
                         type="password"
                         placeholder="  Senha"
                         value={password}
                         onChange={e => setPassword(e.target.value)}
                     /><br></br>
                      <button class="login-botao" onClick={handleLogin}>Entrar</button>
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
