import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'

//import getCalendar from '../../methods/calendar'

import { Calendar as CalendarComponent } from 'react-calendar-component'
import moment from 'moment';
import 'moment/locale/ru';

import './calendar.css'

class Calendar extends React.Component {
    constructor (props) {
		super(props)
		this.state = {
            date: moment()
        }
    }
    render() {
        return(
            <CalendarComponent
                onChangeMonth={date => this.setState({ date })}
                date={this.state.date}
                onPickDate={date => console.log(date)}
            />
        )
    }
}
export default withRouter(Calendar);