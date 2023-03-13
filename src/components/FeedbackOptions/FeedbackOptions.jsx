import PropTypes from 'prop-types';
import { ButtonsList } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback}) => {
  console.log(options);
  return (
    <ButtonsList>
      {Object.keys(options).map(option => (
        <button
          type="button"
          key={option}
          onClick={e => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </ButtonsList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.objectOf(PropTypes.number).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
