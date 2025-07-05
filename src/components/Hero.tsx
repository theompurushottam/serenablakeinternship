import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="bg-accent" id="hero">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-16 md:py-24">
        {/* Text */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand mb-4 leading-tight">
            Begin Your Journey to Healing
          </h1>
          <p className="text-lg mb-6">
            Compassionate, evidence-based therapy with Dr. Serena Blake, PsyD — online and in Los Angeles.
          </p>
          <Link
            href="https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand text-white px-6 py-3 rounded shadow hover:bg-brand-light transition"
          >
            Book a Free Consult
          </Link>
        </div>
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="https://postimage.me/images/2025/07/05/Screenshot-107.png"
            alt="Dr. Serena Blake"
            width={400}
            height={500}
            className="rounded-lg shadow-lg object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}