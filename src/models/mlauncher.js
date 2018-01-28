/* eslint-disable max-len */
import { routerRedux } from 'dva/router';
// import { Toast } from 'antd-mobile';
import { launcher,getsvc } from '../services/launcher';

export default {
  namespace: 'mlauncher',
  state: {
    title: '',
    content: '',
  },
  reducers: {
    getRs(state, { payload: { content } }) {
      return { ...state, content };
    },
  },
  effects: {
    /**
     * launcherc
     * @param query
     * @param callback
     * @param select
     * @param call
     * @param put
     */
    *launcherc({ query, _pathname, callback }, { call, put }) {
      try {
        console.info('jinru4')
        console.log('model launcherc.js...');
        console.log(query);
        yield put({ type: 'loading', loading: true });
        const { err, data: res } = yield call(launcher, {
          ...query,
        });
        console.log(err);
        console.log(res);
        if (res.code === '200' && res.message === '上传成功') {
            alert('上传成功');
        }else{
          alert(JSON.stringify(res))
        }
        // Toast.hide();
      } catch (e) {
        console.log(e);
        callback();
      }
    },
    *launcherget({ query, _pathname, callback }, { call, put }) {
      try {
        yield put({ type: 'loading', loading: true });
        const { err, data: res } = yield call(getsvc, {
          ...query,
        });
        console.log(err);
        console.log(res);
        if (res.code === '200' && res.message === '获取成功') {
          alert('获取成功');
          const tmp = JSON.stringify(res)
          console.log("333333:"+ tmp)
          yield put({ type: 'getRs', payload: { content: res.data } })
          // callback(res, query.b)
          return res;
        }else{
          alert(JSON.stringify(res))
        }
        // Toast.hide();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
