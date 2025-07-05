'use client';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const menuItems = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#fees', label: 'Fees' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="fixed inset-0 z-50 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50">
        <div className="p-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="float-right text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
        </div>
        <nav className="p-4">
          <ul className="space-y-4">
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block text-gray-700 hover:text-blue-600 py-2 text-lg transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}