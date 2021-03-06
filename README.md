# Simple-React-Template [![GitHub license](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/LICENSE) [![img](https://img.shields.io/github/v/release/altmshfkgudtjr/Simple-React-Template?color=%2312b886)](https://github.com/altmshfkgudtjr/Simple-React-Template/releases/tag/v1.0.2)

  **This is React-based code that can be quickly generated.**

  빠르게 리액트 환경을 구축할 수 있는 템플릿입니다.

  - **CSS in JS** : styled-components를 사용하여 간편하게 컴포넌트 별로 스타일을 적용할 수 있습니다.

  - **Redux-toolkit** : 상태관리를 효율적으로 하기 위해서 Store 구조를 사용합니다. 또한 개발속도를 향상시키기 위해서, 각 Reducer들은 Slice로 작성되었습니다.

  - **Redux-thunk** : 미들웨어로 redux-thunk를 적용하였습니다.

  - **Build**: `yarn build`를 통해서 작성한 코드들을 production mode로 빌드할 수 있습니다. 본 템플릿에서는 다음과 같은 과정을 빌드가 진행됩니다.
    - **Pre Build** : 작성한 모든 test파일들을 진행합니다. 이 때, 통과하지 못한 파일이 존재하면 빌드과정이 진행되지 않습니다.
    - **Build** : Sourcemap 파일을 제외한 빌드를 진행합니다.
    

  

  

  ## How to run?

  ```shell
  yarn install // 필요 패키지를 설치합니다.
  
  yarn start // HMR(Hot Module Replacement)이 가능한 개발 서버를 실행합니다.(기본포트:3000)
  yarn test // .test.js로 끝나는 파일을 대상으로 테스트를 진행합니다.
  yarn build // 작성한 코드를 대상으로 빌드과정을 진행합니다.
  ```

  



  ## Directory Structure

  ```shell
  Simple-React-Template
  │
  │  .env
  │  .gitingnore
  │  jsconfig.json
  │  package-lock.json
  │  yarn.lock
  │  package.json
  │
  ├─public
  │  │  index.html
  │  │  manifest.json
  │  │  robots.txt
  │  ├─css
  │  ├─favicons
  │  ├─fonts
  │  ├─icons
  │  └─images
  │
  └─src
      │  App.js
      │  index.js
      │  serviceWorker.js
      │  setupTests.js
      │  testUtils.js
      │
      ├─components
      │  ├─home
      │  │
      │  └─modal
      │      └─info
      │  └─common
      │          Snackbar.js
      │
      ├─containers
      │      Home.js
      │  └─modal
      │          index.js
      │          Info.js
      │  └─common
      │          Snackbar.js
      |          Modal.js
      │
      ├─controllers
      │      fetch.js
      │
      ├─lib
      │  └─styles
      │          animations.js
      │          media.js
      │          palette.js
      │          styles.js
      │          zIndex.js
      │  └─utils
      │  └─hooks
      │  └─svg
      |       └─index.js
      │
      ├─slices
      │  │  index.js
      │  │  modal.js
      │  │  snackbar.js
      │  │
      │  └─__test__
      │          modal.test.js
      │          snackbar.test.js
      │
      └─pages
             HomePage.js
             NotFound.js
  ```

  - **Public** : 정적 자원를 저장하는 폴더입니다. 필요한 favicons 들과 이미지들이 존재합니다.

  - [**package.json**](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/package.json) : 해당 프로젝트의 이름과 버전 및 프로젝트 정보들을 수정 및 확인할 수 있습니다. 

    이 외에도 proxy를 설정하여 개발을 진행할 때, 개발 서버를 대상을 API를 호출할 수 있습니다.
    
    ```json
"proxy": "http://localhost:5000"
    ```

  - [**jsconfig.json**](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/jsconfig.json) : 해당 프로젝트에서의 컴파일러 옵션 등을 설정할 수 있습니다.
    (현재 설정은 src를 기준으로 절대경로가 설정되었습니다. 아래 스크립트와 같이 사용할 수 있습니다.)

    ```javascript
    import Component from 'components/path/Component'
    // src/components/path/Component
    ```

  - **.env**: 해당 프로젝트 실행에 필요한 환경변수는 해당 파일에서 추가 및 수정할 수 있습니다. 

  - **components** : View를 담당하는 컴포넌트들을 저장하는 폴더입니다.

  - **containers** : View에 관련한 로직들을 담당하는 컴포넌트들을 저장하는 폴더입니다.

  - **controllers** : API들을 저장하는 폴더입니다.

  - **lib** : 프로젝트에 필요한 추가 모듈들을 저장하는 폴더입니다.

        - **hooks** : 공통 hook에 대해서 모아둔 폴더입니다.
      - **styles** : Component에서 사용하는 공통 스타일에 대해서 모아둔 폴더입니다.
      - **utils** : Component에서 사용하는 공통 로직에 대해서 모아둔 폴더입니다.
      - **svg** : 아이콘으로 사용하기 위한 svg 파일을 모아둔 폴더입니다.

  - **slices** : Reducer들을 저장하는 폴더입니다.

  - **pages** : 각 페이지를 저장하는 폴더입니다.

  - **__ test __** : (test와 __ 사이의 공백은 없습니다.) 각 컴포넌트, 모듈의 테스트 코드를 저장하는 폴더입니다.

  

  

  # Details

개발 속도를 향상시키기 위해서 필수적이라 생각하는 기능 및 파일들이 존재합니다.

 

  ## IE Redirect

Internet Explorer 브라우저일 경우에는 리다이렉트 페이지가 표시되도록 구현되어 있습니다. 만약 IE를 대상으로 구현하는 프로젝트일 경우 index.html 파일의 다음 코드를 지워주시길 바랍니다.

  ```html
// index.html

<script>
  if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
    window.location = 'microsoft-edge:' + window.location;
    setTimeout(function() { window.location = 'https://go.microsoft.com/fwlink/?linkid=2135547'; }, 0);
  }
</script>
  ```

  

  

  ## Default Modal

> 기존의 [v1.2.3](https://github.com/altmshfkgudtjr/Simple-React-Template/releases/tag/v1.2.3)에서는 modal을 보여주는 과정에서 React Component를 넘기게 되어서 직렬화가 안 되는 문제가 있었습니다. 이번 패치에서는 해당 문제를 해결해 `redux-devtool`의 시간여행 기능을 안정적으로 사용할 수 있습니다.



기본적으로 모달이 작동하는 파일이 포함되어 있습니다. 본 모달은 Redux를 사용하여 작동합니다. 
(해당 방식의 사용은 선택사항입니다.)



모달 reducer에는 기본적으로 다음과 같은 액션이 존재합니다.

- **pushModal** : 모달을 등록하는 함수입니다. 해당 액션을 통해서 여러개의 모달을 스택처럼 등록시킬 수 있으며, 순서를 유지한채로 화면에 표시됩니다. (같은 모달 컴포넌트를 2개 이상 사용할 수 없습니다.)
- **popModal** : 등록된 모달에서 가장 나중에 등록된 모달부터 스택처럼 제거할 수 있습니다.
- **deleteModal** : 모달별로 고유의 name을 이용하여 특정 모달만 제거할 수 있습니다.
- **clearModal** : 현재 등록된 모든 모달을 제거할 수 있습니다.



파일은 `containers/modal/Info.js` 이며, 해당 모달을 부르고 싶은 컴포넌트에서 해당 파일명을 dispatch하여 사용하게 됩니다.그 후, modal module에 존재하는 `pushModal` 액션을 사용하여 모달을 작동시킵니다. 각 모달은 반드시 `name`에 **Modal Component 명**을 넣어서 호출해야 합니다. 만약 name값이 존재하지 않다면 해당 모달은 정상적으로 작동하지 않을 것입니다.  아래는 모달을 호출하는 예시입니다.

```javascript
// containers/modal/Info.js

export const Info = ({ PreventModalOff, ModalOff, args }) => {
  ...
  return (
    ...
  );
}
```

```javascript
// containers/modal/index.js

export { Info } from "containers/modal/Info";
```

```javascript
// components/home/Btn.js

const Btn = () => {
  const dispatch = useDispatch();
  
  const modalOn = () => dispatch(pushModal({
    name: 'Info',
    args: { title: "Simple" }
  }));
  
  return <Button onClick={modalOn}>Simple</Button>
}
```

`containers/modal/index.js`에 등록된 모달 파일에서는 `PreventModalOff` 와 `ModalOff` 및 `args` 인자가 기본적으로 제공됩니다. `PreventModalOff` 함수는 `onMouseDown` 속성으로 모달 최상위 속성에 등록해주시길 바랍니다. `ModalOff`는 선택적 사항입니다. `args`는 모달을 호출하는 컴포넌트에서 모달에게 매개변수를 전달할 수 있습니다. 기본적으로 Background에 MouseDown 이벤트로 모달이 닫히도록 작동됩니다. 이 외에 버튼을 통해서 모달을 닫는 경우, 해당 함수를 사용해주시길 바랍니다.



  

   

## Default Snackbar

기본적으로 사용자에게 보다 나은 Alert 표시를 위해서 Snackbar 구조가 포함되어 있습니다. 본 스낵바는 Redux를 사용하여 작동합니다. (해당 방식의 사용은 선택사항입니다.)

기본적으로 스낵바 타입은 다음과 같습니다.

- **SUCCESS** : Green Color
- **WARNING** : Red Color
- **ERROR** : Orange Color
- **INFO** : BlueColor

스낵바를 호출하는 방식은 아래 예시를 참고하십시오.

```javascript
/* This file is Sample Component to call a snackbar. */

import React from 'react'
import { useDispatch } from 'react-redux'
import Button from 'components/path/Button'
import { newSnackbar } from 'modules/snackbar'

const Btn = () => {
  const dispatch = useDispatch();

  const onSnackbar = () => {
    dispatch(newSnackbar({
      type: "INFO",
      message: "테스트 문구"
    }));
  };

  return <Button onClick={onSnackbar}>Snackbar</Button>
}

export default Btn
```

   

  

  ## Default Fetch file

기본적으로 비동기 통신을 위해서 [fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)가 사용됩니다. 해당 파일에서는 API를 쉽게 사용할 수 있도록 작성되었습니다. 
(본 파일 사용유무는 선택사항입니다. 사용하지 않으면 지워주시길 바랍니다.) 

  ```javascript
  const Fetch = (url, method, sendData, callback, failed) => { ... };
  ```

  기본적으로 해당 모듈은 다음과 같은 인자를 필요로 합니다.

  - **url**< string > : Target url입니다. 예시) `/board/1/post/3`
  - **method**< string > : 기본적으로 API는 REST API 메소드를 준수하여 타입을 지정하였습니다. 만약 다른 메소드를 사용할 경우, 해당 타입을 수정할 수 있습니다. `POST`, `GET`, `DELETE`, `PUT`, `PATCH` 등이 존재합니다.
  - **sendData**< object > : HTTP 요청을 할 때, 필요한 data입니다. 기본적으로 json/application으로 보내지며, sendData는 JSON화 되어서 통신이 진행됩니다. FormData 타입도 지원합니다.
  - **callback**< function > : 통신이 완료된 후에 실행될 콜백함수입니다. 선택사항입니다.
  - **failed**< function > : 4xx 또는 5xx 에러(대표적으로 404, 502)가 발생할 경우, 실행될 함수입니다. 선택사항입니다.



**headers**값의 Accept 속성에  'application/json' 을 적용하여, Backend로부터 송신되는 API별 에러 메세지를 확인할 수 있도록 하였습니다.



해당 모듈은 **Promise** 객체를 반환합니다. 아래와 같이 사용 가능합니다.

```javascript
import Fetch from './fetch'

Promise.all([
  Fetch('/api/first', 'POST', {'key': 'value'}),
  Fetch('/api/second', 'POST', {'key': 'value'}),
  Fetch('/api/third', 'POST', {'key': 'value'})
]);

// or

Fetch('/api/first', 'GET')
.then((data) => {
   console.log(data); 
})
.catch((err) => {
    console.log(err);
});

// or

Fetch('/api/first', 'POST', {'key': 'value'}, 
(data) => {
  console.log(data);
},
(err) => {
  console.log(err);
});
```



  

## [Removed] Default Authorization (JWT)

> 해당 기능은 보일러 플레이트라는 목적에 맞게 코드에서 제거하였습니다. 대신 `Fetch`파일을 수정하여 얼마든지 추가 사용자 유효성 검증을 진행할 수 있습니다.



기본적으로 JWT Token을 받는다의 가정하에 작성되었습니다. Token을 보내는 곳은 [fetch.js](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/src/controllers/fetch.js) 파일에서 상단에 WebStorage에서 token을 가져오게 됩니다. 이 방식을 사용하려면 Client에서 받는 모든 스크립트 등 해킹에 사용될 수 있는 코딩에 사용되는 입력 및 출력 값에 대해서 검증하고 무효화시켜야 합니다. 만약 그럼에도 XSS 공격에 대해서 원천 차단하기 위해서는 WebStorage에는 민감한 정보를 저장하지 않는 것이 좋습니다. 대안으로 `HttpOnly` 와 `Secure` 속성을 적용시킨 Cookie를 사용하는 것이 있습니다. 만약 Cookie 방식으로 Authorization을 진행한다면 위 `fetch.js` 파일에서 WebStorage와 관련된 코드를 수정하면 됩니다.

```javascript
// fetch.js

const Fetch = (url, method, sendData, callback, failed) => {
	const headers = {};
    
    ...
    
    /*
		write here custom header properties.
	*/
    
    ...
}
```





  

  # Feedback & Issue

[피드백 및 이슈 제기](https://github.com/altmshfkgudtjr/Simple-React-Template/issues) 는 언제나 환영입니다. 필요한 기능이거나 불필요한 기능이라고 생각된다면, 언제든지 Issue로 남겨주시길 바랍니다.