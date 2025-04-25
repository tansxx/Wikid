# 💻 Wikid

> **"이 프로젝트는 지인들의 위키를 직접 작성하고 공유하는 플랫폼입니다."**

---

## 👤 팀원 소개 & 역할

| 이름 | GitHub | 주요 담당 기능 | 프로필 |
|------|--------|----------------|--------|
| **강희정** | [@tansxx](https://github.com/tansxx) | 내 위키 페이지, 콘텐츠 위키 작성 | <img src="https://avatars.githubusercontent.com/u/159680008?v=4" width="60" /> |
| **박하은** | [@prkhaeun](https://github.com/prkhaeun) | 랜딩, 공통 컴포넌트, 모달 UX | <img src="https://avatars.githubusercontent.com/u/193223460?v=4" width="60" /> |
| **손혁진** | [@sssson0](https://github.com/sssson0) | 회원 인증 (가입/로그인), 계정 설정 | <img src="https://avatars.githubusercontent.com/u/159625710?v=4" width="60" /> |
| **이윤승** | [@ShiroUsagi25](https://github.com/ShiroUsagi25) | 게시글 상세 UI, 게시글 인터랙션 | <img src="https://avatars.githubusercontent.com/u/192941814?v=4" width="60" /> |
| **전수영** | [@daonJeon](https://github.com/daonJeon) | 위키 목록 페이지, 자유게시판 | <img src="https://avatars.githubusercontent.com/u/16948775?v=4" width="60" /> |

---

## 🔗 배포 주소
- (곧 공개 예정입니다)

## 🚀 배포 환경
- 준비 중

## 🗓 개발 기간
- **2025.04.22 ~ 2025.05.08**

---

## ✨ 주요 기능 요약

---

## ⚙️ 설치 및 실행 방법

```bash
# 1. 저장소 클론
$ git clone [저장소 URL]
$ cd [프로젝트 디렉토리]

# 2. 의존성 설치
$ npm install

# 3. 개발 서버 실행
$ npm run dev
```

---

## 🛠 Tech Stack

> 본 프로젝트는 아래 기술 스택을 기반으로 구성되었습니다.

### 🔧 Environment & Build

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Webpack](https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=webpack&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

### 🎨 UI & Styling

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![StyledComponents](https://img.shields.io/badge/Styled--Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

### 🔌 API & Auth

![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-3B82F6?style=for-the-badge&logo=auth0&logoColor=white)

### 🔁 Routing & State

![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
<!-- 필요 시 상태관리 라이브러리 추가 가능 (예: Recoil, Zustand 등) -->

---

## 📂 폴더 및 파일 구조 (Folder Structure)
```bash
wikid
│
├── .github          # Github 설정
│
├── public/          # 정적 파일들을 저장
│    └── assets/     # 이미지, 아이콘 등 저장
│         ├── icons/
│         └── images/
│
├── src/
│    ├── apis/
│    │
│    ├── components/ # 재사용 가능한 UI 컴포넌트
│    │
│    ├── costants/   # 상수 값 관리
│    │
│    ├── contexts/   # React Context API 관련 파일
│    │
│    ├── hooks/      # 커스텀 훅
│    │
│    ├── pages/      # 라우트 단위 페이지 컴포넌트
│    │
│    ├── styles/     # 공통 GlolbalStyle & Theme 관리
│    │
│    └── utils/      # 유틸리티 함수 모음
│
📄 .eslintrc.json        # ESLint 설정
📄 .gitignore            # Git에서 무시할 파일 목록
📄 next.config.js        # Next.js 설정
📄 package.json          # 프로젝트 설정 및 의존성
📄 tsconfig.json         # TypeScript 설정
📄 README.md             # 프로젝트 설명 문서
```

---

## 🧾 네이밍 규칙

| 항목 | 방식 | 예시 |
|------|------|------|
| 폴더명 | kebab-case | user-profile |
| 컴포넌트 | PascalCase | WikiCard.tsx |
| 스타일 파일 | kebab-case + .styles.js | wiki-section.styles.js |
| 이미지 | kebab-case | logo-icon.png |
| 변수/함수 | camelCase | fetchWikiData |
| 환경변수 | UPPER_SNAKE_CASE | NEXT_PUBLIC_API_URL |
---

---

## 🌿 Git Branch 전략

| 브랜치명 | 목적 |
|----------|------|
| `main` | 배포 전용 브랜치 |
| `develop` | 통합 개발 브랜치 |
| `feature/*` | 기능 개발 단위 브랜치 |
| `fix/*` | 버그 수정 브랜치 |
| `docs/*` | 문서 관련 브랜치 |

---

## 💬 커밋 메시지 컨벤션

| 태그 | 의미 |
|------|------|
| Feat | ✨ 기능 추가 |
| Fix | 🐛 버그 수정 |
| Style | 💄 스타일 변경 |
| Docs | 📝 문서 변경 |
| Refactor | 🔨 리팩토링 |
| Test | ✅ 테스트 코드 |
| Chore | 🔧 기타 설정 변경 |

### 예시

```bash
✨ Feat: 위키 카드 컴포넌트 생성
- 사용자 이미지 및 소개 텍스트 구현
- 반응형 레이아웃 처리 완료
```

---

### 🌈 이모지 가이드
| 이모지 | 의미 |
|--|--|
| 🎨 | 코드 형식/구조 개선 |
| 📰 | 새 파일 추가 |
| ✨ | 새로운 기능 |
| 📝 | 사소한 변경 |
| 💄 | UI / 스타일 수정 |
| 🐎 | 성능 개선 |
| 📚 | 문서 수정 |
| 🐛 | 버그 수정 |
| 🚑 | 핫픽스 |
| 🔥 | 코드 삭제 |
| 🚜 | 구조 변경 |
| 🔨 | 리팩토링 |
| 💎 | 새 릴리즈 |
| 🔖 | 버전 태그 |
| 🚀 | 배포 |



