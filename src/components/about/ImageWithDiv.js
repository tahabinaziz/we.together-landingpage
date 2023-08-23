import React from 'react';

const ImageAndDivComponent = ({ imageSrc,  imageOnTop,divContent }) => {
  const flexDirectionClass = imageOnTop ? 'flex-col' : 'flex-col-reverse';

  return (
    // <div className={`flex ${flexDirectionClass} items-center`}>
    //   {imageOnTop && (
    //     <img src={imageSrc} alt="Image" className="w-80 h-44" />
    //   )}
    //   <div className={!imageOnTop ? `h-6 w-80 md:h-20 spacing-y-4 bg-secondary rounded`:`h-6 md:h-20 spacing-y-4 bg-primary rounded`}></div>
    //   {!imageOnTop && (
    //     <img src={imageSrc} alt="Image" className="w-80 h-54" />
    //   )}
    // </div>


<div className={`flex ${flexDirectionClass} gap-4 items-center`}>
   
<div className={`flex  md: -mt-4 `}>{divContent}</div>
<img src={imageSrc} alt="Image" className="w-80 h-48" />

</div>
  );
};

export default ImageAndDivComponent;
