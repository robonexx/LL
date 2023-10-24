import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/buttons/Button';
import heroImg from '@/public/derbyhero.png';

// styles

const Hero = () => {
  return (
    <div className='relative flex h-4/5 mb-32 items-center justify-between gap-8 px-6 pt-14 text-neutral-900 sm:pl-20 sm:pr-20 lg:pr-0'>
      <div>
        <h1 className='font-heading text-3xl font-bold md:text-5xl'>
          OFFICIAL “LOCKING” PIONEERS WEBSITE of the street dance pioneers
        </h1>
        <p className='max-w-xl pt-8 text-lg leading-7 md:text-xl'>
          The art-form & culture of a street dance is much more than the moves
          that create the dance itself. The original dance style called locking
          has a deep roots within an era, which ment so much to the unity and
          the segregation of people
        </p>
        <div className='flex flex-col gap-4 pt-12 sm:flex-row sm:gap-6'>
          <Button variant='outline'>
            <Link href='/history'>Read more</Link>
          </Button>
          <Button variant='outline'>
            <Link
              href={{
                pathname: 'https://www.facebook.com/groups/158481954185947',
              }}
              passHref
              target='_blank'
            >
              Join the community
            </Link>
          </Button>
        </div>
      </div>
      <Image
        className='hidden max-w-xl object-contain lg:block drop-shadow-2xl rotate-45'
        src={heroImg}
        alt='Mavericks flats'
        priority
      />
    </div>
  );
};

export default Hero;
