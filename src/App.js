import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom"
import './App.css'

import Navbar from './components/navbar'
import Calendar from './components/views/calendar'

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path="/" component={Calendar} />
                </Switch>
                <Navbar />
            </Router>
        );
    }
}

export default App;