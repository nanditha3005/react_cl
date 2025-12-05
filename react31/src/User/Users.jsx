//using use effect 
import Axios from "axios"
import { useState,useEffect } from "react"
let Users=()=>{
    let [users,setUsers]=useState([])
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{setUsers(resp.data)})
        .catch()
    },[])
    return <div>
             <h1>User Component</h1>
             <pre>{JSON.stringify(users)}</pre>
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
export default Users;