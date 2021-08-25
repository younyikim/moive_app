// React 사용시 필요한 라이브러리를 가져오는 코드
// 1. component를 만들 때마다 가져와야하는 라이버리
import React from 'react';
// 2. 전체 React 프로젝트에서 한번만 가져오면 되는 라이브러리
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

