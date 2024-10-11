import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();
    const [ input, setInput ] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    }

  return (
    <div>
        <div>Create an account</div>
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name</label>
                    <input 
                        type="text" 
                        name="name" 
                        value={input.name}
                        onChange={(e) => 
                            setInput({
                                ...input, 
                                [e.target.name]: e.target.value,
                            })
                        }
                        id="name"
                        placeholder='Name' />
                </div>
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
                    <button type='submit'>Register</button>
                </div>
                <div>
                    <p>Already have an account?</p>
                    <Link to="/login">Login here</Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register