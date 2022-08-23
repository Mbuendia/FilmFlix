import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import ActiveLink from './ui/ActiveLink';

@inject('store')
@observer
export default class Card extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	_getToLink(id) {
		return `/film/${id}`;
	}

	render() {
		return (
			<ActiveLink to={this._getToLink(this.props.id)} >
				<div className='card-container'>
					<img src={this.props.poster_src} placeholder={this.props.title} />
				</div>
			</ActiveLink >
		);
	}
}
