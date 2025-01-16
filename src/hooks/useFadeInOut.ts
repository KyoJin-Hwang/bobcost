import { useEffect, useRef, useState } from 'react';

export const useFadeInOut = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 페이지 처음 로드될 때 fadeIn
    setIsVisible(true);

    // 30% 보일 때 fadeIn
    const observerIn = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 80% 보일 때 fadeIn
        }
      },
      {
        threshold: 0.8, // 80% 보일 때
      }
    );

    // 요소가 화면에서 사라지면 fadeOut
    const observerOut = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsVisible(false); // 화면을 벗어나면 fadeOut
        }
      },
      {
        threshold: 0, // 요소가 완전히 화면에서 벗어날 때
        rootMargin: '-50px 0px', // 헤더 높이 감안
      }
    );

    if (ref.current) {
      observerIn.observe(ref.current); // fadeIn observer
      observerOut.observe(ref.current); // fadeOut observer
    }

    return () => {
      observerIn.disconnect();
      observerOut.disconnect();
    };
  }, []);

  return { ref, isVisible };
};
