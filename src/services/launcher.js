import request from '../utils/request';

export async function launcher(data) {
  console.log('launcher,.....');
  data.token = localStorage.getItem('token');
  console.log(JSON.stringify(data));
  return request(data.flag === 1 ? 'https://anteoy.site/upload' : 'https://anteoy.site/RPNCommit', {
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
  return request('https://anteoy.site/get_blog', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
