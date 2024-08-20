import { useDispatch } from "react-redux";
import { getColor } from "./../redux/colorSlice";
import { getQuote } from "./../redux/quoteSlice";

const Buttons = ({ color, quote }) => {
  const dispatch = useDispatch();

  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote.text)}`;
    window.open(twitterUrl, '_blank');
  };

  const generateNewQuote = () => {
    dispatch(getColor());
    dispatch(getQuote());
  };

  return (
    <>
      <div className="bg-white d-flex flex-row justify-content-between p-2">
        <button
          id="tweet-quote"
          data-mdb-ripple-init
          className="btn btn-primary border-0"
          style={{ backgroundColor: color }}
          onClick={tweetQuote}
        >
          <i className="bi bi-twitter-x"></i>
        </button>
        <button
          type="button"
          className="btn btn-sm text-white"
          style={{ backgroundColor: color }}
          onClick={generateNewQuote}
        >
          New Quote
        </button>
      </div>
    </>
  );
};

export default Buttons;
