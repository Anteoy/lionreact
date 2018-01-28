/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Delete.css';

class Deleter extends React.Component {
  state = {
    title: '',
  };
  handleSubmit = () => {
    const { title, content } = this.state;
    const { dispatch, location } = this.props;
    let err = null;
    if (!title && !err) {
      console.info("jinru1")
      err = {
        content: '请输入标题',
      };
    }
    dispatch({
      type: 'deleter/deleterrc',
      query: {
        flag: 1,
        title: title,
        content: content,
        dispatch,
      },
      _pathname: location.pathname,
      // callback() {
      //   Toast.hide();
      //   dispatch(routerRedux.push('/pnote_home'));
      // },
    });
  }
  titleChagne = (e) => {
    const v = e.target.value;
    this.setState({
      title: v,
    });
  }
  render() {
    const { title, content } = this.state;
    return (
    <div >
      <div className={styles.title}><input id="title" className={styles.center} value={title} onChange={this.titleChagne} placeholder="标题" /></div>
      <div className={styles.commit}><Button onClick={this.handleSubmit.bind(1)} >delete</Button></div>
      <div id="footer">
        <div id="footer-inner">
          <p id={styles.copyright}>Copyright (c) 2016 - 2017 owner of copyright &nbsp;
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

export default connect(mapStateToProps)(Deleter);
