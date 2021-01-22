import Fetch from 'controllers/fetch'

/* 
    v1
    Dummy API (example)
*/
export const userInfo = () => {
  return Fetch('/api/v1/user', 'GET')
  .then(res => {
      if (res.success) {
          return res.result;
      } else {
          return Promise.reject(res.message);
      }
  });
}