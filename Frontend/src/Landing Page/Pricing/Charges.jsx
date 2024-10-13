function Charges() {
    return (  
        <div className="container">
            <div className="row">
                <h5 className="mb-4">Charges Explained</h5>
                <div className="col">
                    <h6>Securities/Commodities transaction tax</h6>
                    <p className="text-muted">Tax by the government when transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading intraday or on F&O.</p>
                    <p className="text-muted">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>

                    <h6>Transaction/Turnover Charges</h6>
                    <p className="text-muted">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
                    <p className="text-muted">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
                    <p className="text-muted">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
                    <p className="text-muted">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
                    
                    <h6>Call & trade</h6>
                    <p className="text-muted">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
                
                    <h6>Stamp charges</h6>
                    <p className="text-muted">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>

                    <h6>NRI brokerage charges</h6>
                    <ul className="text-muted">
                        <li>₹100 per order for futures and options.</li>
                        <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                        <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                        <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
                    </ul>

                    <h6>Account with debit balance</h6>
                    <p className="text-muted">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
                
                    <h6>Charges for Investor's Protection Fund Trust (IPFT) by NSE</h6>
                    <ul className="text-muted">
                        <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                        <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                        <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
                    </ul>
                </div>

                <div className="col">

                    <h6>GST</h6>
                    <p className="text-muted">Tax levied by the government on the services rendered. 18% of ( brokerage + SEBI charges + transaction charges)</p>

                    <h6>SEBI Charges</h6>
                    <p className="text-muted">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>

                    <h6>DP (Depository participant) charges</h6>
                    <p className="text-muted">₹13 + GST per scrip (irrespective of quantity), on the day, is debited from the trading account when stocks are sold. This is charged by the depository (CDSL) and depository participant (Zerodha).</p>
                    <p className="text-muted">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction.</p>
                    <p className="text-muted">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25.</p>

                    <h6>Pledging charges</h6>
                    <p className="text-muted">₹30 + GST per pledge request per ISIN.</p>

                    <h6>AMC (Account maintenance charges)</h6>
                    <p className="text-muted">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, Click here</p>
                    <p className="text-muted">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, Click here</p>

                    <h6>Corporate action order charges</h6>
                    <p className="text-muted">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>

                    <h6>Off-market transfer charges</h6>
                    <p className="text-muted">₹25 or 0.03% of the transfer value (whichever is higher).</p>

                    <h6>Physical CMR request</h6>
                    <p className="text-muted">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>

                    <h6>Payment gateway charges</h6>
                    <p className="text-muted">₹9 + GST (Not levied on transfers done via UPI)</p>

                    <h6>Delayed Payment Charges</h6>
                    <p className="text-muted">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. Learn more.</p>
                </div>

                <h6>Disclaimer</h6>
                <p className="text-muted">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
            </div>
        </div>
    );
}

export default Charges;