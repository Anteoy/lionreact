import React from 'react';
import { connect } from 'dva';
import styles from './Login.css';
// import PnoteIndex from '../components/login/Login';

function Login() {
  return (
    <div className={styles.normal}>
      {/*extra={<PnoteIndex />}*/}
      test
    </div>
  );
}

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Login);
