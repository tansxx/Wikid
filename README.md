# 💻 Wikid

> **"이 프로젝트는 지인들의 위키를 직접 작성하고 공유하는 플랫폼입니다."**

---

### 🧑‍💻 팀원 소개 및 역할 분담

<table>
  <tr>
    <th><a href="https://github.com/tansxx">@강희정</a></th>
    <th><a href="https://github.com/prkhaeun">@박하은</a></th>
    <th><a href="https://github.com/sssson0">@손혁진</a></th>
    <th><a href="https://github.com/ShiroUsagi25">@이윤승</a></th>
    <th><a href="https://github.com/daonJeon">@전수영</a></th>
  </tr>
  <tr>
    <td><img src="https://avatars.githubusercontent.com/u/159680008?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/193223460?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/159625710?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/192941814?v=4" width="100"></td>
    <td><img src="https://avatars.githubusercontent.com/u/16948775?v=4" width="100"></td>
  </tr>
</table>

| 이름 | 담당 기능 |
|------|-----------|
| **강희정** | 내 위키 페이지, 위키 페이지(콘텐츠 있음) |
| **박하은** | 랜딩 페이지, 공통 컴포넌트, 모달 |
| **손혁진** | 회원가입, 로그인, 계정 설정 |
| **이윤승** | 게시글 상세 페이지, 게시물 관련 기능 |
| **전수영** | 위키 목록 페이지, 자유게시판 |

---

## 🔗 배포 주소

## 🚀 배포 환경
- 

## 📅 개발 기간

2025.04.22~2025.05.08

---

## 📌 주요 기능

---

### 설치 및 실행

1. 저장소 클론:
```java
git clone [저장소 URL]
cd [프로젝트 디렉토리]
```

2. 의존성 설치:
```java
npm install
```
3. 개발 서버 실행:
```java
npm run dev
```

---

## 🛠️ 기술 스택 (Tech Stack)

| 역할 | 사용 기술 |
|--|--|
| Language | ![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) |
| Framework | ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white) |
| Build Tool | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white) |
| Router | ![ReactRouter](https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white) |
| Styling | ![StyledComponents](https://img.shields.io/badge/Styled_Components-DB7093?style=flat-square&logo=styled-components&logoColor=white) |
| API | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square) |
| Auth | ![NextAuth](https://img.shields.io/badge/NextAuth.js-3B82F6?style=flat-square&logo=auth0&logoColor=white) |

<br />

## 📚 라이브러리 (Library)


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

## 📂 폴더/파일명 네이밍 컨벤션

| 대상 | 규칙 | 예시 |
|--|--|--|
| 폴더명 | 케밥케이스 (kebab-case) | components, user-profile |
| 컴포넌트 파일명 | 파스칼케이스 (PascalCase) | UserProfile.jsx |
| 스타일 파일명 | 케밥케이스 + .styles.js | user-profile.styles.js |
| 이미지/아이콘 파일명 | 케밥케이스 | logo-icon.png, profile-default.png |
| 함수명/변수명 | 카멜케이스 (camelCase) | fetchUserData, userList |
| 환경변수 | 대문자+스네이크케이스 | REACT_APP_API_URL |

---

## 🌿 브랜치 네이밍 컨벤션

| 브랜치 종류 | 네이밍 규칙 | 예시 |
|--|--|--|
| 기능 개발 | feature/{작업-설명} | feature/login-ui |
| 버그 수정 | fix/{버그-설명} | fix/login-button-bug |
| 핫픽스 | hotfix/{긴급수정-설명} | hotfix/main-build-error |
| 문서 수정 | docs/{문서-설명} | docs/readme-update |

---

### 📑 Commit Type
| 태그 | 의미 |
|--|--|
| Feat | ✨ 새로운 기능 추가 |
| Fix | 🐛 버그 수정 |
| Docs | 📚 문서 수정 |
| Style | 💄 포맷팅, 세미콜론 누락 등 |
| Refactor | 🔨 리팩토링 |
| Test | ✅ 테스트 코드 추가 |
| Chore | 🔧 설정, 빌드 변경 등 |


### 📖 Commit 예시
```
✨ Feat: 회원가입 화면 및 로직 추가

- 회원가입 화면 UI 구현
- 사용자 입력 검증 로직 추가
- API 통신 연결

```

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

---

## 🍳 PR Convention (Pull Request 규칙)

| 항목 | 설명 |
|--|--|
| Summary | 간단 변경 요약 |
| Changes | 주요 변경 요약 |
| Checklist | ✔️ 컨벤션 준수 ✔️ 테스트 ✔️ 설명 ✔️ 브랜치 확인 |
| Test Plan | 테스트 방법 및 결과 |
| Screenshots | UI 변경 시 캡처 필수 |
| Additional | 리뷰어 참고 사항 |

---

## 📲 Issue Convention

| 항목 | 설명 |
|--|--|
| Summary | 작업 요약 |
| Branch Name | `feature/{작업설명}`, `fix/{버그설명}` |
| Due Date | YYYY/MM/DD |
| References | 관련 자료 링크 |
| Checklist | 할 일 리스트 |

---

## 🖊️ Git Flow

| 브랜치명 | 설명 |
|--|--|
| main | 배포 브랜치 |
| develop | 통합 개발 브랜치 |
| feature/* | 기능 개발 브랜치 |

### 💡 작업 흐름
1. 이슈 생성
2. `develop` 최신화
3. `develop`에서 새 `feature` 브랜치 생성
4. 해당 브랜치에서 작업 진행
5. 기능별 커밋 나눠서 작성
6. 작업 완료 후 에러 체크 & push
7. PR 작성하고 코드 리뷰 요청
8. 리뷰 완료 후 develop에 머지

---

