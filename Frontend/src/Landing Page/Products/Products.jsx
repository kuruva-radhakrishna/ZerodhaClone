import Hero from "./Hero";
import RightComponent from './RightComponent'
import LeftComponent from './LeftComponent'
import Universe from './Universe'
function Product() {
    const left1 = {
        img : "/media/images/kite.png",
        title : "Kite",
        para : "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices.",
        playStore : "https://play.google.com/store/apps/details?id=com.zerodha.kite3",
        iStore : "https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
    }
    const left2 = {
        img : "/media/images/coin.png",
        title : "Coin",
        para : "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.",
        playStore : "https://play.google.com/store/apps/details?id=com.zerodha.coin",
        iStore : "https://apps.apple.com/in/app/zerodha-coin-mutual-funds/id1392892554"
    }
    const left3 = {
        img : "/media/images/varsity.png",
        title : "Varsity mobile",
        para : "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go.",
        playStore : "https://play.google.com/store/apps/details?id=com.zerodha.varsity",
        iStore : "https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
    }

    const right1 ={
        img : "/media/images/console.png",
        title :"Console",
        para :"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
    }
    const right2 ={
        img : "/media/images/kiteconnect.png",
        title :"Kite Connect API",
        para :"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.",
    }
    return (  
        <div>
            <Hero />
            
            <LeftComponent left={left1} />
            <RightComponent right={right1}/>
            <LeftComponent left={left2} />
            <RightComponent right={right2}/>
            <LeftComponent left={left3} />
            <Universe />
        </div>
    );
}

export default Product;