import React from "react";

let CompB=(props)=>{

    return <div>
             <h3>Component B</h3> 
             <pre>{JSON.stringify(props)}</pre> 
             <h4>Message:{props.msg}</h4>
             <h4>Employee ID:{props.emp_Id}</h4> 
             <h4>Employee Name:{props.emp_Name}</h4>         
           </div>
}
export default CompB;

