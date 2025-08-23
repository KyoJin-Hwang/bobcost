import Image from 'next/image';

import Button from '../ui/Button';
import { ResumeProject } from '@/config/types';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const ProjectImg = ({
  data,
  currentIndex,
  setCurrentIndex,
}: {
  data: ResumeProject;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const images = data.img || [];

  const handlePrev = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    if (images.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };
  return (
    <div className='flex flex-col items-center justify-center'>
      {/* Viewport */}
      <div className='w-full select-none overflow-hidden h-[300px] sm:h-[400px] md:h-[450px] pc:h-[550px]'>
        {/* Track */}
        <div
          className='flex h-full'
          style={{
            width: images.length > 0 ? `${images.length * 100}%` : '100%',
            transform:
              images.length > 0
                ? `translateX(-${(currentIndex * 100) / images.length}%)`
                : 'translateX(0%)',
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {images.map((item, idx) => (
            <div
              key={item}
              className='relative h-full'
              style={{
                width: images.length > 0 ? `${100 / images.length}%` : '100%',
                flex: '0 0 auto',
              }}
            >
              <Image
                src={item}
                alt={`프로젝트 이미지${idx + 1}`}
                fill
                className='border-4 border-foreground object-contain'
                sizes='100vw'
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-col items-center gap-2 pt-4'>
        <div className='text-lg'>
          {images.length > 0 ? currentIndex + 1 : 0}/{images.length}
        </div>
        <div className='flex gap-4'>
          <Button onClick={handlePrev}>
            <ArrowBigLeft fill='black' />
          </Button>
          <Button onClick={handleNext}>
            <ArrowBigRight fill='black' />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectImg;
