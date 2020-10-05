import axios from 'axios'
axios.baseURL = 'http://127.0.0.1:3000'

export const actions = {
	async ACT_SEND_MAIL ({commit}, payload) {
		const emailProvider = {
			username: '',
    		password: ''
		}
		let emailInfo = payload
		return new Promise((resolve, reject) => {

			axios.post('/contact/sendmail', {
				emailInfo,
				emailProvider
			})
			.then(res => {
				resolve(res)
				console.log(res)
			})
			.catch(err => reject(err))
		})
	}
}