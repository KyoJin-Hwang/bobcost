import { useEffect, useRef, useState } from 'react';

export const useFadeInOut = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // 50% 보일 때 fadeIn
    const observerIn = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // 50% 보일 때 fadeIn
        }
      },
      {
        threshold: 0.3,
        rootMargin: '-40px 0px',
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
        threshold: 0.1, //
        rootMargin: '-60px 0px', // 헤더 높이 감안
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
