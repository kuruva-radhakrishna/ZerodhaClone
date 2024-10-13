function Education() {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <img
              style={{ width: "90%" }}
              src="/media/images/education.svg"
              alt=""
            />
          </div>
          <div className="col-6" style={{display:"flext",alignItems:"center",alignContent:"center"}}>
            <h1>Free and open market education</h1>
            <p>
              Varsity, the largest online stock market education book in the
              world covering everything from the basics to advanced trading.
            </p>
            <a href="#">Varsity →</a>
            <br />
            <br />
            <p>
              TradingQ&A, the most active trading and investment community in
              India for all your market related queries.
            </p>
            <a href="#">TradingQ&A →</a>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default Education;
