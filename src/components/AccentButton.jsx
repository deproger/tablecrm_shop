import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Import PropTypes

const AccentButton = ({ text, url, className }) => {
  return (
    <>
      <Link
        to={url}
        className={`px-5 py-3 text-white bg-accent w-fit rounded font-semibold ${className}`}
      >
        {text}
      </Link>
    </>
  );
};

// Define prop types
AccentButton.propTypes = {
  text: PropTypes.string.isRequired, // text is a required string
  url: PropTypes.string.isRequired, // url is a required string
  className: PropTypes.string?.isRequired, // url is a required string
};

export default AccentButton;
