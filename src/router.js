import React from 'react';
import { Router, Route } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import PnoteIndex from './components/login/Login';
import PnoteLancher from './components/lancher/Lancher';

import Login from './routes/Login.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login_v0.0.1" component={Login} />
      {/* 登录页 */}
      <Route path="/" component={PnoteLancher} />
      <Route path="/test" component={PnoteIndex} />
    </Router>
  );
}

export default RouterConfig;
