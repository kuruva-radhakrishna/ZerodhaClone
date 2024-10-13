import Products from './Products'; 
import Services from './Services'; 
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="container-fluid border-bottom sticky-top" style={{ backgroundColor: "white", color: "black",width:"100%" }}>
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary " >
          <div className="container-fluid d-flex justify-content-between align-items-center" style={{padding:"0.25rem",paddingLeft:"0",paddingRight:"0"}}>
            
            {/* Logo */}
            <Link className="navbar-brand" to="/">
              <img
                src="/media/images/logo.svg"
                alt="Logo"
                style={{ maxWidth: "120px", height: "auto" }} // Control the size to avoid layout issues
              />
            </Link>

            
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link active text-muted " aria-current="page" to={'/'}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={'/signup'}>SignUp</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={'/about'}>About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={'/products'}>Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" to={'/pricing'}>Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active text-muted" aria-disabled="true" to={'/support'}>Support</Link>
                </li>
              </ul>
            </div>
            <button
              className="navbar-toggler d-block " 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ border: "none", backgroundColor: "transparent" }} // Optional styling to match design
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </nav>
        
        {/* Products and Services Components */}
        <div className="collapse" id="navbarNav">
          {/* This section will appear when navbar links are collapsed */}
          <Products />
          <Services />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
