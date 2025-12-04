import Axios from "axios"
let User=()=>{
    let userHandler=()=>{
        // console.log("Test case 123")
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{console.log(resp.data)})
        .catch((err)=>{console.log(err.name)})
    }

    return <div>
             <h1>User Component</h1>
             <button onClick={userHandler}>Get Users</button>
           </div>
}
export default User;