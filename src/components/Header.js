import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Nav from './Nav';

@inject('store')
@observer
export default class Header extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}


	render() {
		const { specificFilm } = this.store;
		return (
			<header className='header'>
				<Nav location={this.props.location} />
				<span>{specificFilm.title}</span>
			</header>
		);
	}
}
