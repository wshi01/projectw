"use client"
import Link from 'next/link';
import { useState } from 'react';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import CodeIcon from '@mui/icons-material/Code';
import VerifiedIcon from '@mui/icons-material/Verified';
import TimelineIcon from '@mui/icons-material/Timeline';
import OpenInFullIcon from '@mui/icons-material/OpenInFull';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);

  return (
    <>
      <nav className={`fixed left-0 h-full bg-gray-900 transition-transform duration-300 ${isNavbarVisible ? 'translate-x-0 w-full sm:w-1/2 md:w-1/2 lg:w-1/4' : '-translate-x-full w-0'}`}>
        <div className='grid grid-rows-12 h-full gap-5'>
          

          {isNavbarVisible && (
            <>
            <div className='row-span-1 gap-5 row-start-1 flex justify-end pr-4 pt-4'>
              <CloseIcon sx={{ color: 'white', fontSize: 25, cursor: 'pointer' }} onClick={() => setIsNavbarVisible(false)} />
            </div>
              <div
                className={`row-span-1 gap-5 row-start-2 flex justify-start pl-10 ${hoveredLink === 'about' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''}`}
                onMouseEnter={() => setHoveredLink('about')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <AccountBoxIcon sx={{ color: 'white', fontSize: hoveredLink === 'about' ? 30 : 25, transition: 'font-size 0.3s' }} />
                <Link href='/'>
                  <p className='text-white'>About me</p>
                </Link>
              </div>
              <div
                className={`row-span-1 gap-5 row-start-3 flex justify-start pl-10 ${hoveredLink === 'dataProjects' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''}`}
                onMouseEnter={() => setHoveredLink('dataProjects')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <InsertChartIcon sx={{ color: 'white', fontSize: hoveredLink === 'dataProjects' ? 30 : 25, transition: 'font-size 0.3s' }} />
                <Link href='/data-projects'>
                  <p className='text-white'>Data Analytics Projects</p>
                </Link>
              </div>
              <div
                className={`row-span-1 gap-5 row-start-4 flex justify-start pl-10 ${hoveredLink === 'codingProjects' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''}`}
                onMouseEnter={() => setHoveredLink('codingProjects')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <CodeIcon sx={{ color: 'white', fontSize: hoveredLink === 'codingProjects' ? 30 : 25, transition: 'font-size 0.3s' }} />
                <Link href='/coding-projects'>
                  <p className='text-white'>Coding projects</p>
                </Link>
              </div>
              <div
                className={`row-span-1 gap-5 row-start-5 flex justify-start pl-10 ${hoveredLink === 'certifications' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''}`}
                onMouseEnter={() => setHoveredLink('certifications')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <VerifiedIcon sx={{ color: 'white', fontSize: hoveredLink === 'certifications' ? 30 : 25, transition: 'font-size 0.3s' }} />
                <Link href='/certifications'>
                  <p className='text-white'>Certifications</p>
                </Link>
              </div>
              <div
                className={`row-span-1 gap-5 row-start-6 flex justify-start pl-10 ${hoveredLink === 'experience' ? 'text-lg font-bold transition-all duration-300 shadow-white' : ''}`}
                onMouseEnter={() => setHoveredLink('experience')}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <TimelineIcon sx={{ color: 'white', fontSize: hoveredLink === 'experience' ? 30 : 25, transition: 'font-size 0.3s' }} />
                <Link href='/experience'>
                  <p className='text-white'>Experience</p>
                </Link>
              </div>
            </>
          )}
        </div>
      </nav>
      <div className={`fixed bottom-10 left-10 bg-gray-700 rounded-full p-2 cursor-pointer transition-transform duration-300 ${isNavbarVisible ? 'translate-x-[-100px]' : 'translate-x-0'}`} onClick={() => setIsNavbarVisible(true)}>
        <OpenInFullIcon sx={{ color: 'white', fontSize: 30 }} />
      </div>
    </>
  );
};

export default Navbar;
