import "./App.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Buttons from "./components/Buttons";
import Quote from "./components/Quote";

function App() {
  const color = useSelector((state) => state.color.value);
  const quote = useSelector((state) => state.quote.value);

  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0];
    bodyElement.style.backgroundColor = color;
  }, [color]);

  return (
    <div
      className="d-flex flex-column align-items-center"
      style={{ backgroundColor: color }}
    >
      <div id="quote-box" className="px-5 py-4 bg-white rounded">
        <Quote color={color} quote={quote} />
        <Buttons color={color} quote={quote} />
      </div>
      <div
        id="footer"
        className="text-white text-center p-2"
        style={{ backgroundColor: color }}
      >
        by Maggie
      </div>
    </div>
  );
}

export default App;
