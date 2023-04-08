# React CRUD Project

## ✨ styled-componet naming convention

---

- S-dot 네이밍으로 사용
- 현재 어떤게 좋을지 생각 중

## 📁Folder Structure

---

```
├─ 📁src
│  ├─ 📁assets
│  │  └─ 📁fonts # 폰트 설정
│  ├─ 📁components
│  │  ├─ 📁common # 공통으로 사용하는 컴포넌트 및 스타일 관리
│  │  └─ 📁layout # 전체적인 레이아웃 관리
│  ├─ 📁data # 각종 데이터 관리
│  ├─ 📁pages
│  │  ├─ Main.styled.ts # 메인 화면 스타일
│  │  ├─ Main.tsx # 메인 화면 관리
│  │  ├─ Post.tsx # 글쓰기 화면 관리
│  │  ├─ Sign.styled.ts # 회원가입 및 로그인 화면 스타일 관리
│  │  ├─ SignIn.tsx # 로그인 화면 관리
│  │  ├─ SignUp.tsx # 회원가입 화면 관리
│  │  └─ Writing.tsx # 글쓰기 화면 관리
│  ├─ 📁styles
│  │  ├─ global-style.ts # 폰트 및 전역적으로 사용할 스타일 관리
│  │  ├─ styled.d.ts # 전역적으로 사용할 스타일 타입 관리
│  │  └─ theme.ts # 전역적으로 사용할 스타일 관리
│  └─ 📁types
│     ├─ fonts.d.ts # 폰트 타입 정의
│     └─ index.ts 전역적으로 사용하는 타입 정의
│  ├─ index.tsx # 최상위 루트
│  ├─ App.styled.ts # 전체 스타일 정의
│  ├─ App.tsx # 라우트 경로 관리

```
