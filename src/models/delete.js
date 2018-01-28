/* eslint-disable max-len */
import { routerRedux } from 'dva/router';
import { deletersvc } from '../services/delete';

export default {
  namespace: 'deleter',
  state: {
    token: '',
  },
  reducers: {
  },
  effects: {
    /**
     * deleterrc
     * @param query
     * @param callback
     * @param select
     * @param call
     * @param put
     */
    *deleterrc({ query, _pathname, callback }, { call, put }) {
      try {
        console.info('jinru4')
        console.log('model deleterrc.js...');
        console.log(query);
        yield put({ type: 'loading', loading: true });
        const { err, data: res } = yield call(deletersvc, {
          ...query,
        });
        console.log(err);
        console.log(res);
        if (res.code === '200' && res.message === '上传成功') {
            alert('delete success');
        }else{
          alert(JSON.stringify(res))
        }
        // Toast.hide();
      } catch (e) {
        console.log(e);
        callback();
      }
    },
  },
};
