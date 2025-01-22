import { PR_BLOG, PR_BOOK } from './project';
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
  project: [PR_BOOK, PR_BLOG],
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
