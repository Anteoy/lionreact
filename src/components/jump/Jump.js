/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Jump.css';
import { routerRedux } from 'dva/router';

class Jump extends React.Component {
  state = {
    title: '',
    content: '',
  };
  handleSubmit = () => {
    const { title, content } = this.state;
    const { dispatch, location } = this.props;
    dispatch(routerRedux.push('/launcher'));
  }
  handleSubmitPNote = () => {
    const { title, content } = this.state;
    const { dispatch, location } = this.props;
    dispatch(routerRedux.push('/delete'));
  }
  render() {
    const { title, content } = this.state;
    return (
    <div >
      <div className={styles.commit}><Button className={styles.b1} onClick={this.handleSubmit.bind(1)} >manage</Button><div> </div><Button onClick={this.handleSubmitPNote} >delete</Button></div>
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

export default connect(mapStateToProps)(Jump);
