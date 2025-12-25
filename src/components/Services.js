import React from 'react';
import "../styles/Services.css";

const Services = () => {
  const serviceList=[
    "Personal Training",
    "Weight Loss Program",
    "Muscle Building",
    "Online Coaching",
  ]
  return (
    <section className='services'>
      <h2>Our Services</h2>
      <div className='service-cards'>
        {serviceList.map((service)=>(
          <div id={service.id} className='service-card'>{service}</div>
        ))}
      </div>
    </section>
  )
}

export default Services;