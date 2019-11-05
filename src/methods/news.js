import API from './api'
export default {
	getNewsList () {
		return API.get('newsList', { crossdomain: true })
	}
}