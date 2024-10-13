import './Hero.css'
function Hero() {
    return ( 
        <div className="container">
            <div className="row  mb-5">
                <img src="/media/images/homeHero.png" alt="Hero img" className="col-10 offset-1"/>
            </div>
            <div className="Signup row mb-5">
                <h1>Invest in everything</h1>
                <p >Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <button className="btn btn-primary col-2 p-1">Sign up for free</button>
            </div>
        </div>
     );
}

export default Hero;