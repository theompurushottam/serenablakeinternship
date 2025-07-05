import React from 'react';

export default function Fees() {
  return (
    <section id="fees" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl text-center md:text-left">
        <h2 className="text-3xl font-serif font-bold text-brand mb-8">Session Fees</h2>
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between">
            <span className="font-medium">Individual Session</span>
            <span className="font-semibold text-brand">$200</span>
          </div>
          <div className="flex flex-col md:flex-row justify-between">
            <span className="font-medium">Couples Session</span>
            <span className="font-semibold text-brand">$240</span>
          </div>
        </div>
      </div>
    </section>
  );
}