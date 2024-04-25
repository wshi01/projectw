"use client"
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <nav className='fixed top-0 left-0 h-full w-2/12 bg-gray-800'>
      <div className='grid grid-rows-12 h-full gap-5'>
        <div
          className={`row-span-1 row-start-2 flex justify-start pl-10 ${
            hoveredLink === 'about' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('about')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link href='/'>
            <p className='text-white'>About me</p>
          </Link>
        </div>
        <div
          className={`row-span-1 row-start-3 flex justify-start pl-10 ${
            hoveredLink === 'dataProjects' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('dataProjects')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link href='/data-projects'>
            <p className='text-white'>Data Analytics Projects</p>
          </Link>
        </div>
        <div
          className={`row-span-1 row-start-4 flex justify-start pl-10 ${
            hoveredLink === 'codingProjects' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('codingProjects')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link href='/coding-projects'>
            <p className='text-white'>Coding projects</p>
          </Link>
        </div>
        <div
          className={`row-span-1 row-start-5 flex justify-start pl-10 ${
            hoveredLink === 'certifications' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('certifications')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <Link href='/certifications'>
            <p className='text-white'>Certifications</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
