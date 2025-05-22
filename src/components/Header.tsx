'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-background p-4 sticky top-0 z-50">
      <nav className="container mx-auto max-w-[1400px] flex justify-between items-center border-b-4 border-secondary">
        <h1 className="text-2xl font-heading text-primary font-extrabold">Foxerinc</h1>
        <button
          className="sm:hidden text-white text-2xl"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row absolute sm:static top-16 left-0 right-0 bg-background sm:bg-transparent border-b sm:border-none border-border sm:space-x-10 space-y-4 sm:space-y-0 p-4 sm:p-0`}
        >
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                scroll={true}
                className="text-lg text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;