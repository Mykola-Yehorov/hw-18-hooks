import React, { useEffect, useState } from "react";
import Contact from "./Contact";
import "./Contacts.css";

const contacts = [{
    id: 0,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
  }, {
    id: 1,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
  }, {
    id: 2,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  }, {
    id: 3,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
  }, {
    id: 4,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
  }, {
    id: 5,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
  }];

export default function Contacts() {
        const [search, setSearch] = useState("")
        const [contactsFiltered, setContacts] = useState(contacts)
      
        
      useEffect(() => {
        const filteredContacts = contacts.filter((contact) => {
          return (
            contact.lastName.toLowerCase().includes(search.toLowerCase()) ||
            contact.firstName.toLowerCase().includes(search.toLowerCase()) ||
            contact.phone.includes(search)
          );
        });
        setContacts(filteredContacts);
      }, [search]);

      return (
  <div className="phone-book"> 
          <h1 className="title">Контакты</h1>
          <div className="search">
        <input onChange={(e)=> setSearch(e.target.value)} type="search" className="input" placeholder="Search" value={search}></input>
      </div>     

      <div className="mainblock"> { 
            contactsFiltered.map(contact => 
            
            <Contact key = {contact.id}
            firstName = {contact.firstName}
            lastName = {contact.lastName}
            phone = {contact.phone}
            gender = {contact.gender}
            />)
          } </div> 
 
        </div>
      )
    }