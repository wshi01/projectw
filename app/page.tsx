import Image from 'next/image'
import Navbar from './components/navbar/Navbar';
import bannerImage from '../files/data/images/cherry.jpg'
import profileImage from '../files/data/images/profile.jpg'
import { profile } from 'console';
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FaGit } from "react-icons/fa";
import { SiJira } from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { SiDart } from "react-icons/si";
import { SiPlaywright } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoFirebase } from "react-icons/io5";
import { SiCplusplus } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { BsFiletypeSql } from "react-icons/bs";
import { RiFileExcel2Line } from "react-icons/ri";
import { FaLinux } from "react-icons/fa";
import { VscVscodeInsiders } from "react-icons/vsc";

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  const monthName = monthNames[month - 1];
  
  return (
    <>
      <Navbar />
      <section className="flex flex-col md:flex-row justify-center min-h-screen p-5">
        <div className='flex flex-col gap-7 md:ml-5'>
          <div className='flex flex-row '>
            <div className="mb-5 lg:ml-10">
              <div className="w-32 h-32 border border-black rounded-lg overflow-hidden">
                <div className="bg-gray-500 h-1/3 flex items-center justify-center">
                  <div className="text-xl font-bold text-white">{monthName}</div>
                </div>
                <div className="bg-white h-2/3 flex items-center justify-center">
                  <div className="text-7xl">{day}</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image src={profileImage} alt='profile' className='rounded-lg'/>
          </div>
          <div className="p-4 md:p-0">
            <p className="text-lg">
              Hello! I'm Willie, a Software Engineer and Data Analyst. 
              I have a strong educational background and hands-on experience in the tech 
              industry. I graduated from The City College of New York with a Bachelors of
              Science in Computer Science. My passion for data analytics led me to complete
              a highly selective Data Analytics Fellowship at COOP Careers. Along with a 
              passion for data, I am also passionate about coding and software engineering.
            </p>
          </div>
          
          <div className='flex justify-center flex-row gap-5'>
            <FaJava className='text-6xl'/>
            <FaPython className='text-6xl'/>
            <IoLogoJavascript className='text-6xl'/>
            <FaGithub className='text-6xl'/>
            <FaGit className='text-6xl'/>
          </div>

          <div className='flex justify-center flex-row gap-5'>
            <SiJira className='text-6xl'/>
            <RiReactjsFill  className='text-6xl'/>
            <SiPlaywright className='text-6xl'/>
            <SiDart className='text-6xl'/>
            <SiJest className='text-6xl'/>
          </div>

          <div className='flex justify-center flex-row gap-5'>
            <SiMongodb className='text-6xl'/>
            <BiLogoTypescript  className='text-6xl'/>
            <IoLogoFirebase className='text-6xl'/>
            <SiCplusplus className='text-6xl'/>
            <SiTailwindcss className='text-6xl'/>
          </div>

          <div className='flex justify-center flex-row gap-5'>
            <SiTableau className='text-6xl'/>
            <BsFiletypeSql className='text-6xl'/>
            <RiFileExcel2Line className='text-6xl'/>
            <FaLinux className='text-6xl'/>
            <VscVscodeInsiders className='text-6xl'/>
          </div>


          <br/><br/><br/><br/><br/>

          
        </div>
      </section>
    </>
  );
}
