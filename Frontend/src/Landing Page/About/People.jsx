function People() {
    return ( 
        <div className="container p-5">
            <h1 style={{textAlign:"center"}}>People</h1>
            <div className="row p-5">
                <div className="col-5" style={{textAlign:"center"}}>
                    <img src="/media/images/nithinKamath.jpg" alt="" style={{borderRadius:"50%",width:"45%"}}/>
                    <h4>Nithin Kamath</h4>
                    <p>Founder, CEO</p>
                </div>
                <div className="col">
                    <p className="mb-3">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p className="mb-3">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p className="mb-3">Playing basketball is his zen.</p>
                    <p>Connect on Homepage / TradingQnA / Twitter</p>
                </div>
            </div>
        </div>
     );
}

export default People;