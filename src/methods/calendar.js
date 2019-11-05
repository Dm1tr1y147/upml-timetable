import API from './api'
export default {
	getEventsList () {
		let fullTimetable = API.get('weekTimetable', { crossdomain: true })
		for(let el in fullTimetable) {
			fullTimetable[el].splice(4,4)
		}
		let result = fullTimetable
		return result
	},
	getCalendarEvents () {
		return API.get('weekTimetable', { crossdomain: true })
	}
}