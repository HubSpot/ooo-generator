import { Component } from 'react';

class NotFoundPage extends Component {
  componentDidMount() {
    window.location.replace('/');
  }

  render() {
    return null;
  }
}

export default NotFoundPage;
