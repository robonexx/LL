import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/components/logo/Logo';

const Header = () => {
  return (
    <header className='flex items-center justify-between font-bold space-x-2 px-10 py-5 bg-slate-800'>
      <div className=''>
        <Link href={'/'}>
                  <Logo>Rubadub Style:a</Logo>
        </Link>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
