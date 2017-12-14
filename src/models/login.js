/* eslint-disable max-len */
import { routerRedux } from 'dva/router';
// import { Toast } from 'antd-mobile';
import { plogin } from '../services/login';

export default {
  namespace: 'login',
  state: {
    token: '',
  },
  reducers: {
  },
  effects: {
    /**
     * login
     * @param query
     * @param callback
     * @param select
     * @param call
     * @param put
     */
    *loginp({ query, _pathname, callback }, { call, put }) {
      try {
        console.log('model login.js...');
        console.log(query);
        yield put({ type: 'loading', loading: true });
        const { err, data: res } = yield call(plogin, {
          ...query,
        });
        console.log(err);
        console.log(res);
        if (res.code === '200' && res.message === '登录成功') {
          console.log('开始outside dispatch ,inside is put');
          localStorage.setItem('token', res.token)
          query.dispatch(routerRedux.push('/launcher'));
        }
        // Toast.hide();
      } catch (e) {
        console.log(e);
        callback();
        // yield put({
        //   type: 'toast/showToast',
        //   err: {
        //     type: 'fail',
        //     content: `${e.toString()}`,
        //     duration: 3,
        //   },
        // });
      }
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          console.log('111111111111');
          console.log(localStorage.getItem('token'))
          return;
        }
        const isLogin = localStorage.getItem('token');
        if (!isLogin) {
          dispatch(routerRedux.push('/'));
        }
      });
    },
  },
};
