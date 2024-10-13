function Hero() {
  return (
    <>
      <div
        className="container mt-5 p-5 "
        style={{ textAlign: "center", color: "rgb(62,62,62" }}
      >
        <h1 className="mb-3">Charges</h1>
        <h4 className="text-muted mb-5">List of all charges and taxes</h4>
      </div>
      <div
        className="container mt-5 p-5 "
        style={{ textAlign: "center", color: "rgb(62,62,62" }}
      >
        <div className="row mt-5">
          <div className="col">
            <img
              src="/media/images/pricing0.svg"
              alt=""
              style={{ width: "70%" }}
            />
          </div>
          <div className="col">
            <img
              src="/media/images/intradayTrades.svg"
              alt=""
              style={{ width: "70%" }}
            />
          </div>
          <div className="col">
            <img
              src="/media/images/pricing0.svg"
              alt=""
              style={{ width: "70%" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Free equity delivery</h3>
            <h5 className="text-muted">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </h5>
          </div>
          <div className="col">
            <h3>Intraday and F&O trades</h3>
            <h5 className="text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </h5>
          </div>
          <div className="col">
            <h3>Free direct MF</h3>
            <h5 className="text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
