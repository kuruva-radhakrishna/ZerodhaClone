import TextField from '@mui/material/TextField';
import {Link} from 'react-router-dom'
function Login() {

  return (
    <div className="container Signup " >
      <div className="row">
        <div className="col p-5">
          <img src="/media/images/signup.png" alt="" style={{ width: "100%" }} />
        </div>
        <div className="col p-5" style={{textAlign:"left",justifyContent:"center",display:"flex",flexDirection:"column"}}>
          <h2>Login</h2>  
          <TextField label="Username" />
          <TextField label="password" type='password' className='mt-3'/>

          <div className="row mt-3 p-3" style={{alignItems:"baseline"}}>
            <button className="btn btn-primary col-2 ">Continue</button>
            <p className='col'>New to Zerodha <Link to='/signUp'>Signup</Link></p>
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

export default Login;
