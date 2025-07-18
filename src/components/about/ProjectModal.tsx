'use client';

import { useContext, useEffect, useRef, useState } from 'react';

import { AboutContextModal, AboutContextProject } from './AboutProvider';
import ProjectDetail from './ProjectDetail';
import ProjectImg from './ProjectImg';
import { XIcon } from 'lucide-react';

const ProjectModal = () => {
  const modalRef = useRef<HTMLDivElement>(null);

  const contextProject = useContext(AboutContextProject);
  const contextModal = useContext(AboutContextModal);

  if (!contextProject) {
    throw new Error('AboutContextProject must be used within an AboutProvider');
  }

  const { project } = contextProject;
  const { modal, setModal, modalContent } = contextModal;

  const [showModal, setShowModal] = useState(false);
  // 프로젝트 이미지 상태
  const [currentIndex, setCurrentIndex] = useState(0);

  // 애니메이션 Effect
  useEffect(() => {
    if (modal) {
      setShowModal(true); // 모달이 열리면 애니메이션을 시작
    } else {
      setTimeout(() => setShowModal(false), 100); // 애니메이션이 끝날 때쯤 모달을 숨김
    }
  }, [modal]); // modal 상태가 변경될 때마다 실행

  // 모달 외부 스크롤 방지 useEffect
  useEffect(() => {
    if (!project) {
      return;
    }

    // 모달 상태에 따라 body 스크롤을 제어
    if (modal) {
      document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    } else {
      document.body.style.overflow = 'auto'; // 스크롤 복구
    }

    // cleanup 함수
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modal, project]);

  // 모달 닫을시 Scroll 초기화
  useEffect(() => {
    if (!modal && modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
    setCurrentIndex(0);
  }, [modal]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  if (!project) return null; // project가 없으면 렌더링하지 않음

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50 p-3 transition-opacity duration-500 pc:p-0`}
      onClick={handleBackgroundClick}
      style={{
        visibility: modal ? 'visible' : 'hidden',
        opacity: modal ? '1' : '0',
      }}
      ref={modalRef}
    >
      <div className='m-auto pc:min-w-[1200px]' onClick={handleBackgroundClick}>
        <div
          className={`project-modal relative mx-auto h-auto w-full transform rounded-b-lg border border-foreground bg-white transition-all duration-500 ease-in-out dark:bg-secondary ${modalContent === 'image' ? 'max-w-3xl' : 'mb-14 max-w-4xl pc:mt-14'} ${
            showModal
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          <div className='flex h-12 items-center justify-between bg-foreground px-4'>
            <span className='text-lg font-bold text-primary-foreground'>
              {modalContent === 'image' ? `이미지` : 'README.md'}
            </span>
            <XIcon
              size={24}
              className='cursor-pointer stroke-primary-foreground hover:stroke-red-400'
              onClick={() => setModal(false)}
            />
          </div>
          <div className='flex flex-col flex-wrap gap-8 overflow-hidden break-all px-4 pb-10 pt-4'>
            {modalContent === 'image' ? (
              <ProjectImg
                data={project}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
            ) : (
              <ProjectDetail data={project} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
