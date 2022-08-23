import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store')
@observer
export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;
  }

  render() {
    return (
      <footer>
        Mail:  <a href="mailto:mbuendia89@gmail.com?Subject=Email%20from%20filmFlix">mbuendia89@gmail</a>
        Github:  <a href='https://github.com/mbuendia' target='_blank'>mbuendia</a>
      </footer>
    )
  }
}
