// same as users but using class components
// Class Component version
import React, { Component } from "react";
import Axios from "axios";

class Userr extends Component {
  // Constructor to initialize state
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  // Equivalent to useEffect with [] (runs once after first render)
  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => {
        this.setState({ users: resp.data });
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
      });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <h1>User Component</h1>
        <pre>{JSON.stringify(users, null, 2)}</pre>
        <table border={2}>
          <thead>
            <tr>
              <th>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Userr;