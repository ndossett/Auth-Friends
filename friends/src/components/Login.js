import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
    });

    const history = useHistory()

    // const [isLoading, setIsLoading] = useState(false)

     const onChange = e => {
        setCredentials({
            ...credentials, [e.target.name] : e.target.value
        });
    };

    const login = () => {
        axios
            .post('http://localhost:5000/api/login', credentials)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.payload);
                history.push('/friends');
            })
            .catch(err => {
                console.log(err);
            });
    };
    
    const loginSubmit = e => {
        e.preventDefault();
        login()
        // setIsLoading(true)
    }

    return (
        <div>
         <div className="App">
            <header className="App-header">
            <h1>Find your Friends</h1>
            </header>
         </div>
            <form onSubmit={loginSubmit}>
                <input
                    type='text'
                    name = 'username'
                    value={credentials.username}
                    onChange={onChange}
                />
                <input
                    type='password'
                    name = 'password'
                    value={credentials.password}
                    onChange={onChange}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;
