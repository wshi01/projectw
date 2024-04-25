import Link from 'next/link';
import Image from 'next/image'
import Navbar from './components/navbar/Navbar';
import placeHolderImage from '../files/data/images/cat_image.jpg'

export default function Home() {
  return (
    <>
    <div className="grid grid-cols-12">
      <div className="col-span-2 h-screen">
        <Navbar />
      </div>
      <div className="pt-10 col-start-3 col-span-9 pl-10 flex flex-1 flex-col justify-start">
      <Image src={placeHolderImage} alt="Cat Image" className="h-50 mb-4" />
        <p className="text-xl">Willie Shi</p>
        <p className="text-l">I am a Software Engineer and Data Analyst in training.</p>
      </div>
    </div>
    </>
  );
}
