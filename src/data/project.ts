import { ResumeProject } from '@/config/types';

/**
 * docs : 포트폴리오 프로젝트 템플릿
 * kyo1 : 개인
 * kyo2 : 팀
 * kyo3 : 회사
 */

export const Projects: ResumeProject[] = [
  // 개인블로그 포트폴리오
  {
    type: 1,
    title: '개인블로그 및 포트폴리오',
    start: '2024.12',
    end: '2025.05',
    team: '1人 개인 프로젝트',
    url: 'https://www.bobcost.kr',
    summary: {
      title: '개발블로그 및 포트폴리오 반응형 웹사이트',
      point:
        '개발공부 정리, 포트폴리오 정리(프로젝트 경험, 자기소개, 기술 스택 등), GA를 활용한 방문자 분석',
      devlop: [
        'ContextAPI 상태관리',
        'Tailwind (Clsx,cva) 조건부 스타일링',
        'GA4 기반 유저 방문 트래킹',
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
        desc: `Nextjs(v13) 이후부터는 next/router'가 아닌 'next/navigation' 모듈 이용`,
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
    img: [
      '/project/bobcost/blog1.png',
      '/project/bobcost/blog2.png',
      '/project/bobcost/개발자소개.png',
    ],
    learning: `이번 프로젝트를 통해 처음으로 TailwindCSS를 깊이 있게 사용해보았는데,
초기 세팅만 잘 되어 있다면 빠르게 결과물을 만들어야 하는 프로젝트에서 정말 유용하겠다는 생각이 들었습니다.

클래스 기반으로 스타일을 적용하다 보니 반복적인 CSS 작성 없이도 깔끔하고 직관적으로 작업할 수 있었고,
생산성 측면에서도 만족스러웠습니다.

또한, Context API를 통해 전역 상태 관리를 적용해보면서 props drilling 문제를 자연스럽게 해결할 수 있었고,
모달과 같은 공통 UI의 상태 관리도 훨씬 수월했습니다.

무엇보다 내가 원하는 스타일과 기능을 직접 구현해
블로그와 포트폴리오를 완성했다는 점에서 큰 뿌듯함을 느꼈습니다.

이 프로젝트는 제 기술적인 성장을 계속 확인할 수 있는 좋은 기회가 될것같습니다.`,
  },
  // 오늘의 책님
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
        '음식 랜덤룰렛, SNS 공유, 여러가지의 랜덤한 답변, PC에서 답변을 읽어주는 TTS 기능',
      devlop: [
        'Next.js 이해도 향상',
        'Google Analytics를 사용하여 DAU 분석',
        'Zustand 상태관리',
        '카카오톡 API를 사용하여 공유 기능 구현',
        'Web Speech API로 TTS 구현',
      ],
    },
    background: `유튜버이자 BJ인 감스트님이 책을 펼쳐 점을 치는 콘텐츠를 보고 흥미로움을 느꼈고, 이를 통해 책을 활용한 인터랙티브한 경험을 만들어보자는 아이디어를 얻게 되었습니다. 
    
    이 아이디어를 바탕으로 프로젝트를 기획하게 되었고, Next.js를 사용해 SSR 기반의 빠른 웹 환경을 구축하고, CSS Modules를 활용해 컴포넌트 단위의 스타일 충돌 없이 관리할 수 있도록 했습니다. 또한, 상태 관리를 위해 가볍고 직관적인 Zustand를 도입해 사용자 선택 및 결과 데이터를 간결하게 관리했습니다.`,
    trouble: [
      {
        title: `Hydration failed because the server rendered HTML didn't match the client 에러`,
        desc: `이 에러는 서버에서 렌더링된 HTML과 클라이언트에서 렌더링된 HTML이 일치하지 않을 때 발생합니다. 이를 해결했습니다.`,
      },
      {
        title: `(2024.11월 기준) zustand 설치 에러`,
        desc: `zustand는 현재 react 19를 지원하지 않아서, react 19를 react18로 다운그레이드하여 해결했습니다.`,
      },
      {
        title: `next-themes를 사용하여 다크모드를 구현하는 도중, 버튼에 hover 상태를 적용할 때 module.css와 호환되지 않는 문제가 발생했습니다. 다크모드 상태에서는 버튼의 hover 스타일이 잘 적용되지만, 라이트모드에서는 hover 스타일이 적용되지 않았습니다.`,
        desc: `onMouseEnter와 onMouseLeave 이벤트를 활용하여 hover 상태를 동적으로 변경함으로써, module.css와 next-themes 간의 호환성 문제를 해결할 수 있었습니다. 또한, hover 로직을 useHover라는 커스텀 훅으로 배치하고, 버튼 컴포넌트를 만들어서 여러 컴포넌트에서 재사용할 수 있도록 효율적으로 관리할 수 있었습니다.`,
      },
      {
        title: `PC 버전에서 텍스트를 Web Speedh API 로 음성을 들려주는 도중 두번씩 음성이 나오는 에러 발생`,
        desc: `조건문으로 window.speechSynthesis.speaking (음성이 진행여부) 를 확인하고 return 으로 중복을 방지하며 또한 사용하고있는 SpeechSynthesisUtterance (Object) 로 onend 음성 합성이 완료되었을 때 실행되는 콜백 함수를 사용하여 음성종료를 알린다.`,
      },
    ],
    skill: [
      {
        title: 'Next15',
        desc: 'Next.js에 대한 이해가 부족하다고 느껴, 프로젝트를 진행하며 자연스럽게 학습하고자 도입했습니다. 특히 App Router 구조를 경험해보고 싶었고, SSR과 SSG 기능을 통해 SEO를 향상시킬 수 있다는 점도 큰 장점이었습니다.',
      },
      {
        title: 'React18',
        desc: 'React19 로 사용하여 프로젝트를 구성하려고 했으나, 2024.11월 기준 Zustand가 React19를 지원하지않아서 React18로 다운그레이드하여 사용했습니다. ',
      },
      {
        title: 'Zustand',
        desc: '기존에는 Redux만 사용했지만, Zustand가 훨씬 가볍고 코드가 간결하다는 점에서 매력을 느껴 도입했습니다. 특히 책 오픈 상태관리 및 persist를 활용해 사용자의 답변 기록을 저장하는 기능을 쉽게 구현할 수 있었습니다.',
      },
      {
        title: 'CSSModule',
        desc: 'Next.js가 기본적으로 추천하는 스타일링 방식이기도 하고, 컴포넌트 단위의 스타일 관리 및 캡슐화에 적합하다고 판단되어 사용해보았습니다.',
      },
      {
        title: 'Vercel',
        desc: 'Next.js와의 호환성이 뛰어나고, GitHub와 연동해 손쉽게 CI/CD 파이프라인을 구축할 수 있었으며, 브랜치별 프리뷰 기능을 통해 빠른 피드백과 협업이 가능해 효율적인 배포 환경을 제공해주었습니다.',
      },
    ],
    img: [
      '/project/frontend/오늘의햇님/mainOff.png',
      '/project/frontend/오늘의햇님/mainOn.png',
      '/project/frontend/오늘의햇님/오늘의질문1.png',
      '/project/frontend/오늘의햇님/오늘의질문2.png',
      '/project/frontend/오늘의햇님/오늘의연애1.png',
      '/project/frontend/오늘의햇님/오늘의연애2.png',
      '/project/frontend/오늘의햇님/오늘의음식.png',
      '/project/frontend/오늘의햇님/오늘의답변.png',
    ],
    learning: `이번 프로젝트를 통해 Next.js의 App Router 구조와 SSR 기반의 렌더링 흐름에 대한 이해를 높일 수 있었으며, CSR과 SSR의 차이를 실무적으로 체감할 수 있었습니다. Zustand를 활용한 전역 상태 관리는 Redux보다 훨씬 가볍고 간결하여, 실제 프로젝트에서의 생산성을 향상시키는 데 큰 도움이 되었습니다. CSS Modules를 통해 컴포넌트 단위 스타일링을 캡슐화하여 스타일 충돌 없이 안정적으로 스타일을 관리할 수 있었습니다.

또한, 평소 자주 활용하지 않았던 제네릭 타입을 컴포넌트에 적용해보며, 코드의 유연성과 재사용성을 높일 수 있다는 점을 실감했습니다. 
SVG 아이콘 관리는 @svgr/webpack을 사용해 React 컴포넌트처럼 활용함으로써 코드의 가독성과 재사용성을 크게 향상시켰습니다.

localStorage는 CSR에서만 동작 가능하다는 점에서 Next.js 환경에서는 직접적으로 접근할 때 에러가 발생할 수 있음을 알게 되었고, 이를 useEffect나 마운트 여부를 체크하여 해결하는 방식도 함께 익혔습니다.

DB 없이 결과를 공유하기 위해, "encodeURIComponent와 JSON.stringify"를 사용해 데이터를 안전하게 URL로 전달하고,
복원 시 decodeURIComponent와 JSON.parse로 처리하여 신뢰성 있는 데이터 흐름을 구성할 수 있었습니다.

또한, 카카오톡 공유 API를 직접 공식 문서를 통해 구현하며, 외부 API 연동 경험을 쌓을 수 있었고, JSDoc을 통해 타입 안정성과 함께 
문서화 작업을 병행하여 유지보수성과 협업 효율성을 높일 수 있다는 점도 배우게 되었습니다.

무엇보다도, 단순한 재미에서 시작된 아이디어를 실제 서비스로 구현해보며 기획부터 개발, 배포까지의 전 과정을 주도적으로 진행할 수 있었던 점이 매우 인상 깊었습니다.`,
  },
];

// start 기준으로 내림차순 정렬
export const SortedProjects = Projects.sort((a, b) => {
  return b.start.localeCompare(a.start); // start 날짜를 기준으로 내림차순 정렬
});
