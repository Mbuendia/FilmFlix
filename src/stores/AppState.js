import { observable, action } from 'mobx';
import axios from 'axios';
import { api_key, baseURL } from '../utils/constants';

export default class AppState {
  @observable items;
  @observable specificFilm;

  constructor() {
    this.items = [];
    this.specificFilm = {};
  }

  async fetchData() {
    let results = await axios.get(
      `${baseURL}/trending/movie/week?api_key=${api_key}`
    );
    this.setData(results);
  }

  async getFilm(film_id) {
    let film = await axios.get(
      `${baseURL}/movie/${film_id}?api_key=${api_key}`
    );
    this.setFilm(film);
  }

  @action setFilm({ data }) {
    this.specificFilm = data;
  }

  @action setData({ data }) {
    this.items = data.results;
  }

  @action clearItems() {
    this.items = [];
    this.specificFilm = {};
  }

  @action clearSpecificFilm() {
    this.specificFilm = {};
  }
}
