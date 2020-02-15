import React, { Component } from "react";

import ReactCardCarousel from "react-card-carousel";

import "./gallery.css";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="gallery_wrapper">
        <ReactCardCarousel>{this.props.cards}</ReactCardCarousel>
      </div>
    );
  }
}
export default Gallery;