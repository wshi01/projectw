import Image from 'next/image'
import Navbar from './components/navbar/Navbar';

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
        <div className='grid grid-cols-3 gap-5 m-10'>
          
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
