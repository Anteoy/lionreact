/* eslint-disable */
import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Launcher.css';

class PnoteLancher extends React.Component {
  constructor(props){
    super(props);

    //only once
    // this.state = {
    //   title:'',
    //   content: props,
    // }

    // components unmount
    // this.setState({
    //   content: props,
    // });

    console.log("begin constructor...")

  }

  componentDidMount() {
    console.log("begin componentDidMount...")
  }

  componentWillUpdate() {
    console.log("begin componentWillUpdate...")
    //chao guo ci shu si xun huan
    // this.setState({
    //   content:this.props,
    // })
  }

  componentDidUpdate() {
    console.log("begin componentDidUpdate...")
    //chao guo ci shu
    // this.setState({
    //   content:this.props,
    // })
    //chao guo ci shu si xun huan
    console.log(this.props)
    // var  {content  = "" }= this.props
    // console.log("debut666:"+content)
    // if (content === "") {
    //   console.log("will not update state")
    // }else{
    //   this.setState({
    //     content:content,
    //   })
    // }
  }
  componentWillReceiveProps(nextProps) {
    console.log("begin componentWillReceiveProps...")
    var  {content  = "" }= nextProps
    console.log("debut666:"+content)
    if (content === "") {
      console.log("will not update state")
    }else{
      this.setState({
        content:content,
      })
    }
  }

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

  handleSubmitGet = () => {
    const { title, content } = this.state;
    const { dispatch, location } = this.props;
    let err = null;
    if (!title && !err) {
      console.info("jinru1")
      err = {
        content: '请输入标题',
      };
    }
    var rn = dispatch({
      type: 'mlauncher/launcherget',
      query: {
        flag: 1,
        title: title,
        content: content,
        dispatch,
      },
      _pathname: location.pathname,
      // callback(data,ab) {
      //   console.log("call back...")
      //   console.log("22222:"+ JSON.stringify(data))
      //   ab.setState({
      //     content: data.data,
      //   })
      // },
    });
    console.log("11111111111111")
    console.log("ddd"+JSON.stringify(rn))
  }
  handleSubmitPNote = () => {
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
        flag: 2,
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
  getV = (e) => {
    this.setState({
      content: e,
    });
  }
  render() {
    var { title,content } = this.state;
    // can not update the value and io input
    // var  {content  = "" }= this.props
    return (
    <div >
      <div className={styles.title}><input id="title" className={styles.center} value={title} onChange={this.titleChagne} placeholder="标题" />&nbsp;&nbsp;<Button onClick={this.handleSubmitGet} >点击获取</Button></div>
      <div className={styles.content}><textarea id="content" value={content} onChange={this.contentChagne} rows="41" cols="140" placeholder="正文"></textarea></div>
      <div className={styles.commit}><Button onClick={this.handleSubmit.bind(1)} >作为博客上传</Button>&nbsp;&nbsp;<Button onClick={this.handleSubmitPNote} >作为pnote上传</Button></div>
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
  const {content} = state.mlauncher
  return {
     content
  };
}

export default connect(mapStateToProps)(PnoteLancher);
