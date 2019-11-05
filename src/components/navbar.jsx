import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom';

import InsertInvitationIcon from '@material-ui/icons/InsertInvitation'
import ListAltIcon from '@material-ui/icons/ListAlt'
import NoteIcon from '@material-ui/icons/Note'
import AccountBoxIcon from '@material-ui/icons/AccountBox'

class Navbar extends React.Component {
    /*state = {
        items: [
            {id: 1, title: "Календарь", link: "calendar", icon: require("../assets/icons/calendar.svg")},
			{id: 2, title: "Список дел", link: "/agenda", icon: require("../assets/icons/list.svg")},
			{id: 3, title: "Новости", link: "/news", icon: require("../assets/icons/press.svg")},
			{id: 4, title: "Аккаунт", link: "/account", icon: require("../assets/icons/user.svg")}
        ]
	}*/
	constructor (props) {
		super(props)
		this.state = {
			pathMap: [
				'/calendar',
				'/agenda',
				'/news',
				'/accounts'
			]
		}
	}
	componentWillReceiveProps(newProps) {
		const {pathname} = newProps.location;
		const {pathMap} = this.state;
	
		const value = pathMap.indexOf(pathname);
	
		if (value > -1) {
		  	this.setState({
				value
		  	});
		}
	}
	
	  handleChange = (event, value) => {
		this.setState({ value });
	  };
	
    render ()  { 
		const {value, pathMap} = this.state;

        return ( 
            <BottomNavigation
                value={value}
                onChange={this.handleChange}
				showLabels
				className="navBar"
            >
				<BottomNavigationAction label="Календарь" icon={<InsertInvitationIcon />} component={Link} to={pathMap[0]} />
				<BottomNavigationAction label="Список дел" icon={<ListAltIcon />} component={Link} to={pathMap[1]} /> 
				<BottomNavigationAction label="Новости" icon={<NoteIcon />} component={Link} to={pathMap[2]} />
				<BottomNavigationAction label="Аккаунт" icon={<AccountBoxIcon />} component={Link} to={pathMap[3]} />
			</BottomNavigation>
        );
    }
}
 
export default withRouter(Navbar);