'use client';
import React, { useState } from 'react';

const faqs = [
  {
    q: 'Do you accept insurance?',
    a: 'No, but a superbill is provided for self-submission.',
  },
  {
    q: 'Are online sessions available?',
    a: 'Yes — all virtual sessions via Zoom.',
  },
  {
    q: 'What is your cancellation policy?',
    a: '24-hour notice required.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-16 md:py-24 bg-accent/50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-serif font-bold text-brand mb-8 text-center md:text-left">FAQ</h2>
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div key={idx} className="border border-gray-200 rounded">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-medium">{item.q}</span>
                <span className="text-brand text-xl">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && <p className="p-4 pt-0">{item.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}