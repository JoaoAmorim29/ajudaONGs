import React from "react";

import Topo from "./components/topo";
import ImageHome from "./components/imageHome";
import Ongs from "./components/ongs";

export default function Home(){
    return (<>
        <Ongs Topo={Topo} ImageHome={ImageHome}/>
    </>)
}
