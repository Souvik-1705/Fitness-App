import React, { useState } from 'react';
import { FaWhatsapp } from "react-icons/fa6";
import "../styles/WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber="+917076862917";
  const message ="Hi, I want to know more about your personal training services.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappLink} target='_blank'rel='noopener norefferrer'className='whatsapp-btn'>
      <FaWhatsapp size={32}/>
    </a>
  )
}

export default WhatsAppButton;