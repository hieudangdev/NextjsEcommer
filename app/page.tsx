import Image from 'next/image';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="px-5 max-w-5xl mx-auto">
      <Navbar />
    </div>
  );
}
