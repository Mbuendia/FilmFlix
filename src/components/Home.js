import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Card from './Card';

@inject('store')
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	_getFilmName({ name, original_name, original_title }) {
		return name || original_name || original_title;
	}

	_getPosterPath(path) {
		return `https://image.tmdb.org/t/p/w154${path}`;
	}

	render() {
		const { appState } = this.store;
		const films = appState.items;
		return (
			<div className='page home'>
				<div className='main__content'>
					{films.map((film) => (
						<Card key={film.id}
							id={film.id}
							title={this._getFilmName(film)}
							poster_src={this._getPosterPath(film.poster_path)} />
					))}
				</div>
			</div>
		);
	}
}
