import React, { useState } from 'react';
import axios from 'axios';

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
            <h2>Login</h2>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <input 
                type="email"
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}

export default Login;
