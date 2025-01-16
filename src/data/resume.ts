import IconGithub from '@/components/icon/Github';
import { currentDate } from '@/lib/utils';

export const Resume = {
  name: '황 교 진',
  birthday: '1997 .11 .27',
  company: '없음',
  interest: '취업준비',
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
    { qusetion: '', answer: '' },
    { qusetion: '', answer: '' },
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
      start: '2016. 03',
      end: '202. 02',
    },
    {
      school: '스마트인재개발원',
      degree: '빅데이터 분석서비스 개발과정',
      start: '2022. 02',
      end: '2022. 07',
    },
  ],
  work: [
    {
      company: '인디제이',
      link: 'https://corp.indj.ai/indj',
      title: '웹 프론트엔드 개발자',
      start: '2022. 08',
      end: '2024. 07',
      desc: '상황 및 감정 AI기반 라디오 스트리밍 플랫폼',
      points: [],
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
    {
      name: 'Tanstack Query',
      category: 'front',
      color: 'bg-supabase text-supabase-foreground',
    },
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
      color: 'bg-zustand text-zustand-foreground',
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
  hobby: [
    { name: '', desc: '' },
    { name: '', desc: '' },
    { name: '', desc: '' },
  ],
  awards: [
    {
      name: '2022 K-디지털 해커톤 우수상',
      end: '2022.11',
      award: '우수상',
      desc: '',
      point: [''],
      skill: [''],
    },
  ],
} as const;
