import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
import './Signup.css'
import { useState } from 'react';
import axios from 'axios'
function SignUp() {
  const [username , setUsername] =useState("");
  const [email,setEmail ] = useState("");
  const [password , setPassword] = useState("");
  const handleSignup = () => {
    axios.post("https://zerodhaclone-1-08be.onrender.com/signup", {
        username: username,
        email: email,
        password: password,
    })
    .then((response) => {
        if (response.data.redirectURL) {
            window.location.href = response.data.redirectURL; // Redirect to the URL provided by the server
        }
    })
    .catch((error) => {
        console.error("Error during signup:", error);
    });
};
  return (
    <div className="container Signup " >
      <div className="row">
        <div className="col p-5">
          <img src="/media/images/signup.png" alt="" style={{ width: "100%" }} />
        </div>
        <div className="col p-5" style={{textAlign:"left",justifyContent:"center",display:"flex",flexDirection:"column"}}>
          <h2>Signup</h2>  
          <TextField label="Username" onChange={(e)=>{setUsername(e.target.value)} } value={username}/>
          <TextField label="email" className='mt-3' onChange={(e)=>{setEmail(e.target.value)} } value={email}/>
          <TextField label="password" type='password' className='mt-3' onChange={(e)=>{setPassword(e.target.value)} } value={password} />

          <div className="row mt-3 p-3" style={{alignItems:"baseline"}}>
            <button className="btn btn-primary col-2 " onClick={handleSignup}>Signup</button>
            <p className='col'>Have and account &nbsp;  <a href="https://zerodhaclone-2-k6wb.onrender.com/login">Login</a></p>
          </div>
        </div>
        <div className="row mt-5" style={{ textAlign: "center",padding:"0" }}>
          <p className="text-muted fs-6">
            I authorise Zerodha to contact me even if my number is registered on
            DND. I authorise Zerodha to fetch my KYC information from the C-KYC
            registry with my PAN. Please visit this article to know more.
          </p>
          <p className="text-muted fs-6">
            If you are looking to open a HUF, Corporate, Partnership, or NRI
            account, you have to use the offline forms. For help, click here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
