import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiCoffeescript } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const Register = () => {

    const navigate = useNavigate();
    const [ input, setInput ] = useState({
        name: "",
        email: "",
        password: "",
    });

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     localStorage.setItem("user", JSON.stringify(input));
    //     navigate("/login");
    // }


    // State for users
    const [users, setUsers] = useState([]);

    // Load users from localStorage on component mount
    useEffect(() => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        setUsers(storedUsers);
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if the email is already registered
        const userExists = users.find((user) => user.email === input.email);
        if (userExists) {
            alert("User with this email already exists!");
            return;
        }

        // Add new user to the users array
        const updatedUsers = [...users, input];
        setUsers(updatedUsers); // Update the state

        // Save updated users list to localStorage
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        // Navigate to login page
        navigate("/login");
    };

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
        <form onSubmit={handleSubmit}>
            <div className='form-input'>
                <FaUser />
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
                    placeholder='Username'
                    autoComplete='off' />
            </div>
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
                    placeholder='Email address'
                    autoComplete='off' />
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
                    placeholder='Password'
                    autoComplete='off' />
            </div>
            {/* <p>Forgot your password?</p> */}
            <div className='form-input'>
                <button type='submit'>Register</button>
                <div className='form-login'>
                    <>Already have an account?</>
                    <Link to="/login">Login here</Link>
                </div>
            </div>
        </form>
    </div>
  )
}

export default Register