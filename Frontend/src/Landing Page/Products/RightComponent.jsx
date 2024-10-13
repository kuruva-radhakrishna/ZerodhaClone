
function RightComponent({right}) {
    return (  
        <div className="container">
            <div className="row " >
                <div className="col-4 p-5" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <h1 className="mb-3">{right.title}</h1>
                    <p className="mb-3">{right.para}</p>
                    <a href="">Learn more</a>
                </div>
                <div className="col-8 p-5" style={{textAlign:"center"}}>
                    <img src={right.img} alt=""  style={{width:"75%"}}/>
                </div>
            </div>
        </div>
    );
}

export default RightComponent;