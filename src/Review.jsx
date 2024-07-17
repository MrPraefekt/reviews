import { FaQuoteRight } from "react-icons/fa";
const Review = ({ image, job, name, text }) => {
  return (
    <>
      <div className="img-container">
        <img className="person-img" src={image} alt={name}></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
    </>
  );
};
export default Review;
