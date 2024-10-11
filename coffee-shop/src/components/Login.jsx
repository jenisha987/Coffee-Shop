import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();
    const [ input, setInput ] = useState({
        email: "",
        password: "",
    });

    const handleLogin = (e) => {
        e.preventDefault();
        const loggeduser = JSON.parse(localStorage.getItem("user"));
        if (input.email === loggeduser.email && input.password === loggeduser.password) {
            localStorage.setItem("loggedin", true)
            navigate("/");
        } else {
            alert("Wrong email or password");
        }
    }
 
  return (
    <div>
        <div>Login</div>
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor='email'>Email</label>
                    <input 
                        type="text" 
                        name="email"
                        value={input.email}
                        onChange={(e) => 
                            setInput({
                                ...input, 
                                [e.target.name]: e.target.value,
                            })
                        } 
                        id="email"
                        placeholder='Email' />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input 
                        type="password" 
                        name="password" 
                        value={input.password}
                        onChange={(e) => 
                            setInput({
                                ...input, 
                                [e.target.name]: e.target.value,
                            })
                        }
                        id="password"
                        placeholder='Password' />
                </div>
                <div>
                    <button type='submit'>Login</button>
                </div>
                <div>
                    <p>Don't have an account?</p>
                    <Link to="/register">Register here</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login