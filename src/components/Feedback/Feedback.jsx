const Feedback = ({ feedback, total, positiveStatistics }) => {
  return (
    <div>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
        <li>Total: {total}</li>
        <li>Positive: {positiveStatistics} %</li>
      </ul>
    </div>
  );
};

export default Feedback;
