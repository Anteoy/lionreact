import request from '../utils/request';
import config from '../utils/config';

export async function launcher(data) {
  console.log('launcher,.....');
  data.token = localStorage.getItem('token');
  console.log(JSON.stringify(data));
  return request(data.flag === 1 ? `${config.server_addr}/upload` : `${config.server_addr}/RPNCommit`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}

export async function getsvc(data) {
  data.token = localStorage.getItem('token');
  console.log(JSON.stringify(data));
  return request(data.flag === 1 ? `${config.server_addr}/get_blog` : `${config.server_addr}/get_pnote`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
