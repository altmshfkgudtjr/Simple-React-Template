# Simple-React-Template [![GitHub license](https://camo.githubusercontent.com/890acbdcb87868b382af9a4b1fac507b9659d9bf/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c6963656e73652d4d49542d626c75652e737667)](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/LICENSE) [![img](https://img.shields.io/github/v/release/altmshfkgudtjr/Simple-React-Template?color=%2312b886)](https://github.com/altmshfkgudtjr/Simple-React-Template/releases/tag/v1.0.1)

  **This is React-based code that can be quickly generated.**

  빠르게 리액트 환경을 구축할 수 있는 템플릿입니다.

  - **CSS in JS** : styled-components를 사용하여 간편하게 컴포넌트 별로 스타일을 적용할 수 있습니다.
  - **Redux** : 상태관리를 효율적으로 하기 위해서 Store을 사용합니다. 또한 개발속도를 향상시키기 위해서, 각 Reducer들은 Ducks 구조로 작성되어 있습니다. (Ducks 구조 사용은 선택사항입니다.)

  - **Build**: `yarn build`를 통해서 작성한 코드들을 production mode로 빌드할 수 있습니다. 본 템플릿에서는 다음과 같은 과정을 빌드가 진행됩니다.

    - **Pre Build** : 작성한 모든 test파일들을 진행합니다. 이 때, 통과하지 못한 파일이 존재하면 빌드과정이 진행되지 않습니다.
    - **Build** : Sourcemap 파일을 제외한 빌드를 진행합니다.
    - **Post Build** : 배포를 위해서 빌드된 파일들을 '*사용자가 지정한 경로* '로 복사를 하게됩니다.

    위 과정 및 '*사용자가 지정한 경로* '는 `package.json`파일에서 수정할 수 있습니다.

  

  

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
  │  package-lock.json
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
      │
      ├─containers
      │  └─modal
      │          index.js
      │          info.js
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
      │
      ├─modules
      │  │  modal.js
      │  │
      │  └─__test__
      │          modal.test.js
      │
      ├─pages
      │      HomePage.js
      │      NotFound.js
      │      RedirectPage.js
      │
      └─store
              index.js
  ```

  - **Public** : 정적 자원를 저장하는 폴더입니다. 대표적으로 .html, .css, robots.txt 외에도 각종 Image 파일들이 존재합니다.

  - [**package.json**](https://github.com/altmshfkgudtjr/Simple-React-Template/blob/master/package.json) : 해당 프로젝트의 이름과 버전 및 프로젝트 정보들을 수정 및 확인할 수 있습니다. 또한 `PostBuild`과정에서 배포 폴더 경로를 수정할 수 있습니다. (*아래 스크립트 참조) 

    ```json
    "postbuild": "cp -r build/* ../backend/src/client"
    ```

    이 외에도 proxy를 설정하여 개발을 진행할 때, 개발 서버를 대상을 API를 호출할 수 있습니다.

    ```json
    "proxy": "http://localhost:5000"
    ```

  - **components** : View를 담당하는 컴포넌트들을 저장하는 폴더입니다.

  - **containers** : View와 Store간의 Action을 담당하는 컴포넌트들을 저장하는 폴더입니다.

  - **controllers** : API들을 저장하는 폴더입니다.

  - **lib** : 프로젝트에 필요한 추가 모듈들을 저장하는 폴더입니다. 이 폴더 내에는 style과 관련한 파일들이 존재합니다.

  - **modules** : Reducer들을 저장하는 폴더입니다.

  - **pages** : 각 페이지를 저장하는 폴더입니다.

  - **__ test __** : (test와 __ 사이의 공백은 없습니다.) 각 컴포넌트, 모듈의 테스트 코드를 저장하는 폴더입니다.

  

  

  # Details

  개발 속도를 향상시키기 위해서 필수적이라 생각하는 기능 및 파일들이 존재합니다.

  

  ## App.js

  이제는 잘 사용되지않는 Internet Explorer 브라우저일 경우에는 리다이렉트 페이지가 표시되도록 구현되어 있습니다. 만약 IE를 대상으로 구현하는 프로젝트일 경우 App.js 파일의 다음 코드를 지워주시길 바랍니다.

  ```javascript
  // Browsers not supported Redirect Page (IE)
  // In development mode, you cannot view the output in the IE browser.
  // But, Don't worry.In production mode, this code works fine.
  const agent = navigator.userAgent.toLowerCase();
  let isRedirect = false;
  if ((navigator.appName === 'Netscape' && agent.indexOf('trident') !== -1) || (agent.indexOf("msie") !== -1)) { 
      isRedirect = true; 
  } else {
      isRedirect = false;
  }
  ```

  

  ## Default Modal file

  기본적으로 모달이 작동하는 파일이 포함되어 있습니다. 본 모달은 Redux Store을 사용하여 작동합니다. 파일은 `containers/modal/info.js` 이며, 해당 모달을 부르고 싶은 컴포넌트에서 해당 파일을 import하여 사용하게 됩니다. 그 후, modal module에 존재하는 `showModal` 액션을 사용하여 모달을 작동시킵니다. 아래 예시를 참고하십시오.

  ```jsx
  import React from 'react'
  import { connect } from 'react-redux'
  import InfoModal from '../../containers/modal/info'
  import { showModal } from '../../modules/modal'
  
  const Btn = ({ showModal }) => {
  	const modalOn = () => showModal(InfoModal);
      
  	return <button onClick={modalOn}>모달 보기</button>
  }
  
  let mapDispatchToProps = (dispatch) => {
  	return {
  		showModal: (elem)=> dispatch(showModal(elem))
  	};
  }
  
  export default connect(undefined, mapDispatchToProps) (Btn)
  ```

  해당 모달 파일에서는 `PreventModalOff`와 `ModalOff` 인자가 기본적으로 제공됩니다. `PreventModalOff` 함수는 `onMouseDown` 속성으로 모달 최상위 속성에 등록해주시길 바랍니다. `ModalOff`는 선택적 사항입니다. 기본적으로 Background에 MouseDown 이벤트로 모달이 닫히도록 작동됩니다. 이 외에 버튼을 통해서 모달을 닫는 경우, 해당 함수를 사용해주시길 바랍니다.

  

  ## Default Fetch file

  기본적으로 비동기 통신을 위해서 [fetch API](https://developer.mozilla.org/ko/docs/Web/API/Fetch_API)가 사용됩니다. 해당 파일에서는 API를 쉽게 사용할 수 있도록 작성되었습니다. (파일 사용유무는 선택사항입니다. 사용하지 않으면 지워주시길 바랍니다.)

  ```javascript
  const Fetch = (url, method, sendData, callback, failed) => { ... };
  ```

  기본적으로 해당 모듈은 다음과 같은 인자를 필요로 합니다.

  - **url**< string > : Target url입니다. 예시) `/board/1/post/3`
  - **method**< string > : HTTP 요청 메서드를 인자로 받습니다. 통신 메소드명은 대문자, 소문자 상관없습니다.
     `POST`, `GET`,  `DELETE`, `PUT`, `PATCH` 등이 존재합니다.
  - **sendData**< Object: dictionary > : HTTP 요청을 할 때, 필요한 data입니다. 기본적으로 json/application으로 보내지며, sendData는 JSON화 되어서 통신이 진행됩니다. 본 파일에는 FormData를 사용한 파일 전송은 구현되어있지 않습니다.
  - **callback**< function > : 통신이 완료된 후에 실행될 콜백함수입니다. 선택사항입니다.
  - **failed**< function > : 4xx 또는 5xx 에러(대표적으로 404, 502)가 발생할 경우, 실행될 함수입니다. 마찬가지로 선택사항입니다.

  

  

  # Feedback & Issue

  [피드백 및 이슈 제기](https://github.com/altmshfkgudtjr/Simple-React-Template/issues) 는 언제나 환영입니다. 필요한 기능이거나 불필요한 기능이라고 생각된다면, 언제든지 Issue로 남겨주시길 바랍니다!

  + 현재 Typescript 환경은 적용되어 있지 않습니다. 추후 추가 예정입니다.
