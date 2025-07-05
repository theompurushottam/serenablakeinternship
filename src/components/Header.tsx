'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Fees', href: '#fees' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="text-xl font-serif font-bold text-brand">
          Dr. Serena Blake, PsyD
        </Link>
        <nav className="hidden md:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-brand-light">
              {item.label}
            </Link>
          ))}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen((p) => !p)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-inner pb-4">
          <nav className="flex flex-col space-y-3 px-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 border-b border-gray-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}