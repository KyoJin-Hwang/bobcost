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
        '개발공부 정리, 포트폴리오 정리(프로젝트 경험, 자기소개, 기술 스택 등), GA를 활용한 방문자 분석',
      devlop: [
        'ContextAPI 상태관리',
        'Tailwind (Clsx,cva) 조건부 스타일링',
        'GA 기반 유저 방문 트래킹',
        '검색엔진 최적화(SEO) 작업',
        '테마(다크/라이트) 적용',
      ],
    },
    background: `기존에도 블로그와 포트폴리오를 함께 운영할 수 있는 사이트를 사용하고 있었지만, 직접 개발한 것이 아니다 보니 항상 아쉬움이 남았습니다. 
    
    디자인이나 기능적인 부분에서 제 아이디어를 온전히 반영하기 어렵다는 점이 불편하게 느껴졌고, 커스터마이징의 한계도 분명히 존재했습니다. 그렇게 점점 ‘내가 직접 만들 수 있다면 얼마나 좋을까?’라는 생각이 강해지기 시작했습니다. 
    
    결국 단순한 사용자가 아니라, 개발자로서 나만의 스타일과 철학을 담은 웹사이트를 만들어보자는 결심이 들었고, 그 계기로 본격적으로 프론트엔드 개발을 배우고 직접 구축하게 되었습니다. 
    `,
    trouble: [
      {
        title: `"params" should be awaited before using its properties.`,
        desc: `Next15 에서부터는 params 접근이 동기식이 아닌 비동기식으로 적용되어서 await params 로 해결했다.`,
      },
      {
        title: `NextRouter was not mounted.`,
        desc: `Nextjs(v13) 이후부터는 next/router'가 아닌 'next/navigation' 모듈 이용`,
      },
    ],
    skill: [
      {
        title: 'Next.js 15',
        desc: '블로그와 포트폴리오를 통합한 구조를 만들기 위해 App Router 기반의 최신 Next.js 15를 적용했습니다.',
      },
      {
        title: 'React 18',
        desc: '페이지 단위의 UI 구성과 상태 관리 등 SPA 개발을 위해 React를 핵심 프레임워크로 선택했습니다.',
      },
      {
        title: 'TailwindCSS',
        desc: '빠른 UI 작업과 클래스 기반 반응형 디자인을 적용하기 위해 TailwindCSS를 도입했습니다.',
      },
      {
        title: 'TypeScript',
        desc: '코드의 안정성과 협업 효율성을 위해 타입 기반의 TypeScript를 선택했습니다.',
      },
      {
        title: 'Vercel',
        desc: 'Next.js 프로젝트와 궁합이 좋고, 빠른 배포 및 도메인 연결이 용이하여 Vercel을 사용했습니다.',
      },
    ],
    img: [''],
    learning: `이번 프로젝트를 통해 처음으로 TailwindCSS를 깊이 있게 사용해보았는데,
초기 세팅만 잘 되어 있다면 빠르게 결과물을 만들어야 하는 프로젝트에서 정말 유용하겠다는 생각이 들었습니다.

클래스 기반으로 스타일을 적용하다 보니 반복적인 CSS 작성 없이도 깔끔하고 직관적으로 작업할 수 있었고,
생산성 측면에서도 만족스러웠습니다.

또한, Context API를 통해 전역 상태 관리를 적용해보면서 props drilling 문제를 자연스럽게 해결할 수 있었고,
모달과 같은 공통 UI의 상태 관리도 훨씬 수월했습니다.

무엇보다 내가 원하는 스타일과 기능을 직접 구현해
블로그와 포트폴리오를 완성했다는 점에서 큰 뿌듯함을 느꼈습니다.

이 프로젝트는 제 기술적인 성장을 확인할 수 있었던 좋은 기회였습니다.`,
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
        'Next.js 이해도 향상',
        'Google Analytics를 사용하여 DAU 분석',
        'Zustand 상태관리',
        '새로고침 재방지 persist middleware 사용',
        'Web Speech API로 TTS 구현',
      ],
    },
    background: `Next.js 실력을 키우기 위해 이번에 새 프로젝트를 구상하게 되었습니다. `,
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
      {
        title: 'Next15',
        desc: '필요한 기능을 개발하는 것에 집중하고 싶었기 때문에, 백 엔드 개발에는 Firebase를 활용했어요. 그중에서도 소셜 로그인을 구현하기 위한 Firebase Auth를 처음으로 사용해보았는데, 확실히 직접 구현하는 것에 비해 훨씬 더 쉽다는 느낌을 받았어요. 그리고 Firebase Auth의 동작 원리를 파악하는 과정에서는 OAuth 2.0의 개념도 더욱 탄탄히 다질 수 있었어요.',
      },
      { title: 'React18', desc: '2' },
      { title: 'Zustand', desc: '3' },
      { title: 'CSSModule', desc: '4' },
      { title: 'Vercel', desc: '5' },
    ],
    img: [
      '/project/frontend/오늘의햇님/mainOff.png',
      '/project/frontend/오늘의햇님/mainOn.png',
    ],
    learning: `필요한 기능을 개발하는 것에 집중하고 싶었기 때문에, 백 엔드 개발에는 Firebase를 활용했어요. 그중에서도 소셜 로그인을 구현하기 위한 Firebase Auth를 처음으로 사용해보았는데, 확실히 직접 구현하는 것에 비해 훨씬 더 쉽다는 느낌을 받았어요. 그리고 Firebase Auth의 동작 원리를 파악하는 과정에서는 OAuth 2.0의 개념도 더욱 탄탄히 다질 수 있었어요.

또한, 노래를 관리하기 위한 데이터베이스로도 Firebase Realtime Database를 활용했어요. 실시간으로 데이터를 갱신해주는 점이 매력적이라고 느꼈고, 지금까지는 RDB만 사용했기에 이론적으로만 알고 있던 JSON 기반의 NoSQL을 처음으로 사용해보는 경험도 해볼 수 있었어요.

한편, Tailwind CSS를 처음으로 사용해보며 개인적으로 가장 취향에 맞는 스타일링 방법이라고 느꼈어요. 별도의 CSS 파일을 작성하지 않아도 되니 디렉토리 구조를 더욱 깔끔하게 관리할 수 있었기 때문이에요.`,
  },
];

// start 기준으로 내림차순 정렬
export const SortedProjects = Projects.sort((a, b) => {
  return b.start.localeCompare(a.start); // start 날짜를 기준으로 내림차순 정렬
});
