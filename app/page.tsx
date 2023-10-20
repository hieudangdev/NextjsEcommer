import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
   return (
      <div className=''>
         <div className='max-w-5xl px-5 mx-auto shadow-sm left-0 right-0 fixed border border-t-0 rounded-xl rounded-t-none  border-gray-500 '>
            <Navbar />
         </div>
         <div className='h-[2000px]'></div>
      </div>
   );
}
