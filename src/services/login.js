import request from '../utils/request';
// import { server_addr } from '../utils/config';
import config from '../utils/config';

export async function plogin(data) {
  console.log('plogin,.....');
  console.log(JSON.stringify(data));
  console.log(`debug....: ${config.server_addr}`);
  return request(`${config.server_addr}/loginR`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
