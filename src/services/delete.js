import request from '../utils/request';
import config from '../utils/config';

export async function deletersvc(data) {
  console.log('deletersvc,.....');
  data.token = localStorage.getItem('token');
  console.log(JSON.stringify(data));
  return request(`${config.server_addr}/delete_blog`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
