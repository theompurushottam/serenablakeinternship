import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center md:text-left">
        <h2 className="text-3xl font-serif font-bold text-brand mb-6">About Dr. Blake</h2>
        <p className="mb-4 leading-relaxed">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center md:justify-start mt-8">
          <div>
            <p className="text-4xl font-bold text-brand">8+</p>
            <p className="uppercase tracking-wider text-sm">Years Experience</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-brand">500+</p>
            <p className="uppercase tracking-wider text-sm">Therapy Sessions</p>
          </div>
        </div>
      </div>
    </section>
  );
}