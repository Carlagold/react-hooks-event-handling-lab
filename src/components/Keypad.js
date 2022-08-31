// Code Keypad Component Here
import React from "react";

function Keypad () {
    function change(event) {
        console.log(`Entering password...`);
    }
    return (
        <div>
            <input 
             type="password" name="search" onChange={change}
                placeholder="Entering password..."/>
        </div>
    )
}
export default Keypad;