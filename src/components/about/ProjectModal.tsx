'use client';

import { useContext, useEffect, useState } from 'react';

import { AboutContextModal, AboutContextProject } from './AboutProvider';
import ProjectDetail from './ProjectDetail';
import { XIcon } from 'lucide-react';

const ProjectModal = () => {
  const contextProject = useContext(AboutContextProject);
  const contextModal = useContext(AboutContextModal);

  if (!contextProject) {
    throw new Error('AboutContextProject must be used within an AboutProvider');
  }

  const { project } = contextProject;
  const { modal, setModal } = contextModal;

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (modal) {
      setShowModal(true); // 모달이 열리면 애니메이션을 시작
    } else {
      setTimeout(() => setShowModal(false), 100); // 애니메이션이 끝날 때쯤 모달을 숨김
    }
  }, [modal]); // modal 상태가 변경될 때마다 실행

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

  if (!project) {
    return null; // project가 없으면 렌더링하지 않음
  }

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setModal(false);
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 top-0 z-50 flex items-center justify-center overflow-y-scroll bg-black bg-opacity-50 p-3 transition-opacity duration-500 pc:p-0`}
      onClick={handleBackgroundClick}
      style={{
        visibility: modal ? 'visible' : 'hidden',
        opacity: modal ? '1' : '0',
      }}
    >
      <div className='m-auto'>
        <div
          className={`relative mx-auto h-auto w-full max-w-3xl transform rounded-lg border border-foreground bg-white transition-all duration-500 ease-in-out dark:bg-secondary pc:mt-14 ${
            showModal
              ? 'translate-y-0 opacity-100'
              : 'translate-y-full opacity-0'
          }`}
        >
          <div className='flex h-12 items-center justify-between rounded-t-lg bg-foreground px-4'>
            <span className='text-lg font-bold text-primary-foreground'>
              README.md
            </span>
            <XIcon
              size={24}
              className='cursor-pointer stroke-primary-foreground hover:stroke-red-400'
              onClick={() => setModal(false)}
            />
          </div>
          <div className='flex flex-col gap-8 px-4 pb-10 pt-4'>
            <ProjectDetail data={project} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
