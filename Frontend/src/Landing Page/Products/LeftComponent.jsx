import {Link} from 'react-router-dom'
function LeftComponent({left}) {
    console.log(left.iStore);
    return (
        <div className="container ">
            <div className="row">
                <div className="col-8 p-5" style={{textAlign:"center"}}>
                    <img src={left.img} alt=""  style={{width:"75%"}}/>
                </div>
                <div className="col-4 p-5" style={{display:"flex",flexDirection:"column",justifyContent:"center"}}>
                    <h1 className='mb-5'>{left.title}</h1>
                    <p className='mb-5'>{left.para}</p>
                    <div className="row">
                        <a className="col" href={left.playStore}>
                            <img src="/media/images/googlePlayBadge.svg" />
                        </a>
                        <a className='col' href={left.iStore}>
                            <img src="/media/images/appstoreBadge.svg" />
                        </a>
                    </div>
                </div>
                
            </div>
        </div>
     );
}

export default LeftComponent;