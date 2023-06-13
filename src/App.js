import React from "react"

import Card from "./Card"
const stonks = ["Apple","AMD"]
const App = ()=>{
    return (
        <>
    <h3>This is a stocks  catalogue</h3>
 
    <Card title="Apple" imgUrl="https://www.apple.com/ac/globalfooter/8/nl_NL/assets/ac-footer/breadcrumbs/apple/icon_large.svg"/>
    <Card title="AMD" imgUrl="https://download.amd.com/OneTrust/202303.1.0a/consent/17a54836-920d-4fc2-a8f6-3f4c299371d1/ea9ee5bd-dddf-4385-afa9-5390e033f6c1/logos/522af4e3-8eb6-419a-ab34-33424f162acd/5e9fab35-3d99-4025-b771-cf95e8af7ccc/de82fccf-62aa-450c-acd5-b1c4786e2363/AMD-Logo-700x394.png"/>
    </>
    )
}
export default App