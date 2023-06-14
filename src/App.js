import React from "react"
import 'bulma/css/bulma.css'

import Card from "./Card"
const stonks = ["Apple","AMD"]
const App = ()=>{
    const appleImg = "https://www.apple.com/ac/globalfooter/8/nl_NL/assets/ac-footer/breadcrumbs/apple/icon_large.svg",amdImg="https://download.amd.com/OneTrust/202303.1.0a/consent/17a54836-920d-4fc2-a8f6-3f4c299371d1/ea9ee5bd-dddf-4385-afa9-5390e033f6c1/logos/522af4e3-8eb6-419a-ab34-33424f162acd/5e9fab35-3d99-4025-b771-cf95e8af7ccc/de82fccf-62aa-450c-acd5-b1c4786e2363/AMD-Logo-700x394.png";
    return (
        <>
    <h3>This is a stocks  catalogue</h3>
 <div className="container">
    <section className="section">
        <div className="columns">
            <div className="colums is-4">
                <Card title="Apple" imgUrl={appleImg} />
            </div>
            <div className="colums is-4">
                <Card title="AMD" imgUrl={amdImg} />
            </div>
        </div>
    </section>
 </div>
   
    
    </>
    )
}
export default App