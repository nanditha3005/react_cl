//without using useefffect i.e thorough event handlers
import axios from "axios"
import { useState } from "react"
let User=()=>{
    let [users,setUsers]=useState([])
    let userHandler=()=>{
        // console.log("Test case 123")
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{setUsers(resp.data)})
        .catch((err)=>{console.log(err.name)})
    }

    return <div>
             <h1>User Component</h1>
             <pre>{JSON.stringify(users)}</pre>
             <button onClick={userHandler}>Get Users</button>
             <table border={2} >
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    users.map((user,index)=>{
                        return <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address.city}</td>
                        </tr>
                    })
                }
                </tbody>
             </table>
           </div>
}
export default User;


