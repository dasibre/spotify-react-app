import React, { Component } from 'react';

class Artist extends Component {
  render() {
    return (
      <div>
        <h1>I am an artist</h1>
        <img src={this.props.artistSplash} />
      </div>
    );
  }
}

export default Artist;
