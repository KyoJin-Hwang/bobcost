// project.ts
import { ResumeProject } from '@/config/types';

/**
 * docs : 포트폴리오 프로젝트 템플릿
 * kyo1 : 개인
 * kyo2 : 팀
 * kyo3 : 회사
 */

export const Projects: ResumeProject[] = [
  {
    type: 1,
    title: '개인블로그 및 포트폴리오',
    start: '2024.12',
    end: '진행중',
    team: '1人 개인 프로젝트',
    url: 'https://bobcost.kr',
    summary: {
      title: '개발블로그 및 포트폴리오 반응형 웹사이트',
      point:
        '개발공부 정리, 프로젝트 경험, 자기소개, 기술 스택, GA를 활용한 분석',
      devlop: [
        'ContextAPI 상태관리',
        'Tailwind (Clsx,cva) 조건부 스타일링',
        'Fade InOut 커스텀훅 생성',
      ],
    },
    back: ``,
    // trouble: [
    //   {
    //     title: ``,
    //     desc: ``,
    //   },
    // ],
    skill: [
      { title: 'Nextjs15', desc: '', color: 'next' },
      { title: 'React18', desc: '', color: '' },
      { title: 'TailwindCSS', desc: '', color: '' },
      { title: 'Typescript', desc: '', color: '' },
      { title: 'Vercel', desc: '', color: '' },
    ],
    img: [''],
    meaning: '',
  },
  {
    type: 1,
    title: '오늘의 책님',
    start: '2024.11',
    end: '2024.12',
    team: '1人 개인 프로젝트',
    url: 'https://book.bobcost.kr',
    summary: {
      title: '질문을 하고 랜덤한 답변을 받는 반응형 웹사이트',
      point:
        '음식 랜덤룰렛, SNS 공유, 여러가지의 랜덤한 답변, PC에서 답변을 읽어주는 기능',
      devlop: [
        'Next.js 실력 및 프로젝트 경험 향상을 위해서 개발',
        'Google Analytics를 사용하여 DAU 분석',
        'Zustand 상태관리',
        '새로고침 재방지 persist middleware 사용',
        'Web Speech API로 TTS 구현',
      ],
    },
    back: `Next.js 실력을 키우기 위해 이번에 새 프로젝트를 구상하게 되었습니다.`,
    trouble: [
      {
        title: `Hydration failed because the server rendered HTML didn't match the client 에러`,
        desc: `이 에러는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링된 HTML이 일치하지 않을 때 발생합니다. 이를 해결했습니다.`,
      },
      {
        title: `(2024.11월 기준) zustand 설치 에러`,
        desc: `zustand는 현재 react 19를 지원하지 않아서, react 19를 react18로 다운그레이드하여 해결했습니다.`,
      },
    ],
    skill: [
      { title: 'Next15', desc: '', color: '' },
      { title: 'React18', desc: '', color: '' },
      { title: 'Zustand', desc: '', color: '' },
      { title: 'CSSModule', desc: '', color: '' },
      { title: 'Vercel', desc: '', color: '' },
    ],
    img: [''],
    meaning: '',
  },
];

// start 기준으로 내림차순 정렬
export const SortedProjects = Projects.sort((a, b) => {
  return b.start.localeCompare(a.start); // start 날짜를 기준으로 내림차순 정렬
});
