import { Link } from "react-router-dom";
function Error() {
    return (  
        <div className="container" style={{height:"60vh",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
            <h4>404. That's an error.</h4> <br />
            <p>The requested URL was not found on this server.</p> <br />
            <h5>Visit <Link to='/'>Home</Link></h5>
        </div>
    );
}

export default Error;