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
                window.location.href = '/tarefas';
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
         <div className="login"> 
             {error && <p style={{ color: 'red' }}>{error}</p>}
             <form>
                <div className="items"> 
 
                     <label className="login-cpf">E-mail</label><p></p> <input 
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
 
    );
}

export default Login;
