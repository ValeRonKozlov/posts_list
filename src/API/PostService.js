import axios from 'axios';

export default class PostService {
	// получаем все посты
	static async getAll(limit, page) {
			const responce = await axios.get('https://jsonplaceholder.typicode.com/posts', {
				params: {
          _limit: limit,
          _page: page
        }
			});
			return responce;
	}
	// получаем пост по id
	static async getPostById(id) {
			const responce = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
			return responce;
	}
	// получаем комментарии по id
	static async getCommentById(id) {
			const responce = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
			return responce;
	}
}