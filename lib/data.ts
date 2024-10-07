import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

import htmlIcon from "@/public/skillsIcon/htmlIcon.png";
import cssIcon from "@/public/skillsIcon/cssIcon.png";
import javascriptIcon from "@/public/skillsIcon/javascriptIcon.png";
import typscriptIcon from "@/public/skillsIcon/typescriptIcon.png";
import reactIcon from "@/public/skillsIcon/reactIcon.png";
import nextjsIcon from "@/public/skillsIcon/nextjsIcon.png";
import tailwindIcon from "@/public/skillsIcon/tailwindIcon.png";
import reactqueryIcon from "@/public/skillsIcon/reactqueryIcon.png";
import jotaiIcon from "@/public/skillsIcon/jotaiIcon.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Activities",
    hash: "#activities",
  },
] as const;

export const activitiesData = [
  {
    title: "프로그래머스 데브코스",
    description: [
      {
        description: "Cloud Application Engineering 과정 수료.",
      },
      {
        description:
          "HTML, CSS, JavaScript의 기본 지식을 바탕으로, React와 React Native에 중점을 두어 학습하였습니다.",
      },
    ],
    date: "2023.12 ~ 2024.05",
  },
  {
    title: "스터디 운영",
    description: [
      {
        description:
          "알고리즘 스터디를 운영하며, 알고리즘 실력 향상을 목표로 활동하고 있습니다.",
      },
      {
        description:
          "JavaScript 스터디를 운영하며, JavaScript의 기본 문법과 실전 활용 방법을 공부하고 있습니다.",
      },
    ],
    date: "2024.05 ~ 진행중",
  },
] as const;

export const projectsData = [
  {
    title: "ItZip",
    description: "취업을 목표로 하고 있는 개발자를 위한 프로젝트입니다. ",

    features: [
      {
        title: "채용 공고",
        description:
          "개발 취준생들이 여러 회사의 최신 채용 정보를 한 곳에서 확인할 수 있습니다.",
      },
      {
        title: "학습",
        description:
          "개발에 필요한 기술과 지식을 습득하고 확장할 수 있는 학습 자료를 제공합니다.",
      },
      {
        title: "블로그",
        description:
          "개발 취준생들이 자신의 경험과 지식을 공유할 수 있는 블로그 공간입니다.",
      },
    ],

    troubleShooting: [
      {
        title: "기술 퀴즈 생성 후 바로 업데이트",
        description:
          "기술 퀴즈를 생성하고 새로고침을 해야 업데이트가 되는 문제가 발생했습니다.",
        solution:
          "React-query의 invalidateQueries를 사용하여, 기술 퀴즈를 생성하고 바로 업데이트할 수 있도록 구현했습니다. 새로운 퀴즈가 생성된 후 해당 데이터를 최신 상태로 유지하기 위해 invalidateQueries를 통해 캐시된 데이터를 무효화하고, 서버에서 최신 데이터를 다시 가져오도록 했습니다. 이를 통해 사용자가 새로고침 없이도 최신 퀴즈 목록을 볼 수 있도록 개선하였습니다.",
        learned:
          "이 문제를 해결하면서 React-query의 캐시 관리와 invalidateQueries의 역할을 이해하게 되었습니다. 특히, 서버 상태를 효율적으로 동기화하고, 사용자 경험을 향상시키기 위한 비동기 처리 전략의 중요성을 배웠습니다. 또한, optimistic update를 통해 사용자 인터페이스를 더 신속하게 업데이트하고, 비동기 작업이 실패할 경우 롤백하는 방법을 익혔습니다. 이러한 기술들을 통해 사용자 경험을 개선하는 동시에 서버와 클라이언트 간의 상태 동기화 문제를 보다 효과적으로 관리할 수 있다는 것을 깨달았습니다.",
      },
      {
        title: "검색 입력 시 과도한 API 호출 문제",
        description:
          "사용자가 검색 입력란에 텍스트를 입력할 때마다 API가 호출되어 성능 저하와 서버 부담이 발생하는 문제가 있었습니다. 특히, 사용자가 빠르게 타이핑할 경우 API 요청이 너무 자주 발생하여 불필요한 네트워크 트래픽이 증가했습니다.",
        solution:
          "debounce 기능을 사용하여 사용자가 입력을 멈춘 후 일정 시간이 지난 후에만 API 요청이 발생하도록 개선했습니다. Lodash의 debounce 함수를 활용하여 300ms의 지연 시간을 설정하였고, 이를 통해 사용자가 입력 중일 때는 API 요청이 발생하지 않도록 하였습니다. 이로 인해 API 호출 빈도가 크게 줄어들었고, 서버 성능이 개선되었으며, 사용자의 검색 경험도 더 부드럽게 개선되었습니다. 또한, React의 useEffect 훅을 활용해 컴포넌트가 언마운트될 때 debounce 함수가 정리되도록 처리하여 메모리 누수를 방지했습니다.",
        learned:
          "이 과정을 통해 사용자의 입력과 같은 빈번한 이벤트에 대해 실시간으로 처리하는 경우에는 성능 최적화를 위한 추가적인 고려가 필요하다는 것을 배웠습니다. debounce와 같은 기술을 적절히 활용하면 서버와 클라이언트 모두에서 불필요한 작업을 줄일 수 있으며, 사용자 경험을 개선할 수 있다는 점을 깨달았습니다.",
      },
      {
        title: "서버 및 API 미비 시 Postman Mock 서버 활용",
        description:
          "프로젝트 초기 단계에서 백엔드 개발이 지연되거나 API가 준비되지 않은 상황에서, 프론트엔드 팀은 Postman의 Mock 서버를 사용하여 임시로 테스트를 진행했습니다. Mock 서버를 설정하여 API의 기본 응답을 시뮬레이션함으로써 프론트엔드 개발을 지속할 수 있었고, API의 명세를 검증하며 프론트엔드와 백엔드 간의 인터페이스를 미리 조율할 수 있었습니다.",
        solution:
          "Postman을 사용하여 Mock 서버를 설정하고, 예상되는 API 엔드포인트와 응답 구조를 정의했습니다. 이를 통해 프론트엔드와 백엔드 간의 의사소통을 개선하고, 실제 서버가 준비되기 전에도 프론트엔드 기능을 테스트할 수 있었습니다. Mock 서버의 응답을 기반으로 개발을 진행하면서, 실제 서버가 준비되었을 때의 통합 테스트를 원활하게 수행할 수 있도록 사전에 문제를 발견하고 수정할 수 있었습니다.",
        learned:
          "Mock 서버를 활용하는 과정에서 백엔드와의 협업 시 발생할 수 있는 지연 상황에 대한 대응 전략을 학습했습니다. Mock 서버를 통해 개발 초기 단계에서도 프론트엔드 개발을 병행할 수 있으며, 서버가 준비될 때까지 발생할 수 있는 인터페이스 불일치를 미리 발견하여 수정할 수 있음을 깨달았습니다. 또한, Postman의 Mock 서버 기능을 활용하여 API 설계와 응답 형식을 명확히 하고, 팀 간 협업을 원활히 진행할 수 있는 방법에 대해 배웠습니다.",
      },
    ],
    period: "2024.06 ~ ",
    people: {
      frontend: 4,
      backend: 5,
    },
    github: "https://github.com/haegu97/itzip_front",
    demo: "",
    contributes: [
      {
        title: "기술 퀴즈 풀기",
        description:
          "유저들이 만든 기술 퀴즈를 불러오고, 사용자가 풀고 싶은 문제를 필터를 통해 선택할 수 있도록 구현했습니다. 사용자는 다양한 필터를 적용하여 자신에게 적합한 문제를 쉽게 찾을 수 있습니다. 문제를 푼 후에는 문제에 대한 평가를 남길 수 있는 기능도 추가하여, 문제의 품질을 개선하고 사용자 피드백을 받을 수 있도록 했습니다. 이를 통해 사용자 경험을 개선하고, 퀴즈의 질을 지속적으로 향상시키기 위한 데이터 수집이 가능해졌습니다.",
      },
      {
        title: "기술 퀴즈 생성",
        description:
          "Zod와 React Hook Form을 사용하여 유저가 기술 퀴즈를 생성할 수 있는 기능을 구현했습니다. Zod를 활용한 유효성 검사를 통해 사용자 입력을 검증하고, React Hook Form으로 효율적인 폼 관리를 실현했습니다. 퀴즈가 생성된 후에는 서버에 저장되며, 이를 통해 다른 유저들이 새로 생성된 퀴즈를 검색하고 풀 수 있게 하였습니다. 이 기능을 통해 사용자 생성 콘텐츠의 참여를 유도하고, 퀴즈 플랫폼의 다양성과 풍부함을 증가시킬 수 있었습니다.",
      },
      {
        title: "알고리즘 추천",
        description:
          "Solved.ac API를 활용하여 유저의 티어에 맞는 알고리즘 문제를 추천하는 기능을 구현했습니다. 유저의 현재 티어에 기반하여 적절한 난이도의 문제를 추천함으로써, 개인 맞춤형 학습을 지원하고 알고리즘 문제 풀이의 효율성을 높였습니다.",
      },
    ],
    tags: [
      {
        skill: "Next.js",
        reason:
          "Next.js는 빠른 개발 속도와 강력한 확장성을 제공합니다. 또한, SSR를 지원하여 SEO 최적화와 성능 최적화에 유리합니다. ",
      },
      {
        skill: "TypeScript",
        reason:
          "TypeScript의 타입 시스템을 통해 코드의 안정성을 높이고 타입 에러를 발견하여 프로젝트의 안정성을 높이고 개발자의 실수를 줄일 수 있습니다. ",
      },
      {
        skill: "Tailwind CSS",
        reason:
          "반응형 디자인을 쉽게 구현할 수 있고, 커스터마이징이 용이합니다. 이를 통해 디자인 시스템을 효율적으로 구축하고, 일관된 디자인을 유지할 수 있었습니다.",
      },
      {
        skill: "React Query",
        reason:
          "React Query를 통해 캐시와 상태 관리를 효율적으로 처리할 수 있으며, 이를 통해 성능을 최적화할 수 있었습니다.",
      },
      {
        skill: "Jotai",
        reason:
          "Jotai는 간단하고 직관적인 API를 제공하며, 불필요한 리렌더링을 방지할 수 있습니다. 이를 통해 상태 관리를 효율적으로 처리하고, 컴포넌트 간의 데이터 전달을 간소화할 수 있었습니다.",
      },
      {
        skill: "zod",
        reason:
          "Zod는 타입 안정성을 제공하고, 데이터의 무결성을 보장할 수 있습니다. 이를 통해 데이터의 유효성을 검증하고, 안전한 데이터 처리를 보장할 수 있었습니다.",
      },
    ],
    imageUrl: corpcommentImg,
    images: [
      "/project/itzip/itzipImage1.png",
      "/project/itzip/itzipImage2.png",
      "/project/itzip/itzipImage3.png",
      "/project/itzip/itzipImage4.png",
      "/project/itzip/itzipImage5.png",
    ],
  },
  {
    title: "Sharebby",
    description:
      "Sharebby는 Share + hobby의 줄임말로 취미를 공유하고, 새로운 사람들과 함께 취미 활동을 즐길 수 있는 크로스플랫폼 앱입니다.",
    features: [
      {
        title: "취미 공유",
        description: "나의 취미를 공유하고, 다른 사람들의 취미를 찾아보세요!",
      },
      {
        title: "활동 모집",
        description:
          "취미를 함께 즐길 사람들을 모집할 수 있는 기능을 제공합니다. 그룹 활동, 워크숍, 온라인 클래스 등 다양한 형태의 취미 활동을 계획하고, 참여자를 모집해 보세요.",
      },
      {
        title: "참여 및 탐색",
        description: "취미 활동을 함께 즐길 수 있는 모임을 만들어보세요!",
      },
      {
        title: "커뮤니티 연결",
        description:
          "채팅을 통해 취미에 관한 이야기를 나누고, 함께 취미 활동을 즐겨보세요!",
      },
    ],
    troubleShooting: [
      {
        title: "빠른 초기 설정 및 개발",
        description:
          "프론트엔드 개발자로만 구성된 프로젝트 팀에서 백엔드 개발자가 없는 상황에서, 초기 서버 설정 및 백엔드 인프라 구축에 어려움이 있었습니다.",
        solution:
          "Firebase는 서버 설정 없이 바로 클라우드 기반의 백엔드를 사용할 수 있게 하여 초기 개발 속도를 크게 단축시켰습니다. 이를 통해 백엔드 인프라 구성 시간을 절약했습니다.",
        learned:
          "서버를 직접 설정하거나 관리하지 않고도 Firebase를 통해 클라우드 기반 백엔드를 빠르게 사용할 수 있어, 백엔드 인프라 구성의 효율성을 체감했습니다. 이를 통해 클라우드 기술의 중요성을 이해하고, 서버리스 아키텍처의 장점에 대해 배웠습니다.",
      },
      {
        title: "채팅의 핵심인 실시간성",
        description:
          "유저저들이 채팅을 통해 약속을 잡고, 취미를 공유할 수 있도록 실시간성이 중요한 요소였습니다.",
        solution:
          "Firebase의 Realtime Database 또는 Firestore를 사용해 실시간 동기화가 필요한 프로젝트에 적합했습니다. 이를 통해 실시간 데이터 반영이 필요한 기능들을 손쉽게 구현할 수 있었습니다.",
        learned:
          "Firebase의 onSnapshot과 같은 리스너를 활용해 UI 업데이트를 최적화하는 방법을 배웠습니다. 이를 통해 사용자 경험을 더욱 개선할 수 있었습니다.",
      },
    ],
    period: "2024.04 ~ 2024.05",
    people: {
      frontend: 4,
      backend: 0,
    },
    github: "https://github.com/haegu97/RN-Sharebby",
    demo: "https://www.youtube.com/watch?v=8YFC6SU4DyY",
    contributes: [
      {
        title: "채팅 기능 구현",
        description:
          "유저들이 채팅을 통해 소통하고, 취미 활동을 계획할 수 있는 기능을 구현했습니다. Firebase의 Realtime Database를 사용하여 실시간으로 데이터를 동기화하고, 채팅 메시지를 송수신할 수 있도록 구현했습니다. 또한, 채팅방을 만들고, 채팅방을 나가거나, 채팅방에서 사용할 수 있는 여러기능(이미지 전송, 카메라 촬영, 공지사항 등)을 추가하여 사용자 경험을 향상시켰습니다.",
      },
      {
        title: "공통 컴포넌트 구현",
        description:
          "공통으로 사용되는 컴포넌트들을 구현하여, 코드의 중복을 줄이고, 유지보수성을 높여 개발 생산성을 높였습니다.",
      },
    ],
    tags: [
      {
        skill: "React Native",
        reason:
          "React Native를 사용함으로써 하나의 코드베이스로 iOS와 Android 두 플랫폼에서 동시에 애플리케이션을 개발할 수 있었습니다. 이는 개발 시간과 비용을 절감하고, 유지보수를 용이하게 했습니다.",
      },
      {
        skill: "Firebase",
        reason:
          "Firebase는 서버 설정 없이 바로 클라우드 기반의 백엔드를 사용할 수 있게 하여 초기 개발 속도를 크게 단축시켰습니다. 이를 통해 백엔드 인프라 구성 시간을 절약했습니다.",
      },
    ],
    imageUrl: rmtdevImg,
    images: [
      "/project/sharebby/sharebbyImage1.png",
      "/project/sharebby/sharebbyImage2.png",
      "/project/sharebby/sharebbyImage3.png",
      "/project/sharebby/sharebbyImage4.png",
      "/project/sharebby/sharebbyImage5.png",
      "/project/sharebby/sharebbyImage6.png",
      "/project/sharebby/sharebbyImage9.png",
      "/project/sharebby/sharebbyImage10.png",
      "/project/sharebby/sharebbyImage11.png",
      "/project/sharebby/sharebbyImage12.png",
      "/project/sharebby/sharebbyImage13.png",
      "/project/sharebby/sharebbyImage14.png",
    ],
  },
  {
    title: "My Website",
    description: "나를 소개하는 웹사이트입니다. ",
    features: [
      {
        title: "취미 공유",
        description: "나의 취미를 공유하고, 다른 사람들의 취미를 찾아보세요!",
      },
    ],
    troubleShooting: [
      {
        title: "채팅 기능",
        description:
          "채팅 기능을 구현하면서, 채팅방을 만들고, 메시지를 보내고 받는 기능을 구현했습니다. 또한, 채팅방을 나가거나, 채팅방을 만들어 채팅을 할 수 있도록 구현했습니다.",
        solution:
          "React-query의 invalidateQueries를 사용하여, 기술 퀴즈를 생성하고 바로 업데이트할 수 있도록 구현했습니다. 새로운 퀴즈가 생성된 후 해당 데이터를 최신 상태로 유지하기 위해 invalidateQueries를 통해 캐시된 데이터를 무효화하고, 서버에서 최신 데이터를 다시 가져오도록 했습니다. 이를 통해 사용자가 새로고침 없이도 최신 퀴즈 목록을 볼 수 있도록 개선하였습니다. 또한, 비동기 처리 중 발생할 수 있는 상태 관리 이슈를 방지하기 위해 optimistic update를 사용하여 사용자 경험을 향상시켰습니다.",
        learned:
          "이 문제를 해결하면서 React-query의 캐시 관리와 invalidateQueries의 역할을 깊이 이해하게 되었습니다. 특히, 서버 상태를 효율적으로 동기화하고, 사용자 경험을 향상시키기 위한 비동기 처리 전략의 중요성을 배웠습니다. 또한, optimistic update를 통해 사용자 인터페이스를 더 신속하게 업데이트하고, 비동기 작업이 실패할 경우 롤백하는 방법을 익혔습니다. 이러한 기술들을 통해 사용자 경험을 개선하는 동시에 서버와 클라이언트 간의 상태 동기화 문제를 보다 효과적으로 관리할 수 있다는 것을 깨달았습니다.",
      },
      {
        title: "채팅방 구현",
        description:
          "채팅방을 만들고, 채팅방을 나가거나, 채팅방을 만들어 채팅을 할 수 있도록 구현했습니다.",
        solution:
          "React-query의 invalidateQueries를 사용하여, 기술 퀴즈를 생성하고 바로 업데이트할 수 있도록 구현했습니다. 새로운 퀴즈가 생성된 후 해당 데이터를 최신 상태로 유지하기 위해 invalidateQueries를 통해 캐시된 데이터를 무효화하고, 서버에서 최신 데이터를 다시 가져오도록 했습니다. 이를 통해 사용자가 새로고침 없이도 최신 퀴즈 목록을 볼 수 있도록 개선하였습니다. 또한, 비동기 처리 중 발생할 수 있는 상태 관리 이슈를 방지하기 위해 optimistic update를 사용하여 사용자 경험을 향상시켰습니다.",
        learned:
          "이 문제를 해결하면서 React-query의 캐시 관리와 invalidateQueries의 역할을 깊이 이해하게 되었습니다. 특히, 서버 상태를 효율적으로 동기화하고, 사용자 경험을 향상시키기 위한 비동기 처리 전략의 중요성을 배웠습니다. 또한, optimistic update를 통해 사용자 인터페이스를 더 신속하게 업데이트하고, 비동기 작업이 실패할 경우 롤백하는 방법을 익혔습니다. 이러한 기술들을 통해 사용자 경험을 개선하는 동시에 서버와 클라이언트 간의 상태 동기화 문제를 보다 효과적으로 관리할 수 있다는 것을 깨달았습니다.",
      },
    ],
    period: "2024.09",
    people: {
      frontend: 1,
      backend: 0,
    },
    github: "https://github.com/haegu97/portfolio",
    demo: "",
    contributes: [
      {
        title: "기술 퀴즈 풀기",
        description:
          "유저들이 만든 기술 퀴즈를 불러오고, 사용자가 풀고 싶은 문제를 필터를 통해 선택할 수 있도록 구현했습니다. 사용자는 다양한 필터를 적용하여 자신에게 적합한 문제를 쉽게 찾을 수 있습니다. 문제를 푼 후에는 문제에 대한 평가를 남길 수 있는 기능도 추가하여, 문제의 품질을 개선하고 사용자 피드백을 받을 수 있도록 했습니다. 이를 통해 사용자 경험을 개선하고, 퀴즈의 질을 지속적으로 향상시키기 위한 데이터 수집이 가능해졌습니다.",
      },
      {
        title: "기술 퀴즈 생성",
        description:
          "Zod와 React Hook Form을 사용하여 유저가 기술 퀴즈를 생성할 수 있는 기능을 구현했습니다. Zod를 이용한 강력한 유효성 검사를 통해 사용자 입력을 검증하고, React Hook Form으로 효율적인 폼 관리를 실현했습니다. 퀴즈가 생성된 후에는 서버에 저장되며, 이를 통해 다른 유저들이 새로 생성된 퀴즈를 검색하고 풀 수 있게 하였습니다. 이 기능을 통해 사용자 생성 콘텐츠의 참여를 유도하고, 퀴즈 플랫폼의 다양성과 풍부함을 증가시킬 수 있었습니다.",
      },
      {
        title: "알고리즘 추천",
        description:
          "Solved.ac API를 활용하여 유저의 티어에 맞는 알고리즘 문제를 추천하는 기능을 구현했습니다. 유저의 현재 티어에 기반하여 적절한 난이도의 문제를 추천함으로써, 개인 맞춤형 학습을 지원하고 알고리즘 문제 풀이의 효율성을 높였습니다. 추천 시스템은 유저의 티어와 문제 해결 내역을 분석하여 최적의 문제를 제시하며, 이를 통해 유저가 자신의 실력을 단계적으로 향상시킬 수 있도록 도왔습니다.",
      },
    ],
    tags: [
      {
        skill: "Next.js",
        reason:
          "Next.js는 React 기반의 프레임워크로, SSR과 SSG를 지원하여 SEO 최적화와 성능 최적화에 유리합니다. 또한, TypeScript를 기본적으로 지원하고, 빠른 개발 속도와 강력한 확장성을 제공합니다. 이를 통해 프로젝트의 성능을 향상시키고, 개발 생산성을 높일 수 있었습니다.",
      },
      {
        skill: "TypeScript",
        reason:
          "TypeScript는 정적 타입을 지원하는 프로그래밍 언어로, JavaScript의 확장된 기능을 제공합니다. 타입 시스템을 통해 코드의 안정성을 높이고, 개발자의 실수를 줄일 수 있습니다. 이를 통해 코드의 가독성을 높이고, 유지보수성을 향상시킬 수 있었습니다.",
      },
      {
        skill: "Tailwind CSS",
        reason:
          "Tailwind CSS는 CSS 프레임워크로, 클래스 이름을 통해 스타일을 적용할 수 있습니다. 반응형 디자인을 쉽게 구현할 수 있고, 커스터마이징이 용이합니다. 이를 통해 디자인 시스템을 효율적으로 구축하고, 일관된 디자인을 유지할 수 있었습니다.",
      },
      {
        skill: "React Query",
        reason:
          "React Query는 데이터를 관리하고 서버와의 상호작용을 쉽게 처리할 수 있는 라이브러리입니다. 캐시와 상태 관리를 효율적으로 처리할 수 있으며, 서버와의 통신을 추상화하여 개발 생산성을 높일 수 있습니다. 이를 통해 데이터 로딩 상태를 관리하고, 성능을 최적화할 수 있었습니다.",
      },
      {
        skill: "Jotai",
        reason:
          "Jotai는 React 상태 관리 라이브러리로, Context API를 기반으로 동작합니다. 간단하고 직관적인 API를 제공하며, 불필요한 리렌더링을 방지할 수 있습니다. 이를 통해 상태 관리를 효율적으로 처리하고, 컴포넌트 간의 데이터 전달을 간소화할 수 있었습니다.",
      },
      {
        skill: "zod",
        reason:
          "Zod는 TypeScript를 위한 스키마 및 유효성 검사 라이브러리로, 안전한 데이터 처리를 지원합니다. 타입 안정성을 제공하고, 데이터의 무결성을 보장할 수 있습니다. 이를 통해 데이터의 유효성을 검증하고, 안전한 데이터 처리를 보장할 수 있었습니다.",
      },
    ],
    imageUrl: wordanalyticsImg,
    images: [],
  },
] as const;

export const skillData = [
  {
    SkillIcon: htmlIcon,
    title: "HTML5",
    description: "• 기본적인 HTML 태그를 사용할 수 있습니다.",
  },
  ,
  {
    SkillIcon: cssIcon,
    title: "CSS",
    description: "• 순수 CSS만을 이용하여 레이아웃을 할 수 있습니다.",
  },
  ,
  {
    SkillIcon: javascriptIcon,
    title: "Javacript",
    description: "• ES6+ 문법을 활용하여 코드를 작성 할 수 있습니다. ",
  },
  {
    SkillIcon: typscriptIcon,
    title: "Typescript",
    description:
      "• 타입을 활용하여 명확한 코드를 작성할 수 있으며, 제네릭, 인덱싱, 유틸리티 타입을 사용할 수 있습니다.",
  },
  {
    SkillIcon: reactIcon,
    title: "React",
    description:
      "• 리액트로 여러 프로젝트를 해봤으며, ContextAPI, useReducer, useState, useCallBack, useMemo, Suspense를 활용 할 수 있습니다.",
  },
  ,
  {
    SkillIcon: nextjsIcon,
    title: "NextJS",
    description:
      "상황별로 SSG, SSR, CSR를 활용할 수 있습니다. middleware와 API를 작성할 수 있습니다.",
  },
  ,
  {
    SkillIcon: tailwindIcon,
    title: "TailwindCSS",
    description: `• 최근 즐겨 사용하고 있습니다. 프로젝트에 적용한 경험이 있습니다.`,
  },
  {
    SkillIcon: reactqueryIcon,
    title: "React-Query",
    description:
      "API 로직 분리와 캐싱을 위해 사용해 왔으며, 프로젝트 적용 전 변경사항을 확인하며 적용해오고 있습니다.",
  },
  {
    SkillIcon: jotaiIcon,
    title: "Jotai",
    description:
      "최근 프로젝트에 전역 상태 관리를 위해 사용한 경험이 있습니다.",
  },
  ,
] as const;
