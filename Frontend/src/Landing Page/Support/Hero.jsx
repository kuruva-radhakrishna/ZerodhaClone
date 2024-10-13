function Hero() {
    return ( 
        <div className="container-fluid mb-5" style={{backgroundColor:"rgb(56, 126, 209)",color:"white"}}>
            <div className="container pt-5 pb-5">
                <div className="mb-4" style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                    <div >
                        <h3>Support Portal</h3>
                    </div>
                    <div >
                        <h5><a href="" style={{color:"white"}}>Track Tickets</a></h5>
                    </div>
                </div>

                <div className="row">
                    <div className="col-8 ">
                        <h3>Search for an answer or browse help topics to create a ticket</h3>
                        <input type="text" placeholder="Eg. How do I activate F&0" style={{width:"75%",padding:"1rem",borderRadius:"10px"}}/>
                    </div>
                    <div className="col-4">
                        <h5>Featured</h5>
                        <ol>
                            <li><a href="" style={{color:"white"}}>Surveillance measure on scrips - September 2024 </a></li>
                            <li><a href="" style={{color:"white"}}>Rights Entitlements listing in September 2024</a></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;