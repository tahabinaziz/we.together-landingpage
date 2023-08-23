import { Link } from "react-router-dom";

const Card = ({
  imageUrl,
  title,
  heading,
  paragraph,
  showTitle,
  showHeadingAndParagraph,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className=" rounded-lg p-6">
      <img
        src={imageUrl}
        alt={title}
        className={`w-${imageWidth} h-${imageHeight} rounded-md mb-4`}
      />
      {showTitle && (
        <Link to="/">
          {" "}
          <p className="flex text-sans text-[#1E1E1E] gap-2  hover:text-primary">
            {title}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </p>
        </Link>
      )}
      {showHeadingAndParagraph && (
        <>
          <h2 className="text-xl font-semibold mb-2 text-textColor">
            {heading}
          </h2>
          <p className="text-gemeinsam">{paragraph}</p>
        </>
      )}
    </div>
  );
};

export default Card;
