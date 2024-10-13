import { createContext, useState } from "react";
import BuyWindow from "./BuyWindow";

const GeneralContext = createContext({
    openBuyWindow : (stock) =>{},
    closeBuyWindow : ()=>{}
})
 export const GeneralContextProvider = (props) => {
    const [stock , setStock] = useState({});
    const [buy , setBuy] = useState(false);
    const handleBuyClick = (stock) =>{
        console.log(stock);
        setStock(stock.stock)
        setBuy(true);
    }
    const handleCancelClick = ()=>{
        setBuy(false);
    }
    return (  
        <GeneralContext.Provider  value={{
            openBuyWindow : handleBuyClick,
            closeBuyWindow : handleCancelClick,
        }}>
            {props.children}
            {buy && <BuyWindow stock={stock} />}
        </GeneralContext.Provider>
    );
}

export default GeneralContext;