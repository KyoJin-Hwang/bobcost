import Image from 'next/image';

const Avatar = () => {
  return (
    <Image
      src='/image/my.png'
      alt='Rounded avatar'
      width={40}
      height={40}
      className='rounded-full transition-all duration-200 group-hover:scale-[1.1]'
      priority
    />
  );
};

export default Avatar;
