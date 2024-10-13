import './Pricing.css'
function Pricing() {
    return (  
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Unbeatable pricing</h1>
                    <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                </div>
                <div className="price col">
                    <div className="row">
                    <div className="priceCard col-4">
                        <img  style = {{width : "50px"}} src="/media/images/pricing0.svg" alt="" />
                        <div className="pricetext text-muted">
                            <p >Free account opening</p>
                        </div>
                    </div>
                    <div className="priceCard col-4">
                        <img style = {{width : "50px"}} src="/media/images/pricing0.svg" alt="" />
                        <div className="pricetext text-muted">
                            <p>Free equity delivery and direct mutual funds</p>
                        </div>
                    </div>
                    <div className="priceCard col-4 ">
                        <img style = {{width : "50px"}} src="/media/images/intradayTrades.svg" alt="" />
                        <div className="pricetext text-muted ">
                            <p >Intraday and F&O</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <a href="#">See pricing →</a>
            </div>
            <div className="row"></div>
        </div>
    );
}

export default Pricing;