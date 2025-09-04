import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (query: string) => {
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState('');
  const sectionRefs = useRef<
    Map<string, { element: HTMLElement; observer: IntersectionObserver }>
  >(new Map());

  useEffect(() => {
    const currentSectionRefs = sectionRefs.current;
    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;

        if (entry.isIntersecting) {
          // 섹션에 도착하면 배열에 추가
          setActiveIdList((prev) => {
            if (!prev.includes(targetId)) return [...prev, targetId];
            return prev;
          });
          setTempId(targetId);
        } else {
          // 섹션을 벗어나면 배열에서 제거
          setActiveIdList((prev) => {
            return prev.filter((elem) => elem !== targetId);
          });
        }
      });
    };

    // h2, h3 섹션들을 observer로 관찰
    const sections = document.querySelectorAll('[data-heading-section="true"]');

    sections.forEach((section) => {
      const sectionElement = section as HTMLElement;

      const scrollMarginOption = {
        rootMargin: '-58px 0px 0px 0px', // Header 높이(58px)를 고려해서 아래쪽에서 더 일찍 감지
        threshold: 0, // 조금이라도 보이면 바로 감지
      };

      // 각 section마다 개별 observer 생성
      const sectionObserver = new IntersectionObserver(
        handleObserver,
        scrollMarginOption
      );
      sectionObserver.observe(section);

      // ref에 저장
      sectionRefs.current.set(sectionElement.id, {
        element: sectionElement,
        observer: sectionObserver,
      });
    });

    return () => {
      // 모든 observer 정리
      currentSectionRefs.forEach(({ observer }) => {
        observer.disconnect();
      });
      currentSectionRefs.clear();
    };
  }, [query]);

  return activeIdList.length > 0 ? activeIdList : [tempId];
};
