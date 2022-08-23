import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import LazyRoute from 'lazy-route';

import Footer from './Footer';
import Header from './Header';

import DataFetcher from './DataWrapper';

@inject('store', 'routing')
@observer
export default class App extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	render() {
		return (
			<div className='wrapper'>
				<Header location={this.props.routing.location} />

				<Route
					exact
					path='/'
					render={props => (
						<LazyRoute {...props} component={import('./Home')} />
					)}
				/>
				<Route
					exact
					path='/film/:id'
					render={props => (
						<LazyRoute {...props} component={import('./Film')} />
					)}
				/>

				<DataFetcher />
				<Footer />
			</div>
		);
	}
}
