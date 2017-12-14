/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Launcher.css';

class PnoteLancher extends React.Component {
  state = {
    title: '',
    content: '',
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
    if (!content && !err) {
      console.info("jinru2")
      err = {
        content: '请输入正文',
      };
    }
    console.info("jinru3")
    console.info(dispatch)
    dispatch({
      type: 'mlauncher/launcherc',
      query: {
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
  contentChagne = (e) => {
    const v = e.target.value;
    this.setState({
      content: v,
    });
  }
  render() {
    const { title, content } = this.state;
    return (
    <div >
      <div ><input id="title" value={title} onChange={this.titleChagne} placeholder="标题" /></div>
      <div ><textarea id="content" value={content} onChange={this.contentChagne} rows="60" cols="200" placeholder="正文"></textarea></div>
      <div ><Button onClick={this.handleSubmit} >提交</Button></div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PnoteLancher);
