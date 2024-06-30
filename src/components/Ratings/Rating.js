import { FaStar } from "react-icons/fa";

/**
 * Rating component for displaying a star rating.
 *
 * @param {number} rating - The rating value.
 * @returns {JSX.Element} The rating component.
 */
const Rating = ({ rating }) => {
  const filledStars = Math.round(rating);

  return (
    <>
      {Array(filledStars)
        .fill()
        .map((_, i) => (
          <FaStar key={`filled-${i}`} className="text-yellow-500" />
        ))}
    </>
  );
};

export default Rating;
