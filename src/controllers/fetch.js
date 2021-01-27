const Fetch = (url, method, sendData, callback, failed) => {

	/* JWT Auto Authroization using WebStorage */
	/* If you do not use the webStorage method and use the cookie method, please modify this part. */
	const token = localStorage.getItem('tk'); // or sessionStorage
	let authorization;

	if (token === null || token === undefined || token === 'undefined') {
		authorization = {};
	} else {
		authorization = { 'Authorization': "Bearer " + token };
	}

	/* init request form */
	const isFormData = !!sendData && checkFormData(sendData)
		? true
		: false;
	let request = null;

	if (method === 'GET') {
		request = {
			method: 'GET',
			headers: authorization
		};
	} else {
		request = {
			method: method,
			headers: isFormData
				? {}
				: Object.assign(authorization, {
					'Content-Type': 'application/json',
					'Accept': 'application/json'
				}),
			body: isFormData
				? sendData
				: JSON.stringify(sendData)
		}
	}

	return fetch(url, request)
		.then(res => {
			/* Apply common logic for each status code */
			switch (Math.floor(res.status / 100)) {
				case 4:
					// some code
					return Promise.reject(res.json());
				case 5:
					// some code
					return Promise.reject(res.json());
				default:
					break
			}

			return res.json();
		})
		.then((res) => {
			if (typeof (callback) === 'function') {
				callback(res);
			}

			return res;
		})
		.catch((err) => {
			if (typeof (failed) === 'function') {
				failed(err);
			}

			return err;
			/* or use the method below. */
			// return Promise.reject(err);
		});
}

const checkFormData = (data) => data.constructor.toString().slice(9).startsWith('FormData');

export default Fetch