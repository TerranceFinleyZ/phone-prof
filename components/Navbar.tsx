import React, { useState } from 'react';
import { NAVIGATION_LINKS } from '../constants';
import { RiCloseLine, RiMenu3Line } from '@remixicon/react';

interface NavigationLink {
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href) as HTMLElement | null;
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
    setIsMobileMenuOpen(false);
  };



  return (
    <div>
      <nav className="fixed left-0 right-0 z-50 lg:top-4">
        {/*Desktop menu*/}
        <div className="mx-auto hidden max-w-xl items-center justify-center rounded-full border border-white/30 py-2 backdrop-blur-lg lg:flex">
          <div className="flex items-center justify-between gap-6">
            <div>
              <a href="/">
                <span className="uppercase">Portfolio</span>
              </a>
            </div>
            <ul className="flex items-center gap-4">
              {NAVIGATION_LINKS.map((item: NavigationLink, index) => (
                <li key={index}>
                  <a className="text-sm hover:text-stone-300" href={item.href} onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*Mobile Menu*/}
        <div className="py-2 backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div>
              <a href="#">
                <span className="pl-2 uppercase"> Portfolio</span>
              </a>
            </div>
            <div className="flex items-center">
              <button className="focus:outline-none lg:hidden" onClick={toggleMobileMenu} aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}>
                {isMobileMenuOpen ? (
                  <RiCloseLine className="m-2 h-6 w-5" />
                ) : (
                  <RiMenu3Line className="m-2 h-6 w-5" />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="my-4 ml-4 flex flex-col gap-6 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item: NavigationLink, index) => (
                <li key={index}>
                  <a href={item.href} className="block w-full text-lg" onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;