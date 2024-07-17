import reviewData from "./data";
import { useState, useEffect } from "react";
import Review from "./Review";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [selectReview, setSelectReview] = useState(0);
  useEffect(() => {
    setReviews(reviewData);
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
    return result;
  };
  const setNextReview = () => {
    setSelectReview((currentIndex) => {
      return (currentIndex + 1) % reviews.length;
    });
  };
  const setPrevReview = () => {
    setSelectReview((currentIndex) => {
      return (currentIndex - 1 + reviews.length) % reviews.length;
    });
  };
  return (
    <main>
      <article className="review">
        <Review {...reviews[selectReview]}></Review>
        <div className="btn-container">
          <button className="prev-btn" onClick={setNextReview}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={setPrevReview}>
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
