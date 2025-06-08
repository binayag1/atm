import React from 'react';
import './Services.css';

const services = [
  {
    title: 'Local Removals',
    image: 'local_removals.jpeg',
    description: 'Whether you’re moving across the street or to the next suburb, we’ve got you covered. Our local moving services are fast, reliable, and cost-effective — ideal for short-distance moves within Adelaide.',
  },
  {
    title: 'Home Removals',
    image: 'home_removals.jpeg',
    description: 'Make your house move smooth and stress-free with Any Time Movers AU. Our experienced removalists handle your belongings with care and precision, ensuring a safe transition to your new home across Adelaide and surrounding suburbs.',
  },
  {
    title: 'General Waste Removal',
    image: 'general_waste_removals.jpeg',
    description: 'We don’t just move — we clean up too. From leftover boxes to general household waste, we offer end-to-end waste management for your property. Prompt pickup and affordable pricing across Adelaide.',
  },
  {
    title: 'Concrete Removals',
    image: 'concrete_removals.png',
    description: 'Need to clear broken concrete from a driveway, path, or construction site? Our team provides fast, safe, and eco-conscious concrete removal services across Adelaide. We handle the heavy lifting so you don’t have to.',
  },
  {
    title: 'Hard Rubbish Removals',
    image: 'hard_rubbish_removals.png',
    description: 'Got bulky waste? We responsibly remove old furniture, appliances, and hard rubbish. Our eco-friendly disposal service operates across Adelaide with quick turnarounds and competitive pricing.',
  },
  {
    title: 'Office & Factory Removals',
    image: 'office_removals.png',
    description: 'Minimise downtime with our efficient office and factory removals. Whether relocating desks, machines, or entire workspaces, our team ensures secure transport for Adelaide businesses of all sizes.',
  },
  {
    title: 'Packaging & Unpackaging',
    image: 'packaging_and_unpackaging.png',
    description: 'Leave the packing to us! We use premium materials to protect your items and can even unpack everything at your new location. A complete, hands-free moving experience tailored for convenience.',
  },
  {
    title: 'Storage Solutions',
    image: 'storage_solutions.jpg',
    description: 'Need short- or long-term storage? Our secure, weatherproof storage units in Adelaide are perfect for storing furniture, personal items, or office equipment with 24/7 accessibility options.',
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
