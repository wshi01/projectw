import Link from 'next/link';
import styles from './Navbar.module.css'; 

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 h-full w-200 bg-gray-800'>
      <div className='flex flex-col h-full'>
        <ul className="pt-10 pl-5 pr-5 gap-4 flex justify-center flex-col">
          <li>
            <Link href = '/'>
              <p className='text-white'>Home</p> 
            </Link>
          </li>
          <li>
            <Link href = '/data-projects'>
              <p className='text-white'>Data Analytics Projects</p>
            </Link>
          </li>

          <li>
            <Link href = '/coding-projects'>
              <p className='text-white'>Coding projects</p>
            </Link>
          </li>
          <li>
          <p className='text-white'>Photography in progess</p>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
