import React, { Component } from "react";

class LoadMore extends Component {

  render() {
    return (
      <div className="btn-container">
        <button className="ui secondary basic button" onClick={this.props.onLoad}>
          Load More
        </button>
      </div>
    );
  }
}

export default LoadMore;
