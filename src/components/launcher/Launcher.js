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

  render() {
    return (
    <div >
      <div ><input id="title" placeholder="标题" /></div>
      <div ><textarea id="content" rows="60" cols="200" placeholder="正文"></textarea></div>
      <div ><button >提交</button></div>
    </div>
    );
  }
}
function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(PnoteLancher);
