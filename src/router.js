import React from 'react';
import { Router, Route } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import PnoteIndex from './components/login/Login';
import PnoteLauncher from './components/launcher/Launcher';
import Jump from './components/jump/Jump';
import Deleter from './components/delete/Delete';

import Login from './routes/Login.js';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/login_v0.0.1" component={Login} />
      {/* 登录页 */}
      <Route path="/" component={PnoteIndex} />
      {/* Launcher */}
      <Route path="/launcher" component={PnoteLauncher} />
      {/* jump */}
      <Route path="/jump" component={Jump} />
      {/* delete */}
      <Route path="/delete" component={Deleter} />
    </Router>
  );
}

export default RouterConfig;
