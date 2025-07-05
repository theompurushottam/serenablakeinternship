'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // For demo purposes, just switch status
    setStatus('sent');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl font-serif font-bold text-brand mb-8 text-center md:text-left">Get in Touch</h2>
        {status === 'sent' ? (
          <p className="text-green-700 font-medium">Thank you for reaching out! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium">Name</label>
              <input id="name" required className="border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 font-medium">Phone</label>
              <input id="phone" required className="border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="email" className="mb-1 font-medium">Email</label>
              <input id="email" type="email" required className="border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="preferredTime" className="mb-1 font-medium">Preferred Contact Time</label>
              <input id="preferredTime" className="border border-gray-300 rounded px-3 py-2" />
            </div>
            <div className="flex flex-col md:col-span-2">
              <label htmlFor="message" className="mb-1 font-medium">Message</label>
              <textarea id="message" rows={4} className="border border-gray-300 rounded px-3 py-2"></textarea>
            </div>
            <div className="md:col-span-2 flex justify-end">
              <button type="submit" className="bg-brand text-white px-6 py-3 rounded shadow hover:bg-brand-light transition">
                Send Message
              </button>
            </div>
          </form>
        )}
        <div className="mt-10 text-sm text-gray-700">
          <p><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p><strong>Phone:</strong> (323) 555-0192</p>
          <p><strong>Email:</strong> serena@blakepsychology.com</p>
          <p><strong>Office Hours:</strong> In-person: Tue & Thu, 10 AM–6 PM | Virtual: Mon, Wed & Fri, 1 PM–5 PM</p>
        </div>
      </div>
    </section>
  );
}