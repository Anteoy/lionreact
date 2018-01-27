import request from '../utils/request';

export async function launcher(data) {
  console.log('launcher,.....');
  data.token = localStorage.getItem('token');
  console.log(JSON.stringify(data));
  return request(data.flag === 1 ? 'http://localhost:8080/upload' : 'http://localhost:8080/RPNCommit', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
