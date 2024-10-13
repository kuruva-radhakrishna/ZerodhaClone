import './createTick.css'
function CreateTicket() {
    return (  
        <div className="container">
            <div className="row mb-3">
                <h4>To create a ticket, select a relevant topic</h4>
            </div>
            <div className="row mb-5">
                
                <div className="Ticket-links col" style={{display:"flex",flexDirection:"column"}}>
                    <h6><i class="fa-solid fa-user-plus"></i>&nbsp;&nbsp;Account Opening</h6>
                    <a href="">Getting started</a>
                    <a href="">Online</a>
                    <a href="">Offline</a>
                    <a href="">Charges</a>
                    <a href="">Company, Partnership and HUF</a>
                    <a href="">Non Resident Indian (NRI)</a>
                    
                </div>
                
                <div className="Ticket-links col" style={{display:"flex",flexDirection:"column"}}>
                    <h6><i class="fa-solid fa-user"></i>&nbsp;&nbsp; Your Zerodha Account</h6>
                    <a href="">Login credentials</a>
                    <a href="">Your Profile</a>
                    <a href="">Account modification and segment addition</a>
                    <a href="">CMR & DP ID</a>
                    <a href="">Nomination</a>
                    <a href="">Transfer and conversion of shares</a>
                </div>

                <div className="Ticket-links col" style={{display:"flex",flexDirection:"column"}}>
                    <h6><i class="fa-solid fa-signal"></i>&nbsp;&nbsp;Trading and Markets</h6>
                    <a href="">Trading FAQs</a>
                    <a href="">Kite</a>
                    <a href="">Margins</a>
                    <a href="">Product and order types</a>
                    <a href="">Corporate actions</a>
                    <a href="">Kite features</a>
                </div>
            </div>

            <div className="row mb-5">

                <div className="Ticket-links col" style={{display:"flex",flexDirection:"column"}}>
                    <h6><i class="fas fa-wallet"></i>&nbsp;&nbsp;Funds</h6>
                    <a href="">Fund withdrawal</a>
                    <a href="">Adding funds</a>
                    <a href="">Adding bank accounts</a>
                    <a href="">eMandates</a>
                </div>

                <div className="Ticket-links col" style={{display:"flex",flexDirection:"column"}}>
                    <h6><i class="fa-solid fa-user"></i>&nbsp;&nbsp;Console</h6>
                    <a href="">IPO</a>
                    <a href="">Portfolio</a>
                    <a href="">Funds statement</a>
                    <a href="">Profile</a>
                    <a href="">Reports</a>
                    <a href="">Referral program</a>
                </div>

                <div className="Ticket-links col" style={{display:"flex",flexDirection:"column"}}>
                    <h6><i class="fa-solid fa-coins"></i>&nbsp;&nbsp;Coin</h6>
                    <a href="">Understanding mutual funds and Coin</a>
                    <a href="">Coin app</a>
                    <a href="">Coin web</a>
                    <a href="">Transactions and reports</a>
                    <a href="">National Pension Scheme (NPS)</a>
                </div>
            </div>

        </div>
    );
}

export default CreateTicket;