import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import './Login.css'
import { useState , useContext} from 'react';
import axios from 'axios';
import userContext from './UserContext';
function Login() {
    const [username , setUsername] = useState('');
    const [pass , setPass] = useState('');
    const [error,setError] = useState(false);
    const [loginError , setLoginError] = useState('');
    const { updateUser ,user} = useContext(userContext); 
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'https://zerodhaclone-1-08be.onrender.com/login',
                { username: username, password: pass }, 
                { withCredentials: true }
            );
            console.log("Response user:", response.data.user);
            updateUser(response.data.user);
    
            // Wait for a short delay to ensure `localStorage` is updated
            setTimeout(() => {
                if (response.data.redirectURL) {
                    window.location.href = response.data.redirectURL;
                }
            }, 100);  // Slight delay before redirect
        } catch (error) {
            if (error.response) {
                setError(true);
                setLoginError(error.response.data.message);
            } else {
                setError(true);
                setLoginError("Network error, please try again.");
            }
        }
    };
    
    
    
    return (  
        <div className="login-container" >
            <div className="login-info p-5 mt-5">
                <h2>Login</h2> 
                {error && <p style={{color:"red"}}>{loginError}</p>}
                <div className="row">
                    <TextField label="Username" onChange={(e)=>{setUsername(e.target.value)}} value={username}/>
                </div>
                <div className="row">
                    <TextField  label="password" type='password'  onChange={(e)=>{setPass(e.target.value)}} value={pass}/>
                </div>
                <div className="row">
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button> 
                </div>
            </div>
            <div className="signup-info p-5">
                <div className="row">
                    <img style={{width:"30%",justifyContent:"center" }} src="logo.svg" alt="Zerodha Logo" />
                </div>
                <div className="row">
                    <p className="text-muted">Don't have an account? <a href="https://zerodhaclone-uos7.onrender.com/signup">SignUp</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;