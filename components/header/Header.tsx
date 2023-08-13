import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/logo/Logo';

const Header = () => {
  return (
    <header className='flex items-center justify-between font-bold space-x-2 px-10 py-5 bg-slate-800'>
      <div className='rounded-full bg-white px-2 py-1 text-black hover:text-white hover:bg-black transition-all duration-600 ease-in-out cursor-pointer'>
        <Link href='/' className='font-bold uppercase'>
          <Logo>Rubadub Style</Logo>
        </Link>
      </div>
      <div className='text-mono font-thin border rounded-full p-1 hover:bg-black cursor-pointer transition-all  duration-600 ease-in-out'>
        <Link href='/admin'>Studio</Link>
      </div>
    </header>
  );
};

export default Header;
