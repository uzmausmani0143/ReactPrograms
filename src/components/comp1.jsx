import React, { useState } from "react";

function Myc() {
    const [myvalue, myf] = useState(1);

    function lw() {
        myf(myvalue + 1);
        console.log(myvalue);
    }

    return (
        <div>
            <h1>{myvalue}</h1>
            <button onClick={lw}>Click</button>
        </div>
    );
}

export default Myc;
