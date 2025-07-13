import Image from 'next/image';

export const MdxImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  const { src = '', alt = '', width = 800, height = 450, ...rest } = props;
  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={Number(width)}
        height={Number(height)}
        className='mx-auto mb-0 mt-8 rounded-md object-contain'
        sizes='100vw'
        {...rest}
      />
      {alt !== '' && (
        <span className='mb-8 mt-2 block w-full text-center text-sm text-gray-500 dark:text-gray-400'>
          {alt}
        </span>
      )}
    </>
  );
};
