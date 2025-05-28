import Button from '../ui/Button';
import { ResumeProject } from '@/config/types';
import { ArrowBigLeft, ArrowBigRight, TimerReset } from 'lucide-react';

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
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  const reset = () => {
    setCurrentIndex(0);
  };
  return (
    <div className='flex flex-col items-center justify-center overflow-hidden'>
      <div
        className='flex w-full pc:h-[550px]'
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // 인라인 스타일로 transform 적용
          transition: 'transform 0.3s ease-in-out',
        }}
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
        <div className='flex gap-4'>
          {!currentIndex ? (
            <></>
          ) : (
            <Button onClick={handlePrev}>
              <ArrowBigLeft fill='black' />
            </Button>
          )}
          {currentIndex + 1 === images.length ? (
            <Button onClick={reset}>
              <TimerReset />
            </Button>
          ) : (
            <Button onClick={handleNext}>
              <ArrowBigRight fill='black' />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectImg;
