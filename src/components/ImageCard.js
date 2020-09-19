import React, { Component } from "react";

export default class ImageCard extends Component {
  state = { span: 0 };
  imageRef = React.createRef();

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const span = Math.ceil(height / 10);
    this.setState({ span });
  };
  render() {
    const { description, urls } = this.props.image;
    return (
      <div style={{ gridRowEnd: `span ${this.state.span}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
      </div>
    );
  }
}
