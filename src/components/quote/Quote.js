import { quoteData } from "../../store/quote.state.js";
import "./quote.css";
function Quote() {
  let i = Math.floor(Math.random() * quoteData.length);
  return (
    <div
      className="quote-wrapper"
      style={{ backgroundImage: `url(./img/quote/${quoteData[i].bgi}.jpg)` }}
    >
      <div className="opacity"></div>
      <div className="quote">
        <h4>{quoteData[i].quote}</h4>
        <p>-{quoteData[i].author}-</p>
      </div>
    </div>
  );
}
export default Quote;
