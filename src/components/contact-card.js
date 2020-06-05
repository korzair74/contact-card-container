import React from "react";

const ContactCard = (props) => {
  return (
    <div className='contact-card-container'>
      <div className='contact-wrapper' key={props.user.id}>
        {props.user.name} <br />
        {`Email: ${props.user.email}`}
        <br />
        {`Phone: ${props.user.phone}`}
        <br />
        {`Company Name: ${props.user.company.name}`}
        <br />
        {`Address: ${props.user.address.street} ${props.user.address.suite}`}
        {`\n        ${props.user.address.city}, ${props.user.address.zipcode}`}
      </div>
    </div>
  );
};

export default ContactCard;
