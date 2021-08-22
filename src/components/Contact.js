import React from "react";

import { BiMaleSign } from "react-icons/bi";
import { BiFemaleSign } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";

const iconMale = <BiMaleSign/>;
const iconFemale = <BiFemaleSign/>;
const iconUndefined = <BiQuestionMark />

const Contact = ({firstName, lastName, phone, gender}) => {
  let genderImg;
    if (gender == "male") {
      genderImg = iconMale;
    } else if (gender == "female") {
      genderImg = iconFemale;
    } else {
      genderImg = iconUndefined;
    }

  return (
      <div className="contact">
        <div className="contact__gender">
          <div className="gender__img"> {genderImg}</div>
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