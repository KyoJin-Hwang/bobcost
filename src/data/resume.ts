import IconGithub from '@/components/icon/Github';

export const Resume = {
  name: '황 교 진',
  birthday: '1997 .11 .27',
  company: 'X',
  interest: '취업준비 및 프로젝트 구상',
  github: {
    name: 'GitHub',
    url: 'https://github.com/Kyojin-Hwang',
    icon: IconGithub,
  },
  interview: [
    {
      qusetion: '왜 프론트엔드 개발자가 되고 싶으신가요?',
      answer:
        '저는 사용자와 가장 가까운 곳에서 가치를 전달할 수 있는 역할을 하고 싶었습니다. 프론트엔드 개발은 단순히 화면을 만드는 것을 넘어, 사용자가 기술을 직관적으로 느끼고 경험할 수 있는 환경을 만들어가는 일이라고 생각합니다.',
    },
    {
      qusetion: '개발자로서 중요하게 생각하는 점이 있다면 무엇인가요?',
      answer:
        '개발자로서 가장 중요하게 생각하는 점은 문제 해결 능력과 소통입니다. 효율적인 코드를 작성하는 것뿐만 아니라, 팀원들과 명확하게 소통하며 목표를 공유하고, 이를 기반으로 프로젝트의 가치를 높일 수 있는 결과물을 만드는 것이 중요하다고 생각합니다.',
    },
  ],
  avatarUrl: '/image/profile.jpg',
  contact: {
    phone: '010-7445-6268',
    email: 'rywls4248@gmail.com',
  },
  education: [
    {
      school: '한국호텔관광전문학교(전문학사)',
      degree: '호텔조리과',
      start: '2013. 03',
      end: '2016. 02',
    },
    {
      school: '한국호텔관광전문학교(전문학사)',
      degree: '호텔조리과',
      start: '2016. 03',
      end: '2020. 02',
    },
    {
      school: '스마트인재개발원',
      degree: '빅데이터 분석서비스 개발과정',
      start: '2022. 02',
      end: '2022. 07',
    },
  ],
  carrer: [
    {
      company: '인디제이 (inDJ)',
      link: 'https://corp.indj.ai/',
      job: 'Web Frontend Developer',
      start: '2022. 08',
      end: '2024. 07',
      logo: '/image/indj.png',
      team: '인디제이 웹 서비스 1팀',
      desc: '상황 및 감정 AI기반 라디오 스트리밍 플랫폼',
      skills: [
        'Javascript',
        'Typescript',
        'React',
        'Redux',
        'Zustand',
        'TailwindCss',
        'Sass',
        'Emotion',
        'Tanstack Query',
      ],
      points: [
        '웹 라디오 서비스 페이지에서 재사용 가능한 컴포넌트를 설계',
        'AI 기반 음악 추천 챗봇을 개발하고, RESTful API와 연동하여 사용자 맞춤형 음악 추천 기능을 구현',
        'Chart.js를 활용한 커스터마이징 차트 구현',
        '모바일 유저에게 실시간 푸시 알림 및 예약된 시간에 자동으로 알림을 발송하는 기능을 구현',
        '총 22가지의 WebView 프로모션 페이지를 개발',
        '관리자 페이지, 회사소개 페이지 CRUD 기능 개발 및 유지보수',
      ],
    },
  ],
  skills: [
    {
      name: 'HTML5',
      category: 'lang',
      color: 'bg-html text-html-foreground',
    },
    {
      name: 'CSS3',
      category: 'lang',
      color: 'bg-css text-css-foreground',
    },
    {
      name: 'Javascript',
      category: 'lang',
      color: 'bg-js text-js-foreground',
    },
    {
      name: 'Typescript',
      category: 'lang',
      color: 'bg-ts text-ts-foreground',
    },
    {
      name: 'Next15 (React19)',
      category: 'front',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'Zustand',
      category: 'front',
      color: 'bg-zustand text-zustand-foreground',
    },
    {
      name: 'Redux',
      category: 'front',
      color: 'bg-next text-next-foreground',
    },
    // {
    //   name: 'Tanstack Query',
    //   category: 'front',
    //   color: 'bg-supabase text-supabase-foreground',
    // },
    {
      name: 'TailwindCss',
      category: 'front',
      color: 'bg-tailwind text-tailwind-foreground',
    },
    {
      name: 'Sass',
      category: 'front',
      color: 'bg-sass text-sass-foreground',
    },
    {
      name: 'Supabase',
      category: 'back',
      color: 'bg-supabase text-supabase-foreground',
    },
    {
      name: 'Vercel',
      category: 'dev',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'Git',
      category: 'tool',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'GitHub',
      category: 'tool',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'Notion',
      category: 'tool',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'Postman',
      category: 'tool',
      color: 'bg-zustand text-zustand-foreground',
    },
    {
      name: 'Figma',
      category: 'tool',
      color: 'bg-supabase text-supabase-foreground',
    },
  ],
  project: [
    {
      title: '오늘의 책님',
      start: '2024 .11',
      end: '2024 .12',
      team: '1인 개인프로젝트',
      url: 'https://book.bobcost.kr',
      summary: [
        {
          title: '랜덤한 답변으로 점을 쳐보는 반응형 웹사이트',
          point:
            '음식 랜덤룰렛, SNS 공유, 여러가지의 랜덤한 답변, PC에서 답변을 읽어주는 기능',
          devlop: [
            'Next.js 실력 및 프로젝트 경험 향상을 위해서 개발',
            'Google Analytics를 사용하여 DAU 분석',
            'Zustand 및 persist middleware를 통한 상태관리',
            'Web Speech API로 TTS 구현',
          ],
        },
      ],
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
      skill: ['Nextjs15', 'React18', 'Zustand', 'CSSModule', 'Vercel'],
      img: [
        'https://private-user-images.githubusercontent.com/84490050/405511623-7625dba3-f7e2-4feb-b001-158f22d67077.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTE2MjMtNzYyNWRiYTMtZjdlMi00ZmViLWIwMDEtMTU4ZjIyZDY3MDc3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUzNDkxZGU5ZjNhY2VkNjc4MTI5MWRkOWM4ZmUxZDhjMzc4MzAxOTYxMWU2MmY2ODhhYjg5ZDE0YmE1NWQ1ZTQmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.znDRr6kddtLi3McD08tjSkUFn_-pGvK1AP919W4duLM',
        'https://private-user-images.githubusercontent.com/84490050/405511789-af8f4dae-9fd9-4ef8-bbef-ad8e5af427a2.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTE3ODktYWY4ZjRkYWUtOWZkOS00ZWY4LWJiZWYtYWQ4ZTVhZjQyN2EyLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTEzN2NmNzQ0YTI1ODBiZWE5N2Y4MWM4ODI4N2M0YjM3MWYxZDQ4MWJhZjgzMWI5NjFiZTg0ZmFkODIzNzU2ZjMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.RN4rWlFFbdtymrdPTEtN85lyjsgrX5yeUSjCmsjT3TE',
        'https://private-user-images.githubusercontent.com/84490050/405515943-da1818df-4f74-40a2-91b8-b49a3fc12521.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTU5NDMtZGExODE4ZGYtNGY3NC00MGEyLTkxYjgtYjQ5YTNmYzEyNTIxLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTUxMGI5OGVmODhhZGQzZjUzNDU0MDExMDdlZDM5Y2Q1YjkxZmIwNzhmMzdmNGMxYmJkMjIxOGM1ZTY1MjhiY2ImWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.80W--qUAIPEhWgVK3qPAWzkMI31U-vRha8dXN3DeRVs',
        'https://private-user-images.githubusercontent.com/84490050/405516992-722d36eb-83b3-4292-baa7-82d7ba57bfcb.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTY5OTItNzIyZDM2ZWItODNiMy00MjkyLWJhYTctODJkN2JhNTdiZmNiLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ2YzI0ZDBhNmFlOGE3YjA0ZTY4YzMzYzUwZmZhNGYzNDM3Mzk4ZDU4MjQwMzhmMGY4ODcxMWU0Njg4YTJlZTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.xce_DutjQTpDDpDIsLI7vhm0aKzz4Pp0aiRcakKXCFw',
        'https://private-user-images.githubusercontent.com/84490050/405516175-d250ae8a-ade6-4e93-b24c-3060cc9087d0.gif?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTYxNzUtZDI1MGFlOGEtYWRlNi00ZTkzLWIyNGMtMzA2MGNjOTA4N2QwLmdpZj9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTIzMzI4YmIxZGRjZWJhZTNlZDUwOWY4MDRhYzc3OWM4ODEyMGFkNDBmNGU2M2I3NmY0ZmMzOWM2MmZiMDU0YmYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.S29Vu8g4CgC131PBkJTnJxKgJqrjtrWJn_SJiEpa-WU',
        'https://private-user-images.githubusercontent.com/84490050/405515890-dc161363-f9b7-43a4-a617-c6540228c18d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzc1MzI1MjAsIm5iZiI6MTczNzUzMjIyMCwicGF0aCI6Ii84NDQ5MDA1MC80MDU1MTU4OTAtZGMxNjEzNjMtZjliNy00M2E0LWE2MTctYzY1NDAyMjhjMThkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAxMjIlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMTIyVDA3NTAyMFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTNiMzhjY2Q2MzhmNzNjYTdlN2U5ZGU3YjlkZmFhOWVhMmEzY2VlMGMwNzM5MmYwNzI5MjQwZTcyMTZlMjRkMDEmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.KOKPlHgXwAPBr4m2FpjD4CKm-dliyJwxbg08YHYLgTs',
      ],
    },
  ],
  awards: [
    {
      name: '2022 K-디지털 해커톤 우수상',
      end: '2022.11',
      award: '우수상',
      desc: '미디어파이프의 포즈랜드마크 모델을 통해 움직임을 분석하고 YOLOv5로 객체를 탐지하여 종합된 결과로 상황을 분석하여, 이에 맞는 음악을 자동으로 재생시켜 사용자의 홈라이프를 보조해주는 서비스.',
      point: [
        '전체적인 화면 UI 퍼블리싱 및 음악 재생 기능 구현',
        '3D Room을 만들어 요소 하나하나에 카테고리 명시 및 클릭 시 노래 재생 구현',
      ],
      skill: ['HTML', 'CSS', 'Javascript', 'Java(jsp)', 'Python'],
    },
  ],
} as const;
