import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Landing Page/Home/Home'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import NavBar from './Landing Page/NavBar';
import Footer from './Landing Page/Footer';
import Pricing from './Landing Page//Pricing/Pricing';
import About from './Landing Page/About/About'
import Products from './Landing Page/Products/Products'
import SignUp from './Landing Page/Signup/SignUp'
import Support from './Landing Page/Support/Support'
import Error from './Landing Page/Error';
import Login from './Landing Page/Login/Login';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}  />
          <Route path='/signUp' element={<SignUp/>}   />
          <Route path='/support' element={<Support/>}  />
          <Route path='/products' element={<Products/>}  />
          <Route path='/pricing' element={<Pricing/>}  />
          <Route path='/login' element = {<Login/>} />
          <Route path='/*' element={<Error/>} />
        </Routes>
        <Footer />
      </Router>
    
  </StrictMode>
)
