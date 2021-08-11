import React from "react";

import maleImg from "../assets/images/male.png";
import femaleImg from "../assets/images/female.svg";
import questionImg from "../assets/images/question.svg";

const Contact = ({firstName, lastName, phone, gender, id}) => {
  return (
      <div className="contact">
        <div className="contact__gender">
          <img className="gender" scr={gender === "male" ? maleImg : gender === "female" ? femaleImg : questionImg}></img>
        </div>
        <div className="contact__info">
          <div className="name"> 
            <span className="firstName">{firstName} </span>
            <span className="lastName">{lastName} </span>
          </div>
          <div className="phone"> {phone} </div>
        </div>       
      </div>

    )
  }

  export default Contact;

/*
import React from "react";
//import "./Contacts.css";


export default function Contact({ contact }) {

  }
  return (
    <div className="contact_container">

      <div className="contact">
        <div className="contact_name">
          {contact.firstName} {contact.lastName}
          <img className="gender_icon" src={showGender()} alt="icon" />
        </div>
        <div className="phone_number">{contact.phone}</div>
      </div>
    </div>
  );
}
*/