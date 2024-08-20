import "./../styles/quote.css";

const Quote = ({ color, quote }) => {
  return (
    <>
      <p
        id="text"
        className="quote-text raleway-font text-center font-weight-bold"
        style={{ color: color }}
      >
        <i className="bi bi-quote"></i>
        {quote.text}
      </p>
      <p id="author" className="text-right" style={{ color: color }}>
        - {quote.author}
      </p>
    </>
  );
};

export default Quote;
