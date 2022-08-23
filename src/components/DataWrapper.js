import React, { Component, Fragment } from 'react';
import { inject, observer } from 'mobx-react';
import { Redirect } from 'react-router-dom';

@inject('store')
@observer
export default class DataFetcher extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store.appState;
	}

	componentDidMount() {
		this.store.fetchData();
	}

	componentWillUnmount() {
		this.store.clearItems();
	}

	render() {
		return <Fragment />;
	}
}
