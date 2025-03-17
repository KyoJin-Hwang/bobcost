'use client';

import { useContext, useEffect } from 'react';

import { AboutContextModal, AboutContextProject } from './AboutProvider';
import ProjectDetail from './ProjectDetail';
import { XIcon } from 'lucide-react';

const AboutModal = () => {
  const contextProject = useContext(AboutContextProject);
  const contextModal = useContext(AboutContextModal);

  if (!contextProject) {
    throw new Error('AboutContextProject must be used within an AboutProvider');
  }

  const { project } = contextProject;
  const { modal, setModal } = contextModal;

  // 조건부 렌더링 대신 useEffect와 상태 관리로 로직 처리
  useEffect(() => {
    if (!project) {
      return; // project가 없으면 early return 처리
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
  }, [modal, project]); // modal과 project가 변경될 때마다 실행

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
      className={`${
        modal ? 'block' : 'hidden'
      } fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-3 transition-opacity duration-300 pc:p-0`}
      onClick={handleBackgroundClick}
    >
      <div
        className={`relative h-screen w-full max-w-3xl overflow-scroll rounded-lg border bg-white transition-transform duration-500 ease-out dark:bg-black pc:max-h-[45rem]`}
      >
        <div className='flex h-16 justify-between rounded-t-lg bg-gray-300 p-4 dark:bg-gray-500'>
          <span className='text-xl font-bold'>README.md</span>
          <XIcon
            size={28}
            className='cursor-pointer'
            onClick={() => setModal(false)}
          />
        </div>
        <div className='flex flex-col gap-8 p-4'>
          <ProjectDetail data={project} />
        </div>
      </div>
    </div>
  );
};

export default AboutModal;
