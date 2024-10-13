import Hero from "./Hero";
import ChargesForOpening from './ChargesForOpening'
import AdditionalCharges from './AdditionalCharges'
import Brokerage from './Brokerage'
import Charges from "./Charges";

function Pricing() {
    return ( 
        <div>
            <Hero />
            <Charges />
            <ChargesForOpening />
            <AdditionalCharges />
            <Brokerage />
        </div>
    );
}

export default Pricing;