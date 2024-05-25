import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, BriefcaseIcon, EnvelopeIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollingUp, setScrollingUp] = useState(true);
  let lastScrollTop = 0;

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleScroll = () => {
    const currentScrollTop = window.pageYOffset;
    if (currentScrollTop < lastScrollTop) {
      setScrollingUp(true);
    } else {
      setScrollingUp(false);
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ease-in-out ${scrollingUp ? 'translate-y-0' : '-translate-y-full'} ${scrollingUp ? 'bg-gray-800' : 'bg-transparent'} text-purple-500 p-4 flex justify-between items-center`} style={{ top: scrollingUp ? '0' : '-100px' }}>
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <button className="md:hidden" onClick={toggleMenu}>
        {menuOpen ? <XMarkIcon className="h-8 w-8 text-purple-500" /> : <Bars3Icon className="h-8 w-8 text-purple-500" />}
      </button>
      <nav className={`md:flex md:items-center ${menuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <li className="flex items-center space-x-1">
            <HomeIcon className="h-5 w-5 text-purple-500" />
            <Link to="/" className="text-purple-500 hover:text-purple-700">Home</Link>
          </li>
          <li className="flex items-center space-x-1">
            <UserIcon className="h-5 w-5 text-purple-500" />
            <Link to="/about" className="text-purple-500 hover:text-purple-700">About</Link>
          </li>
          <li className="flex items-center space-x-1">
            <BriefcaseIcon className="h-5 w-5 text-purple-500" />
            <Link to="/projects" className="text-purple-500 hover:text-purple-700">Projects</Link>
          </li>
          <li className="flex items-center space-x-1">
            <EnvelopeIcon className="h-5 w-5 text-purple-500" />
            <Link to="/contact" className="text-purple-500 hover:text-purple-700">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
