import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiCoffeescript } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

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
    <div className='signup-box'>
        <div className='title'>
            <Link to="/" className='form-logo'>
            <SiCoffeescript />
            <span>Coffee Cove</span>
            </Link>
        </div>
        <div className='underline'><hr /></div>
        <div className='form-header'>great to have you!</div>
        <form onSubmit={handleLogin}>
            <div className='form-input'>
                <IoMdMail />
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
                    placeholder='Email address' />
            </div>
            <div className='form-input'>
                <RiLockPasswordFill />
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
            <p>Forgot your password?</p>
            <div className='form-input'>
                <button type='submit'>log in</button>
                <div className='form-login'>
                    <>Don't have an account?</>
                    <Link to="/register">register</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Login