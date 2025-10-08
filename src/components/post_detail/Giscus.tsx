'use client';

import { useEffect, useRef } from 'react';

import { useTheme } from 'next-themes';

const repoName = process.env.NEXT_PUBLIC_GISCUS_REPO_NAME || '';
const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID || '';
const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID || '';

export default function Giscus() {
  const ref = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  const theme = resolvedTheme === 'dark' ? 'dark' : 'light';
  const isConfigured = Boolean(repoName && repoId && categoryId);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;
    if (!isConfigured) return;

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://giscus.app/client.js';
    scriptElem.async = true;
    scriptElem.crossOrigin = 'anonymous';

    scriptElem.setAttribute('data-repo', repoName);
    scriptElem.setAttribute('data-repo-id', repoId);
    scriptElem.setAttribute('data-category-id', categoryId);
    scriptElem.setAttribute('data-mapping', 'pathname');
    scriptElem.setAttribute('data-strict', '0');
    scriptElem.setAttribute('data-reactions-enabled', '1');
    scriptElem.setAttribute('data-emit-metadata', '0');
    scriptElem.setAttribute('data-input-position', 'bottom');
    scriptElem.setAttribute('data-theme', theme);
    scriptElem.setAttribute('data-lang', 'ko');

    ref.current.appendChild(scriptElem);
  }, [theme, isConfigured]);

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame'
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      'https://giscus.app'
    );
  }, [theme]);

  if (!isConfigured) {
    // 개발 환경에서만 환경 변수 누락을 알림
    if (process.env.NODE_ENV !== 'production') {
      return (
        <section className='giscus'>
          <div className='text-sm text-red-500'>
            Giscus 환경 변수가 설정되지 않았습니다.
            NEXT_PUBLIC_GISCUS_REPO_NAME, NEXT_PUBLIC_GISCUS_REPO_ID,
            NEXT_PUBLIC_GISCUS_CATEGORY_ID를 확인하세요.
          </div>
        </section>
      );
    }
  }

  return <section ref={ref} className='giscus' />;
}
