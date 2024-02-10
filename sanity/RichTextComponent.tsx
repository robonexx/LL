import Image from 'next/image'

export const RichTextComponents = {
  types: {
    image: ({imageUrl}: any) => (
      <div className='relative w-full h-96 m-10 mx-auto'>
        <Image
          src={imageUrl}
          alt='blog picture'
          fill
          className='object-cover'
        />
      </div>
    ),
  },
  block: {
    // Ex. 1: customizing common block types
    h1: ({ children }: any) => (
      <h1 className='text-5xl py-10 font-bold relative w-full'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl py-10 font-bold relative w-full'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-3xl py-10 font-bold relative w-full'>{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className='text-2xl py-5 font-bold relative w-full'>{children}</h4>
    ),
  p: ({ children }: any) => (
      <h4 className='text-2xl py-5 font-bold relative w-full'>{children}</h4>
    ),
    normal: ({ children }: any) => {
      return <p className='text-normal py-5 font-normal relative w-full'>{children}</p>;
    },
    blockquote: ({ children }: any) => (
      <blockquote className='border-l-purple-500 relative w-full'>{children}</blockquote>
    ),
  },
};
