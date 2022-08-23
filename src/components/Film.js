import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Film extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store.appState;
  }


  componentDidMount() {
    this._goFilm(this.props.match.params.id);
  }

  componentWillUnmount() {
    this.store.clearSpecificFilm();
  }

  _goFilm(id) {
    this.store.getFilm(id);
  }

  _getImg(size, path) {
    return path ? `https://image.tmdb.org/t/p/${size}${path}` : '';
  }

  /**
   *
   * adult: false
  backdrop_path: "/nmGWzTLMXy9x7mKd8NKPLmHtWGa.jpg"
  belongs_to_collection: {id: 544669, name: "Minions Collection", poster_path: "/yG4ZgrIinuQJGuFQfXZc1fB2UHN.jpg",…}
  budget: 85000000
  genres: [{id: 16, name: "Animation"}, {id: 12, name: "Adventure"}, {id: 35, name: "Comedy"},…]
  homepage: "https://www.minionsmovie.com/"
  id: 438148
  imdb_id: "tt5113044"
  original_language: "en"
  original_title: "Minions: The Rise of Gru"
  overview: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions."
  popularity: 4064.409
  poster_path: "/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg"
  production_companies: [{id: 33, logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png", name: "Universal Pictures",…},…]
  production_countries: [{iso_3166_1: "US", name: "United States of America"}]
  release_date: "2022-06-29"
  revenue: 790000000
  runtime: 87
  spoken_languages: [{english_name: "English", iso_639_1: "en", name: "English"}]
  status: "Released"
  tagline: "A villain will rise."
  title: "Minions: The Rise of Gru"
  video: false
  vote_average: 7.769
  vote_count: 1514
   */

  render() {
    const { specificFilm } = this.store;
    return (
      <div className='page film' style={{ backgroundImage: `url(${this._getImg('w1280', specificFilm.backdrop_path)})` }}>
        <main>
          <div className='film_container'>
            <img src={this._getImg('w342', specificFilm.poster_path)} />
            <p>{specificFilm.overview}</p>
          </div>
        </main>
      </div>
    );
  }
}
