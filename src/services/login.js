import request from '../utils/request';

export async function plogin(data) {
  console.log('plogin,.....');
  console.log(JSON.stringify(data));
  return request('http://localhost:8080/loginR', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
