import React, { Component } from "react";
import Img from 'react-image';
import '../stylesheets/Card.css';
import { Ring } from 'react-awesome-spinners';

export default class Card extends Component {
	constructor(props) {
    super(props);
    this.state = { imageLoaded: false };
  }

  handleImageLoaded() {
    this.setState({ imageLoaded: true });
  }

  renderSpinner() {
    if (this.state.imageLoaded) return null;
    return <Ring />;
  }

	render() {
    return (
      <span>
        {this.renderSpinner()}
        <Img
          className='cardImage'
          src={this.props.src} 
          onLoad={this.handleImageLoaded.bind(this)}
          alt={this.props.alt}
          ref={element => {
            this.card = element;
          }}
        />
      </span>
    )
  }
}
