import { ResumeProject } from '@/config/types';

export const PR_BLOG: ResumeProject = {
  key: '1',
  title: '개인블로그 및 포트폴리오',
  start: '2024 .12',
  end: '2025 .02',
  team: '1인 개인프로젝트',
  url: 'https://bobcost.kr',
  summary: {
    title: '개발블로그 및 포트폴리오 반응형 웹사이트',
    point:
      '개발공부 정리, 프로젝트 경험, 자기소개, 기술 스택, GA를 활용한 분석',
    devlop: [
      'ContextAPI 상태관리',
      'Tailwind Clsx,cva 등등 조건부 스타일링',
      'Fade InOut 커스텀훅 생성',
    ],
  },
  back: ``,
  trouble: [
    {
      title: ``,
      desc: ``,
    },
  ],
  skill: ['Nextjs15', 'React18', 'TailwindCSS', 'Typescript', 'Vercel'],
  img: [''],
  review: '',
};
export const PR_BOOK: ResumeProject = {
  key: '0',
  title: '오늘의 책님',
  start: '2024 .11',
  end: '2024 .12',
  team: '1인 개인프로젝트',
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
  back: `Next.js 실력을 키우기 위해 이번에 새 프로젝트를 구상하게 되었습니다. 마침 Next.js 프로젝트 경험이 부족하다고 느끼던 차에, 유튜브 알고리즘을 통해 BJ 감스트님이 축구와 관련된 책을 펼치며 점을 치는 모습을 보게 되었습니다. 이 독특하고 재미있는 아이디어에서 영감을 받아, 나만의 랜덤한 점을 쳐주는 ‘책님’이라는 프로젝트를 만들어보면 좋겠다고 생각했습니다. 그리고 추가로 스폰지밥의 마법의 소라고동도 비슷한 느낌이라고 생각되어서, PC에서는 답변을 말해주는 기능까지 넣어보자 생각하며 개발하였습니다.`,
  trouble: [
    {
      title: `Hydration failed because the server rendered HTML didn't match the client 에러`,
      desc: `이 에러는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링된 HTML이 일치하지 않을 때 발생합니다. 이 문제는 suppressHydrationWarning을 사용하여 해결했습니다. 이 방법은 React에서 발생하는 Hydration 경고를 억제하는데 사용되며, shadcn 라이브러리에서 권장하는 해결책이었습니다. 이를 통해 서버와 클라이언트의 렌더링 불일치 경고를 억제할 수 있었습니다.`,
    },
    {
      title: `(2024.11월 기준) zustand 설치 에러`,
      desc: `error log 를 확인해보니 zustand는 현재 react 19를 지원하지 않는다고한다. 그래서 react19를 react18안정화된 버전으로 다운그레이하였다. 이후 zustand는 무사히 설치 완료.`,
    },
  ],
  skill: ['Next15', 'React18', 'Zustand', 'CSSModule', 'Vercel'],
  img: [
    'https://private-user-images.githubusercontent.com/84490050/405511623-7625dba3-f7e2-4feb-b001-158f22d67077.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTE2MjMtNzYyNWRiYTMtZjdlMi00ZmViLWIwMDEtMTU4ZjIyZDY3MDc3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzNDkxZGU5ZjNhY2VkNjc4MTI5MWRkOWM4ZmUxZDhjMzc4MzAxOTYxMWU2MmY2ODhhYjg5ZDE0YmE1NWQ1ZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.znDRr6kddtLi3McD08tjSkUFn_-pGvK1AP919W4duLM',
    'https://private-user-images.githubusercontent.com/84490050/405511789-af8f4dae-9fd9-4ef8-bbef-ad8e5af427a2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTE3ODktYWY4ZjRkYWUtOWZkOS00ZWY4LWJiZWYtYWQ4ZTVhZjQyN2EyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzN2NmNzQ0YTI1ODBiZWE5N2Y4MWM4ODI4N2M0YjM3MWYxZDQ4MWJhZjgzMWI5NjFiZTg0ZmFkODIzNzU2ZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RN4rWlFFbdtymrdPTEtN85lyjsgrX5yeUSjCmsjT3TE',
    'https://private-user-images.githubusercontent.com/84490050/405515943-da1818df-4f74-40a2-91b8-b49a3fc12521.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTU5NDMtZGExODE4ZGYtNGY3NC00MGEyLTkxYjgtYjQ5YTNmYzEyNTIxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxMGI5OGVmODhhZGQzZjUzNDU0MDExMDdlZDM5Y2Q1YjkxZmIwNzhmMzdmNGMxYmJkMjIxOGM1ZTY1MjhiY2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.80W--qUAIPEhWgVK3qPAWzkMI31U-vRha8dXN3DeRVs',
    'https://private-user-images.githubusercontent.com/84490050/405516992-722d36eb-83b3-4292-baa7-82d7ba57bfcb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTY5OTItNzIyZDM2ZWItODNiMy00MjkyLWJhYTctODJkN2JhNTdiZmNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2YzI0ZDBhNmFlOGE3YjA0ZTY4YzMzYzUwZmZhNGYzNDM3Mzk4ZDU4MjQwMzhmMGY4ODcxMWU0Njg4YTJlZTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xce_DutjQTpDDpDIsLI7vhm0aKzz4Pp0aiRcakKXCFw',
    'https://private-user-images.githubusercontent.com/84490050/405516175-d250ae8a-ade6-4e93-b24c-3060cc9087d0.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTYxNzUtZDI1MGFlOGEtYWRlNi00ZTkzLWIyNGMtMzA2MGNjOTA4N2QwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIzMzI4YmIxZGRjZWJhZTNlZDUwOWY4MDRhYzc3OWM4ODEyMGFkNDBmNGU2M2I3NmY0ZmMzOWM2MmZiMDU0YmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.S29Vu8g4CgC131PBkJTnJxKgJqrjtrWJn_SJiEpa-WU',
    'https://private-user-images.githubusercontent.com/84490050/405515890-dc161363-f9b7-43a4-a617-c6540228c18d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTU4OTAtZGMxNjEzNjMtZjliNy00M2E0LWE2MTctYzY1NDAyMjhjMThkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiMzhjY2Q2MzhmNzNjYTdlN2U5ZGU3YjlkZmFhOWVhMmEzY2VlMGMwNzM5MmYwNzI5MjQwZTcyMTZlMjRkMDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KOKPlHgXwAPBr4m2FpjD4CKm-dliyJwxbg08YHYLgTs',
  ],
  review: `이번 프로젝트를 기획부터 배포까지 직접 진행하며 많은 것을 배웠습니다. Speech API, Zustand, CSS Module, Analytics 등 다양한 기술을 활용해보는 좋은 기회였고, 예상치 못한 문제들을 해결하며 성장할 수 있었습니다.
특히 기획의 중요성을 다시 한번 깨달았습니다. 기획을 더 탄탄하게 했더라면 더욱 완성도 높은 결과물이 나왔을 것 같아 아쉬움이 남습니다. 다음 프로젝트에서는 이를 보완해, 사람들이 즐겁게 사용할 수 있는 재미있고 유용한 웹사이트를 만들어보고 싶습니다.`,
};
