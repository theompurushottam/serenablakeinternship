import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-accent text-center py-6 text-sm text-gray-700">
      <p>&copy; {new Date().getFullYear()} Dr. Serena Blake, PsyD. All rights reserved.</p>
    </footer>
  );
}