import React, { useState } from "react";
const Message=()=>{
    let [state,setState]=useState("Hello");

    let updateHandler=(msg)=>{
        setState(msg)
    }

    return  <div>
                <h1>Message:{state}</h1>
                <button onClick={updateHandler.bind(null,"GM")}>Good Morning</button>
                <button onClick={updateHandler.bind(null,"GA")}>Good Afternoon</button>
                <button onClick={updateHandler.bind(null,"GE")}>Good Evening</button>
                <button onClick={updateHandler.bind(null,"GN")}>Good Night</button>
            </div>

}
export default Message;


