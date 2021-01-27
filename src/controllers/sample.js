import Fetch from 'controllers/fetch'

/* 
	v1
	Sample API
*/
export const userInfo = () => {
	return Fetch('/fail', 'GET')
		.then(res => {
			if (res.success) {
				return res.result;
			} else {
				return Promise.reject(res.result);
			}
		})
}