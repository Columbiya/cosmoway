import { makeAutoObservable } from 'mobx'
import { axios } from '../http/http'

class NewsStore {
    _news = []

    constructor() {
        makeAutoObservable(this)
    }

    get news() {
        return this._news
    }

    set news(value) {
        this._news = value
    }

    async getNews() {
        const response = await axios.get('/news?page=1&limit=4')
        this.news = response.data.rows
        return this.news
    }
}

export default new NewsStore()