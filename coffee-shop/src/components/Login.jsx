import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiCoffeescript } from "react-icons/si";
import { IoMdMail } from "react-icons/io";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ({ setLoggedInUser }) => {

    // const navigate = useNavigate();
    // const [ input, setInput ] = useState({
    //     email: "",
    //     password: "",
    // });
 

    // State for users
    // const [users, setUsers] = useState([]);

    // // Load users from localStorage on component mount
    // useEffect(() => {
    //     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    //     setUsers(storedUsers);
    // }, []);

    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     // Check if the email and password match any user in the array
    //     const loggedUser = users.find(
    //         (user) => user.email === input.email && user.password === input.password
    //     );

    //     if (loggedUser) {
    //         localStorage.setItem("loggedin", true);
    //         localStorage.setItem("loggedInUser", JSON.stringify(loggedUser)); // Store current user's data
    //         navigate("/");
    //     } else {
    //         alert("Wrong email or password");
    //     }
    // };


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    // useEffect(() => {
    //     const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    //     setUsers(storedUsers);
    // }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user =  { email, password };
        localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user in localStorage
        localStorage.setItem("loggedin", true); // Store user in localStorage
        setLoggedInUser(user);
        navigate('/');
    };

    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     // Find the user with matching email and password
    //     const loggedUser = users.find(
    //         (user) => user.email === email && user.password === password
    //     );

    //     if (loggedUser) {
    //         localStorage.setItem("loggedInUser", JSON.stringify(loggedUser)); // Store current user's data in localStorage
    //         setLoggedInUser(loggedUser); // Set the logged-in user state in the App component
    //         navigate("/"); // Redirect to the homepage
    //     } else {
    //         alert("Invalid email or password");
    //     }
    // };


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
                        value={email}
                        onChange={(e) => 
                            setEmail( e.target.value)
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
                        value={password}
                        onChange={(e) => 
                            setPassword(e.target.value)
                        }
                        id="password"
                        placeholder='Password'
                        autoComplete='off' />
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