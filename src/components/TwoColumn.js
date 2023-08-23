import Button from "./Button";

const TwoColumn = ({
  image,
  heading,
  paragraph,
  buttonText,
  imageOnLeft,
  showButton,
  imageHeight,
  imageWidth
}) => {
  const columnOrder = imageOnLeft ? "md:flex-row" : "md:flex-row-reverse";
  return (
    <>
      <div className={`flex flex-col ${columnOrder} bg-gray-100 gap-4 mt-8`}>
        {/* Left Column (Image) */}
        <div className="md:w-1/2 ">
          <img
            src={image}
            alt="Your Image"
            className={`${imageHeight} ${imageWidth} w-full h-auto rounded-md`}
          />
        </div>

        {/* Right Column (Text Content) */}
        <div className="md:w-1/2 p-4 flex flex-col justify-center">
          <h2 className="text-xl font-bold mb-2 text-left font-sans text-textColor md:text-2xl">
            {heading}
          </h2>
          <p className="text-gray-600 mb-4 text-left text-textColor font-sans">
            {paragraph}
          </p>
          {showButton && (
            <Button
              url={"/"}
              text={buttonText}
              className={
                "bg-secondary text-white py-2 px-4 text-left rounded-md hover:bg-primary mr-auto"
              }
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TwoColumn;
