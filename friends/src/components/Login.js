import React, { useState } from 'react';
import axios from 'axios';


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

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
    
    return (
        <div>
            <form>
                <input
                    type='text'
                    name = 'username'
                    value={}
                    onChange={}
                />
                <input
                    type='password'
                    name = 'password'
                    value={}
                    onChange={}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}

export default Login;
