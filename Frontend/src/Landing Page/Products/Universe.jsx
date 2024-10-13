function Universe() {
  return (
    <div className="container p-5" style={{ textAlign: "center" }}>
      <div className="row p-5">
        <p className="mb-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </p>
        <h1 className="mt-4 mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row">
        <div className="col p-5">
          <img src="/media/images/zerodhaFundhouse.png" alt="" style={{height:"55px",width:"150px"}} />
          <p>
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col p-5">
          <img src="/media/images/sensibullLogo.svg" alt="" style={{height:"55px",width:"150px"}} />
          <p>
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col p-5">
          <img src="/media/images/tijori.svg" alt="" style={{height:"55px",width:"150px"}}/>
          <p>
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>
      <div className="row ">
        <div className="col p-5">
          <img src="/media/images/streakLogo.png" alt="" style={{height:"55px",width:"150px"}}/>
          <p>
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col p-5">
          <img src="/media/images/smallcaseLogo.png" alt=""style={{height:"55px",width:"150px"}} />
          <p>
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col p-5">
          <img src="/media/images/dittoLogo.png" alt="" style={{height:"55px",width:"150px"}}/>
          <p>
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free
          </p>
        </div>
      </div>
      <div className="row" style={{justifyContent:"center"}}>
        <button className="btn btn-primary col-2">Sing Up</button>
      </div>
    </div>
  );
}

export default Universe;
