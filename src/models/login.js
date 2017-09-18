/* eslint-disable max-len */
import { routerRedux } from 'dva/router';
import { Toast } from 'antd-mobile';
import { plogin } from '../services/login';

export default {
  namespace: 'login',
  state: {
    token: '',
    phone: '',
    grade: '',
    stuInfoStatus: -10000,
    user: {},
    source: 1,
    orderId: '',
    backURL: '',
    payFlag: 1,
  },
  reducers: {
    setBackURL(state, { backURL = '' }) {
      if (
        backURL !== '/' &&
        backURL !== '/login' &&
        backURL !== '/RestPwd' &&
        backURL !== '/entering'
      ) {
        console.warn('回调路由: ', backURL);
        // alert('setBackURL' + '     ' + JSON.stringify({ ...state, backURL }));
        return { ...state, backURL };
      }
      return { ...state, backURL };
    },
    setStuInfoStatus(state, { stuInfoStatus }) {
      // alert('setStuInfoStatus' + '     ' + JSON.stringify( { ...state, stuInfoStatus }));
      return { ...state, stuInfoStatus };
    },
    setUser(state, { user, stuInfoStatus, orderId, source = 1, payFlag = 1 }) {
      const newUser = { ...state.user, ...user };
      let newState = { ...state, user: newUser, grade: newUser.grade_id, phone: newUser.phone, stuInfoStatus };
      if (orderId) {
        newState = { ...newState, orderId };
      }
      if (source) {
        newState = { ...newState, source };
      }
      if (payFlag) {
        newState = { ...newState, payFlag };
      }
      return newState;
    },
    init(state) {
      try {
        const newState = {
          ...state,
          token: '',
          phone: '',
          grade: '',
          user: {},
          orderId: '',
          source: 1,
          stuInfoStatus: -10000,
          payFlag: 1,
        };
        return newState;
      } catch (e) {
        return {
          ...state,
          token: '',
          phone: '',
          grade: '',
          user: {},
          orderId: '',
          source: 1,
          stuInfoStatus: -10000,
          payFlag: 1,
        };
      }
    },
  },
  effects: {
    *goBack({ pathname }, { select, put }) {
      const { backURL, query } = yield select(({ login, routing: { locationBeforeTransitions = {} } }) => ({
        backURL: login.backURL,
        query: locationBeforeTransitions.query,
      }));
      // 回调路由
      if (backURL && pathname !== backURL) {
        yield put({ type: 'setBackURL', backURL: '' });
        yield put(routerRedux.replace({
          pathname: backURL,
          query,
        }));
      } else {
        yield put({ type: 'setBackURL', backURL: '' });
      }
    },
    /**
     * login
     * @param query
     * @param callback
     * @param select
     * @param call
     * @param put
     */
    *loginp({ query, _pathname, callback }, { call, put, select }) {
      try {
        console.log('model login.js...');
        let source = 1;
        const { routeQuery } = yield select(({ routing, login }) => {
          return {
            pathname: routing.locationBeforeTransitions.pathname.pathname,
            backURL: login.backURL,
            routeQuery: routing.locationBeforeTransitions.query,
          };
        });
        if (routeQuery.region === 'region') {
          source = 2;
        }
        yield put({ type: 'loading', loading: true });
        const { err, data: res } = yield call(plogin, {
          ...query,
          source,
        });
        console.log(err);
        console.log(res);
        query.dispatch(routerRedux.push('/pnote_home'));
        Toast.hide();
      } catch (e) {
        console.log(e);
        callback();
        yield put({
          type: 'toast/showToast',
          err: {
            type: 'fail',
            content: `${e.toString()}`,
            duration: 3,
          },
        });
      }
    },
  },
  subscriptions: {
  },
};