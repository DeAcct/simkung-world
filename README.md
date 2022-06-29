# simkung-world 심쿵월드

[![Netlify Status](https://api.netlify.com/api/v1/badges/ce212f31-aade-431f-bdd7-5716bd510548/deploy-status)](https://app.netlify.com/sites/neon-beignet-25f151/deploys)

끌리는 대로 만들고, 모두가 참여하는 열린 콘텐츠! 이상형 월드컵!

좋아요, 최근 한 월드컵, 월드컵 진행 상황 중간저장 등 사용하면서 있었으면 했던 기능을 추가할 것이다.

## 스택

vite + typescript + vue3(composition API) + jsx + scss

### 스택 선택 이유

리액트 배우다가 jsx 까지만 하고 그만둔 기억을 되살렸다.

vue는 이미 어느정도 할 줄 안다. 

html 작성하다가 style 작성하다가... 정말 마우스 휠을 가만히 둘 수 없는 불편함 때문에 jsx를 도입하게 되었다.

vue 용 styled-components가 있다면 쓰고싶었다.
그런데 타입스크립트를 지원하지 않아 어쩔 수 없이 scss로 타협했다.

vite는 어원 그대로 정말 빌드 속도가 빨라서 선택했다. 
esbuild를 사용하는 거라서 구형 브라우저에서는 작동하지 않는다고 들었다.
하지만 최근 익스플로러가 지원이 중단되었기 때문에 거리낌이 없었다.

