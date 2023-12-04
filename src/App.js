import Button from "./Button"
import {GoBell} from 'react-icons/go'
import {CiAirportSign1 } from "react-icons/ci";
import './index.css'
const App = () => {
    
    return <div>
       
            <div>
                <Button className="mb-5" primary rounded>
                    <GoBell></GoBell>
                    click here
                </Button>
            </div>
            <div>
                <Button secondary>
                    <CiAirportSign1 />checkout</Button>
            </div>
            <div>
                <Button warning rounded>Add to cart</Button>
            </div>
            <div>
                <Button danger >delete from cart</Button>
            </div>
    </div>
}
export default App