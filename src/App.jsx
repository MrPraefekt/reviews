import reviewData from "./data";
import { useState, useEffect } from "react";
import Review from "./Review";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [selectReview, setSelectReview] = useState(0);
  useEffect(() => {
    setReviews(reviewData);
    //console.log(reviewData);
  });
  const getRandomNumber = () => {
    const minCeiled = Math.ceil(0);
    const maxFloored = Math.floor(reviews.length);
    const result = Math.floor(
      Math.random() * (maxFloored - minCeiled) + minCeiled
    );
    if (selectReview === result) {
      return getRandomNumber();
    }
    console.log(result);
    return result;
  };
  const getNextReview = (nextIndex) => {
    return nextIndex % reviews.length;
    /*if (nextIndex === reviews.length) {
      return 0;
    } else if (nextIndex === -1) {
      return reviews.length - 1;
    } else {
      return nextIndex;
    }*/
  };
  return (
    <main>
      <article className="review">
        <Review {...reviews[selectReview]}></Review>
        <div className="btn-container">
          <button
            className="prev-btn"
            onClick={() => setSelectReview(getNextReview(selectReview - 1))}
          >
            <FaChevronLeft />
          </button>
          <button
            className="next-btn"
            onClick={() => setSelectReview(getNextReview(selectReview + 1))}
          >
            <FaChevronRight />
          </button>
        </div>
        <button
          className="btn btn-hipster"
          onClick={() => setSelectReview(getRandomNumber)}
        >
          Random Review
        </button>
      </article>
    </main>
  );
};
export default App;
