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
    background: ``,
    trouble: [
      {
        title: `테스트용`,
        desc: `테스트 완료다잉`,
      },
    ],
    skill: [
      { title: 'Nextjs15', desc: '나는 Next15' },
      {
        title: 'React18',
        desc: 'React 18을 이렇게까지 ',
      },
      { title: 'TailwindCSS', desc: '1' },
      { title: 'Typescript', desc: '2' },
      { title: 'Vercel', desc: '3' },
    ],
    img: [''],
    learning: '',
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
      '/project/frontend/오늘의햇님/2022.jpg',
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
