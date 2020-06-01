import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps  = {
    numberWords: ["one", "two", "three", "four", "five", "six"], 
    val: 5 
  }

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }
  
  render() {
    const {numberWords, locked, val, disabled, rolling} = this.props
    const diceIdx = numberWords[val - 1];
    let classes = ` Die fas fa-dice-${diceIdx} fa-5x `;
    if(locked) classes += "Die-locked";
    if(rolling) classes += "Die-rolling"
    return <i className={classes} onClick={this.handleClick} diabled={disabled} />;
  }
}

export default Die;
