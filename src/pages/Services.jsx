import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Local Removals',
    image: 'local_removals.jpeg',
    description: 'Whether you are moving across the street or to the next suburb, we have got you covered. Our local moving services are fast, reliable, and cost-effective – perfect for short-distance moves within Adelaide.',
  },
  {
    title: 'Home Removals',
    image: 'home_removals.jpeg',
    description: 'Make your house move smooth and stress-free with Any Time Movers AU. Our professional removalists handle your belongings with care and precision, ensuring a safe transition to your new home. Based in Adelaide, we service all surrounding suburbs with tailored, affordable packages.',
  },
  {
    title: 'Office & Factory Removals',
    image: 'office_removals.png',
    description: 'We understand the importance of a quick and efficient office or industrial move. Our trained staff minimize downtime while relocating your workspaces, machinery, or furniture securely. Serving businesses across Adelaide and its industrial zones.',
  },
  {
    title: 'Hard Rubbish Removals',
    image: 'hard_waste_removals.png',
    description: 'Need to get rid of old furniture, appliances, or waste after a move? We provide responsible and eco-friendly hard rubbish removal across Adelaide. We dispose of unwanted items quickly and legally so you don’t have to.',
  },
  {
    title: 'Storage Solutions',
    image: 'storage_solutions.jpg',
    description: 'Need temporary or long-term storage? Our secure, weatherproof storage units are perfect for furniture, office equipment, or personal belongings. Conveniently located in Adelaide and accessible when you need them.',
  },
  {
    title: 'Packaging & Unpackaging',
    image: 'packaging_and_unpackaging.png',
    description: 'Leave the packing to us! We use premium packing materials to protect your items during transit and can even unpack everything once you are at your new location. A perfect hands-free moving experience.',
  },
  {
    title: 'General Waste Removal',
    image: 'general_waste_removals.jpeg',
    description: 'We don’t just move – we clean up too. From leftover boxes to general household waste, we provide end-to-end waste management for your property. Affordable rates and prompt pickup anywhere in Adelaide.',
  },
];

const OurServices = () => (
  <div className="services-page">
    <h1>Our Services</h1>
    <div className="services-grid">
      {services.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.title} />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default OurServices;
