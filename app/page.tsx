import Image from 'next/image'
import Navbar from './components/navbar/Navbar';
import profileAI from '../files/data/images/profile_image.jpg'

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const formattedDate = `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;

  return (
    <>
    <div className="grid grid-cols-5">
      <div className="col-span-1 h-screen">
        <Navbar />
      </div>
      <div className="col-start-2 col-span-4 pl-10 flex flex-col ">
        <br/>
        <br/>
        <div className='grid grid-cols-3 m-10'>
          <div>
            <p className="pt-10 text-lg origin-bottom-left">Willie Shi</p>
            <Image src={profileAI} alt="AI" className=" h-auto mb-4" />
            <p className="pl-11 text-lg transform -rotate-90 origin-bottom-left">{formattedDate}</p>
          </div>
          <div>
            <p>About me</p>
            <p className="text-lg">I am a Software Engineer and Data Analyst in training.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
