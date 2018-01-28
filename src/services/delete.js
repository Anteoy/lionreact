import request from '../utils/request';

export async function deletersvc(data) {
  console.log('deletersvc,.....');
  data.token = localStorage.getItem('token');
  console.log(JSON.stringify(data));
  return request('https://anteoy.site/delete_blog', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
}
