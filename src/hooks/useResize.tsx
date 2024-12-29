import { useEffect, useState } from 'react';

// 화면 크기에 따라 PC 여부를 반환하는 커스텀 훅
const useResize = (breakpoint: number) => {
  const [isPc, setIsPc] = useState<boolean>(window.innerWidth >= breakpoint);

  useEffect(() => {
    const handleResize = () => {
      setIsPc(window.innerWidth >= breakpoint);
    };

    // 화면 크기 변화 시마다 실행
    window.addEventListener('resize', handleResize);

    // cleanup: 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint]);

  return isPc;
};

export default useResize;
