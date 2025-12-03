import CompB from "./CompB";
let CompA=()=>{
    let eid=101;
    let ename="Rahul";

    return <div>
             <h2>Component A</h2>
             {/* <h4>Employee Id:{eid}</h4>
             <h4>Employee Name:{ename}</h4>
             <h4>{2*3}</h4> */}
             <hr />
             <CompB msg={"Good Morning"} emp_Id={eid} emp_Name={ename}/>
           </div>
}
export default CompA;
