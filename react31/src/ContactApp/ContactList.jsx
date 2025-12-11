import React from 'react'

const ContactList = (props) => {
    let {contacts}=props;
    let contactHandler=()=>{
        alert('no way')
    }

  return (
    <div>
        <h2>Contact List</h2>
        <div className="container">
            <div className="row">
                <pre>{JSON.stringify(props)}</pre>
                <div className="col">
                    <table className='table'>
                        <thead className='table bg-dark'>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((user)=>{
                                    return <tr key={user.login.uuid} onClick={contactHandler}>
                                                <td>{user.login.uuid.substr(32)}</td>
                                                <td>{user.name.first}</td>
                                                <td>{user.email}</td>
                                          </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ContactList
