import request from '../utils/request';

export async function plogin(data) {
  console.log('plogin,.....');
  console.log(JSON.stringify(data));
  return request('https://anteoy.site/loginR', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
