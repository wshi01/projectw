"use client"
import Link from 'next/link';
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CodeIcon from '@mui/icons-material/Code';
import VerifiedIcon from '@mui/icons-material/Verified';
import TimelineIcon from '@mui/icons-material/Timeline';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);
  
  return (
    <nav className='fixed top-0 left-0 h-full w-1/5 bg-gray-900'>
      
      <div className='grid grid-rows-12 h-full gap-5'>
        <div
          className={`row-span-1 gap-5 row-start-2 flex justify-start pl-10 ${
            hoveredLink === 'about' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('about')}
          onMouseLeave={() => setHoveredLink(null)}
        > 
          <AccountBoxIcon sx={{ color: 'white', fontSize: hoveredLink === 'about' ? 30 : 25, transition: 'font-size 0.3s' }}></AccountBoxIcon>
          <Link href='/'>
            <p className='text-white'>About me</p>
          </Link>
        </div>
        <div
          className={`row-span-1 gap-5 row-start-3 flex justify-start pl-10 ${
            hoveredLink === 'dataProjects' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('dataProjects')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <InsertChartIcon sx={{ color: 'white', fontSize: hoveredLink === 'dataProjects' ? 30 : 25, transition: 'font-size 0.3s' }}></InsertChartIcon>
          <Link href='/data-projects'>
            <p className='text-white'>Data Analytics Projects</p>
          </Link>
        </div>
        <div
          className={`row-span-1 gap-5 row-start-4 flex justify-start pl-10 ${
            hoveredLink === 'codingProjects' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('codingProjects')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <CodeIcon sx={{ color: 'white', fontSize: hoveredLink === 'codingProjects' ? 30 : 25, transition: 'font-size 0.3s' }}></CodeIcon>
          <Link href='/coding-projects'>
            <p className='text-white'>Coding projects</p>
          </Link>
        </div>
        <div
          className={`row-span-1 gap-5 row-start-5 flex justify-start pl-10 ${
            hoveredLink === 'certifications' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('certifications')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <VerifiedIcon sx={{ color: 'white', fontSize: hoveredLink === 'certifications' ? 30 : 25, transition: 'font-size 0.3s' }}></VerifiedIcon>
          <Link href='/certifications'>
            <p className='text-white'>Certifications</p>
          </Link>
        </div>
        <div
          className={`row-span-1 gap-5 row-start-6 flex justify-start pl-10 ${
            hoveredLink === 'experience' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''
          }`}
          //@ts-ignore
          onMouseEnter={() => setHoveredLink('experience')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          <TimelineIcon sx={{ color: 'white', fontSize: hoveredLink === 'experience' ? 30 : 25, transition: 'font-size 0.3s' }}></TimelineIcon>
          <Link href='/experience'>
            <p className='text-white'>Experience</p>
          </Link>
        </div>

        <div className='row-span-1 gap-2 row-start-12 flex justify-center'>
          <OpenInFullIcon sx={{ color: 'white', fontSize: 20}}></OpenInFullIcon>
          <p className='text-red-50'>View on desktop fullscreen</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
