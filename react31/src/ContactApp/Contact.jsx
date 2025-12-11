import React, { useEffect, useState } from 'react'
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import Axios  from 'axios';

const Contact = () => {
  let[contact,setContact]=useState([])

  useEffect(()=>{
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
    .then((resp)=>{setContact(resp.data)})
    .catch()
  },[])


  return (
    <div>
      <h2>Contact App Component</h2>
        <div className="container">
          <div className="row">
            <pre>{JSON.stringify(contact)}</pre>
            <div className="col-8">
              <ContactList contacts={contact}/>
            </div>
            <div className="col-4">
              <ContactDetails/>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Contact;
