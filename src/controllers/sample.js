import Fetch from 'controllers/fetch'


/**
 * Sample API
 * @version 1
 * @category API / Sample
 * 
 * @param {object} content New post content
 */
 export const createPost = (content) => {
	return Fetch('/post', 'POST', content)
	.then(res => {
		if (res.success) return res.result;
		else return Promise.reject(res.result);
	});
}

/**
 * Sample API
 * @version 1
 * @category API / Sample
 * 
 * @param {string} postId Post identification key
 */
export const getPost = (postId) => {
	return Fetch(`/post/${postId}`, 'GET')
	.then(res => {
		if (res.success) return res.result;
		else return Promise.reject(res.result);
	});
}

/**
 * Sample API
 * @version 1
 * @category API / Sample
 * 
 * @param {string} postId Post identification key
 * @param {object} content Post content to upate
 */
export const updatePost = (postId, content) => {
	return Fetch(`/post/${postId}`, 'UPDATE', content)
	.then(res => {
		if (res.success) return res.result;
		else return Promise.reject(res.result);
	});
}

/**
 * Sample API
 * @version 1
 * @category API / Sample
 * 
 * @param {string} postId Post identification key
 */
 export const deletePost = (postId) => {
	return Fetch(`/post/${postId}`, 'DELETE')
	.then(res => {
		if (res.success) return res.result;
		else return Promise.reject(res.result);
	});
}