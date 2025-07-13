'use client';

import { useEffect, useState } from 'react';

// 화면 크기에 따라 PC 여부를 반환하는 커스텀 훅
const useResize = (breakpoint: number) => {
  const [isPc, setIsPc] = useState<boolean>(false); // 초기 상태를 false로 설정

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= breakpoint);
    };
    // 초기 실행
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isPc;
};

export default useResize;
