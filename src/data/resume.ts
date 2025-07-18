import { SortedProjects } from './project';
import IconGithub from '@/components/icon/Github';

export const Resume = {
  name: '황 교 진',
  birthday: '1997-11-27',
  company: 'X',
  goal: '블로그 이전 작업 완료하기',
  book: {
    url: 'https://product.kyobobook.co.kr/detail/S000213641007',
    name: '코딩 테스트 합격자 되기 : 자바스크립트 편',
  },
  github: {
    name: 'GitHub',
    url: 'https://github.com/Kyojin-Hwang',
    icon: IconGithub,
  },
  interview: [
    {
      qusetion: '왜 프론트엔드 개발자가 되고 싶으신가요?',
      answer:
        '사용자에게 가장 가까운 곳에서 가치를 전달할 수 있다는 점에 매력을 느꼈습니다. 단순한 화면 구현을 넘어, 직관적인 인터페이스뿐 아니라 반응 속도나 렌더링 최적화 같은 성능 개선까지 고민하는 점이 흥미로웠고, 프론트엔드 개발은 창의성과 기술적인 깊이를 모두 갖춘 역할이라고 생각해 선택하게 되었습니다.',
    },
    {
      qusetion: '개발자로서 중요하게 생각하는 점이 있다면 무엇인가요?',
      answer:
        '문제 해결 능력과 소통을 가장 중요하게 생각합니다. 효율적인 코드를 작성하는 것도 중요하지만, 팀원들과 명확하게 의견을 나누고 목표를 공유하는 과정에서 더 나은 결과물이 만들어진다고 믿습니다. 협업과 기술이 균형을 이루어야 진짜 가치를 전달할 수 있다고 생각합니다.',
    },
  ],
  avatarUrl: '/image/profile.jpg',
  contact: {
    phone: '010-7445-6268',
    email: 'rywls4248@gmail.com',
  },
  education: [
    {
      school: '여수충무고등학교',
      degree: '자연계',
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
      team: '인디제이 웹 서비스 1팀 / 사원',
      desc: '상황 및 감정 AI기반 라디오 스트리밍 플랫폼 (CES2023, CES2024 혁신상 수상)',
      skills: [
        'Javascript',
        'Typescript',
        'React',
        'Redux',
        'TailwindCss',
        'Sass',
        'Emotion',
        'Tanstack Query',
      ],
      points: [
        '22개의 프로모션 페이지를 반응형 웹으로 제작하여 다양한 디바이스와 플랫폼(Web 및 WebView)에서도 최적화된 화면을 제공했습니다.',
        'Chart.js를 활용한 데이터 시각화 작업을 하였습니다.',
        '백오피스용 CRUD 페이지를 개발하고, RESTful API를 연동해 기능을 구현했습니다.',
        '출석 프로모션을 기획 및 개발하여 MAU 8,000명 이상을 유지하였습니다.',
        '사내외주 프로젝트 기술환경 구성 및 개발하였습니다.',
        '업무 성과를 인정받아 이달의 우수사원으로 선정된 바 있습니다.',
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
      color: 'bg-white text-purple-500',
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
    // {
    //   name: 'Supabase',
    //   category: 'back',
    //   color: 'bg-supabase text-supabase-foreground',
    // },
    {
      name: 'Git & GitHub',
      category: 'dev',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'GitHub Actions',
      category: 'dev',
      color: 'bg-next text-next-foreground',
    },
    {
      name: 'Vercel',
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
    {
      name: 'Google Analytics 4',
      category: 'tool',
      color: 'bg-next text-next-foreground',
    },
  ],
  project: SortedProjects, // 자동으로 프로젝트를 배열에 추가
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
  community: '',
} as const;
