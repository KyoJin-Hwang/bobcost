import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState('');

  useEffect(() => {
    const scrollMarginOption = { rootMargin: '-32px 0px -80px 0px' };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const span = entry.target.querySelector('span');
        const emoji = span?.textContent || '';
        const targetId = `#${emoji}${entry.target.id}`;

        if (entry.isIntersecting) {
          setActiveIdList((prev) => [...prev, targetId]);
          setTempId(() => '');
        } else {
          setActiveIdList((prev) => {
            // giscus 떄문에 마지막에 남은게 필요했지만 현재 필요하지않음
            // 마지막 값을 알야할 필요없음
            // if (prev.length === 1) setTempId(targetId);
            return prev.filter((elem) => elem !== targetId);
          });
        }
      });
    };

    observer.current = new IntersectionObserver(
      handleObserver,
      scrollMarginOption
    );

    const elements = document.querySelectorAll(query);
    elements.forEach((elem) => observer.current?.observe(elem));

    return () => observer.current?.disconnect();
  }, [query]);
  return [...activeIdList, tempId];
};
