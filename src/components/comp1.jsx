import React, { useState } from "react";
import "../App.css";

function Myc() {
    const [myvalue, myf] = useState(1);

    function lw() {
        myf(myvalue + 1);
        console.log(myvalue);
    }

    return (
        <div>
            <h1>{myvalue}</h1>
            <button className="bg-blue-700 text-white" onClick={lw}>Click</button>
        </div>
    );
}

export default Myc;
