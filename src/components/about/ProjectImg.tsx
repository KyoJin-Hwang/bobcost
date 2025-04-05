import { useState } from 'react';

import Button from '../ui/Button';
import { ResumeProject } from '@/config/types';

const ProjectImg = ({ data }: { data: ResumeProject }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = data.img || [];
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className='flex min-h-[300px] flex-col items-center justify-center overflow-hidden pc:min-h-[500px]'>
      <div
        className={`flex w-full translate-x-[-${currentIndex * 100}%] transition-all duration-300 ease-in-out`}
      >
        {images.map((item, idx) => (
          <img
            key={item}
            src={item}
            alt={`프로젝트 이미지${idx + 1}`}
            className='border-4 border-foreground'
          />
        ))}
      </div>
      <div className='flex flex-col items-center gap-2 pt-4'>
        <div className='text-lg'>
          {currentIndex + 1}/{data.img?.length}
        </div>
        <div className='flex gap-2'>
          <Button onClick={handlePrev}>이전</Button>
          <Button onClick={handleNext}>다음</Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectImg;
