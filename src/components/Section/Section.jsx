import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Section extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <div>{this.props.children}</div>
      </div>
    );
  }
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
