import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Button} from './FeedbackOptions.styled'

export class FeedbackOptions extends Component {
  render() {
    return (
      <Button>
        {this.props.options.map(option => (
          <button
            type="button"
            key={option}
            onClick={e => this.props.onLeaveFeedback(option)}
          >
            {option}
          </button>
        ))}
      </Button>
    );
  }
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
