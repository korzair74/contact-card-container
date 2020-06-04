import React from "react";

const ContactCard = (props) => {
  return (
    <div className='contact-card-container'>
      <div className='contact-wrapper' key={props.user.id}>
        <div className='one-column'>
          <h3>{props.user.name}</h3>
        </div>
        <div className='two-column'>
          <div className='left-column'>
            <h4>Email: {props.user.email}</h4>
            <h4>Phone: {props.user.phone}</h4>
          </div>
          <div className='right-column'>
            <h4>Company Name: {props.user.company.name}</h4>
            <h5>Address:</h5>
            <h6>{props.user.address.street}</h6>
            <h6>{props.user.address.suite}</h6>
            <h6>{props.user.address.city}</h6>
            <h6>{props.user.address.zipcode}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
