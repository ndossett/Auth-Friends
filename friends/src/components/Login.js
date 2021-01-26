import React, { useState } from 'react';
import axios from 'axios';


const Login = ({onChange, login, loginSubmit, username, password}) => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const [isLoading, setIsLoading] = useState(false)

    onChange = e => {
        setCredentials({
            ...credentials, [e.target.name] : e.target.value
        });
    };

    login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.payload);
                history.push('/protected');
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    loginSubmit = () => {
        login(credentials)
        setIsLoading(true)
    }

    return (
        <div>
            <form>
                <input
                    type='text'
                    name = 'username'
                    value={username}
                    onChange={onChange}
                />
                <input
                    type='password'
                    name = 'password'
                    value={password}
                    onChange={onChange}
                />
                <button onClick={loginSubmit} isLoading={isLoading}>Log In</button>
            </form>
        </div>
    )
}

export default Login;
