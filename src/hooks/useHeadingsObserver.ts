import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState('');

  useEffect(() => {
    const scrollMarginOption = { rootMargin: '0px 0px -80px 0px' };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        // rehype-slug가 생성한 실제 heading id만 사용하여 TOC 링크와 1:1 매칭
        const targetId = `#${entry.target.id}`;

        if (entry.isIntersecting) {
          setActiveIdList((prev) => {
            if (!prev.includes(targetId)) return [...prev, targetId];
            return prev;
          });
          setTempId(targetId);
        } else {
          setActiveIdList((prev) => {
            const newList = prev.filter((elem) => elem !== targetId);
            return newList;
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
  return activeIdList.length > 0 ? activeIdList : [tempId];
};
