import { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    return (
      <>
        <div>Good:{this.props.good}</div>
        <div>Neutral:{this.props.neutral}</div>
        <div>Bad:{this.props.bad}</div>
        <div>Total:{this.props.total}</div>
        <div>Positive feedback:{this.props.positivePercentage}%</div>
      </>
    );
  }
}
Statistics.propTypes={
  good:PropTypes.number.isRequired,
  neutral:PropTypes.number.isRequired,
  bad:PropTypes.number.isRequired,
  total:PropTypes.number.isRequired,
  positivePercentage:PropTypes.number.isRequired,
}