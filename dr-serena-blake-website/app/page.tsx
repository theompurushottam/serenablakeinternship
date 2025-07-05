'use client';

import { useState } from 'react';
import Image from 'next/image';
import MobileMenu from '../components/MobileMenu';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredTime: ''
  });

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      preferredTime: ''
    });
  };

  const handleBookConsultation = () => {
    window.open('https://docs.google.com/forms/d/1ezCGM7P9sLVS3PbXSTgODyXl2TQVHCWHz1jhuwOjrv0/edit', '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container-max">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-800">Dr. Serena Blake, PsyD</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#fees" className="text-gray-700 hover:text-blue-600 transition-colors">Fees</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition-colors">FAQ</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(true)}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-6">
                Find Your Path to 
                <span className="text-gradient"> Healing & Growth</span>
              </h2>
                             <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                 Welcome to a safe, supportive space where you can explore your challenges and discover your strengths. 
                 I&apos;m Dr. Serena Blake, a licensed clinical psychologist dedicated to helping you overcome anxiety, 
                 strengthen relationships, and heal from trauma.
               </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={handleBookConsultation}
                  className="btn-primary text-center"
                >
                  Book a Free Consult
                </button>
                <a href="#about" className="btn-secondary text-center">
                  Learn More About Me
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-500">
                <p>📍 Los Angeles, CA | 📞 (323) 555-0192 | 💻 Virtual & In-Person Sessions</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <Image
                  src="https://postimage.me/images/2025/07/05/Screenshot-107.png"
                  alt="Dr. Serena Blake, PsyD"
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
                About Dr. Serena Blake
              </h2>
              <p className="text-lg text-gray-600">
                Clinical Psychologist | 8 Years Experience | 500+ Sessions
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Licensed PsyD</h3>
                <p className="text-gray-600">Fully licensed clinical psychologist in California</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">8 Years Experience</h3>
                <p className="text-gray-600">Extensive experience in clinical psychology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">500+ Sessions</h3>
                <p className="text-gray-600">Helped countless individuals find healing</p>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma. Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Services & Specialties
            </h2>
            <p className="text-lg text-gray-600">
              Evidence-based therapy tailored to your unique needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Anxiety & Stress Management</h3>
              <p className="text-gray-600 leading-relaxed">
                Learn effective strategies to manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Relationship Counseling</h3>
              <p className="text-gray-600 leading-relaxed">
                Strengthen your relationships through improved communication, conflict resolution, and deeper emotional connection.
              </p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Trauma Recovery</h3>
              <p className="text-gray-600 leading-relaxed">
                Heal from past traumas using evidence-based approaches that help you process experiences and build resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
                Office Hours & Location
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">📍 In-Person Sessions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Days & Times:</p>
                    <p className="text-gray-600">Tuesday & Thursday</p>
                    <p className="text-gray-600">10:00 AM – 6:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Location:</p>
                    <p className="text-gray-600">1287 Maplewood Drive</p>
                    <p className="text-gray-600">Los Angeles, CA 90026</p>
                  </div>
                </div>
              </div>
              <div className="card p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">💻 Virtual Sessions</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-700">Days & Times:</p>
                    <p className="text-gray-600">Monday, Wednesday & Friday</p>
                    <p className="text-gray-600">1:00 PM – 5:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Platform:</p>
                    <p className="text-gray-600">Secure Zoom Sessions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Session Fees Section */}
      <section id="fees" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Session Fees
            </h2>
            <p className="text-lg text-gray-600">
              Transparent pricing for quality care
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Individual Session</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$200</p>
              <p className="text-gray-600">50-minute session</p>
            </div>
            <div className="card p-8 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Couples Session</h3>
              <p className="text-4xl font-bold text-green-600 mb-4">$240</p>
              <p className="text-gray-600">50-minute session</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Do you accept insurance?</h3>
              <p className="text-gray-600">
                No, but a superbill is provided for self-submission. This allows you to potentially receive reimbursement from your insurance company for out-of-network benefits.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Are online sessions available?</h3>
              <p className="text-gray-600">
                Yes—all virtual sessions are conducted via secure Zoom. I offer virtual sessions on Monday, Wednesday, and Friday from 1:00 PM to 5:00 PM.
              </p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">What is your cancellation policy?</h3>
              <p className="text-gray-600">
                24-hour notice is required for cancellations. This allows me to offer the time slot to other clients who may be waiting for an appointment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600">
                             Ready to start your journey? I&apos;d love to hear from you.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">(323) 555-0192</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">serena@blakepsychology.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">1287 Maplewood Drive, Los Angeles, CA 90026</span>
                </div>
              </div>
            </div>
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Contact Time
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9 AM - 12 PM)</option>
                    <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                    <option value="evening">Evening (5 PM - 8 PM)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me a bit about what brings you to therapy..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white section-padding">
        <div className="container-max">
          <div className="text-center">
            <h3 className="text-2xl font-display font-bold mb-4">Dr. Serena Blake, PsyD</h3>
            <p className="text-gray-300 mb-6">
              Licensed Clinical Psychologist | Los Angeles, CA
            </p>
            <div className="flex justify-center space-x-8 mb-6">
              <span className="text-gray-300">(323) 555-0192</span>
              <span className="text-gray-300">serena@blakepsychology.com</span>
            </div>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 text-sm">
                © 2024 Dr. Serena Blake Psychology. All rights reserved. | Licensed in California
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
