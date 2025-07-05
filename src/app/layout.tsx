import React from 'react';
import './globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Dr. Serena Blake, PsyD | Clinical Psychologist',
  description: 'Therapy services in Los Angeles and online – Anxiety, Relationships, Trauma Recovery',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-gray-800 bg-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}