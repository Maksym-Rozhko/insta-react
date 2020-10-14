export default class instaService {
    constructor() {
        this._apiBase = 'http://localhost:3000';
    }

    getResourse = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Could not fetch ${url}; received ${res.status}`);
        }

        return await res.json();
    }

    getAllPosts = async () => {
        const res = await this.getResourse('/posts/');
        return res;
    }
}
//json-server src/posts.json запуск сервера в 2:bash