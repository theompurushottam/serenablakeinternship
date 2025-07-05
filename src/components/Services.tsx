import React from 'react';

const services = [
  'Anxiety & Stress Management',
  'Relationship Counseling',
  'Trauma Recovery',
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-serif font-bold text-brand mb-8 text-center md:text-left">Services & Specialties</h2>
        <ul className="space-y-4 list-disc list-inside text-lg">
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}