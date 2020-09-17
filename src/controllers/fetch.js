const Fetch = (url, method, sendData, callback, failed) => {
	if (method === "GET") {
		fetch(url, {
			method: method,
		})
		.then(res => {
			switch(Math.floor(res.status/100)) {
				case 4:
					failed();
					break;
				case 5:
					failed();
					break;
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
		})
		.catch((err)=> {
			console.log(err);
		});
	} else {
		fetch(url, {
			method: method,
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(sendData)
		})
		.then(res => {
			switch(Math.floor(res.status/100)) {
				case 4:
					failed();
					break;
				case 5:
					failed();
					break;
				default:
					break;
			} 
			return res;
		})
		.then(res => res.json())
		.then((res)=> {
			if (typeof(callback) === 'function') {
				callback(res);
			}
		})
		.catch((err)=> {
			console.log(err);
		});
	}
}

export default Fetch