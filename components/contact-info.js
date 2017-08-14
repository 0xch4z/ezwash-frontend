import React from 'react';

const contactNameStyle = {

};

const contactValueStyle = {
  
};

const ContactInfo = ({ name, value }) => (
  <div>
    <h4>{name}</h4>
    <strong>{value}</strong>
  </div>
);

export default ContactInfo;