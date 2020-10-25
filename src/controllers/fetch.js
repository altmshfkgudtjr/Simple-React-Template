const Fetch = (url, method, sendData, callback, failed) => {
	/* Auto Authroization */
	const token = localStorage.getItem('tk');
  let authorization;
  if (token === null || token === undefined || token === 'undefined') {
      authorization = {};
  } else {
      authorization = {'Authorization': "Bearer " + token};
  }

   /* init request form */
  let request = null;
  if (method === 'GET') {
  	request = {
  		method: 'GET',
  		headers: authorization
  	};
  } else {
  	request = {
  		method: method,
  		headers: Object.assign(authorization, {
				'Content-Type': 'application/json'
			}),
			body: JSON.stringify(sendData)
  	}
  }

	return fetch(url, request)
	.then(res => {
		switch(Math.floor(res.status/100)) {
			case 4:
				return Promise.reject({
					status: res.status,
					res: res
				});
			case 5:
				return Promise.reject({
					status: res.status,
					res: res
				});
			default:
				break;
		}
		return res;
	})
	.then(res => res.json())
	.then((res) => {
		if (typeof(callback) === 'function') {
			callback(res);
		}
		return res;
	})
	.catch((err) => {
		if (typeof(failed) === 'function') {
			failed(err);
		}
		if (!err || !(err.res)) {
			return err;
		}
		if (err.status === 422 || err.status === 401) {
			alert("잘못된 접근입니다. 다시 로그인해주세요.");
			localStorage.removeItem('tk');
			window.location.reload();
		}
		return err;
	});
}

export default Fetch