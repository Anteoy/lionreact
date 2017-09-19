/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Login.css';

class PnoteIndex extends React.Component {
  state = {
    username: '',
    passwd: '',
  };

  handleSubmit = () => {
    const { username, passwd } = this.state;
    const { dispatch, location } = this.props;
    let err = null;
    if (!username && !err) {
      err = {
        content: '请输入用户名',
      };
    }
    if (!passwd && !err) {
      err = {
        content: '请输入密码',
      };
    }
    // if (err) {
    //   dispatch({
    //     type: 'toast/showToast',
    //     err: {
    //       type: 'fail',
    //       content: err.content || '请填写完整信息',
    //       duration: 1,
    //     },
    //   });
    //   return;
    // }

    // Toast.loading('正在登录中···', 0);
    console.info(username)
    console.info(passwd)
    dispatch({
      type: 'login/loginp',
      query: {
        user_name: username,
        pass_word: passwd
        // dispatch,
      },
      _pathname: location.pathname,
      // callback() {
      //   Toast.hide();
      //   dispatch(routerRedux.push('/pnote_home'));
      // },
    });
  }
  usernameChagne = (e) => {
    const v = e.target.value;
    this.setState({
      username: v,
    });
  }
  pwdChagne = (e) => {
    const v = e.target.value;
    this.setState({
      passwd: v,
    });
  }
  render() {
    const { username, passwd } = this.state;
    return (
      <div>

        <div className="top-nav">
          <ul>
            <li><a href="/" >Index</a></li>
            <li><a href="/blog.html" >Blog</a></li>
            <li><a href="/archive.html">Date</a></li>
            <li><a href="/classify.html" >Classify</a></li>
            <li><a href="/pages/about.html" >About</a></li>
            <li><a href="/pnotelogin.html" className="on-sel">Pnote</a></li>

            <li><a href="https://github.com/Anteoy/liongo">github</a></li>

          </ul>
        </div>
        <div className={styles.main} >
          <div className={styles.main_container} >
            <div className={styles.loginContent}>
              <span className={styles.firstLogin}>admin or guest 账户登录</span>
              <div >
                <input value={username} onChange={this.usernameChagne} placeholder="用户名" type="text" />
              </div>
              <div >
                <input type="text" value={passwd} onChange={this.pwdChagne} placeholder="密码" />
              </div>
              <div >
                <input type="checkbox" className={styles.loginRember} /> <span className={styles.loginRemberWord}>记住密码</span>
              </div>
              <div className={styles.loginBtn} id="commit" >
                登&nbsp录
              </div>
              <Button onClick={this.handleSubmit} type="primary">登录</Button>
            </div>
          </div>
        </div>
        <div id="footer">
          <div id="footer-inner">
            <p id="copyright">Copyright (c) 2016 - 2017 owner of copyright &nbsp;
              Powered by <a href="https://github.com/Anteoy/liongo">liongo lionreact</a>
            </p>
          </div>
        </div>

      </div>

    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PnoteIndex);
