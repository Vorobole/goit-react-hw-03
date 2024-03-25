import css from "./Options.module.css";
const Options = ({ updateFeedback, total, updateTotalFeedback }) => {
  return (
    <div>
      <button className={css.btn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.btn} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.btn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.btn} onClick={() => updateTotalFeedback()}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
