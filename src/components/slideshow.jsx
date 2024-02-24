import React, { useState, useEffect } from "react";
import image1 from "../images/market.jpg";
import image2 from "../images/traderimg11.jpeg";
import image3 from "../images/woman.jpeg";

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3];

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Automatically switch to the next image every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="text-white bg-{} mt-[80px] "
      style={backgroundImageStyle}
    >
      <div className="max-[800px] w-full mt-[-10px] h-screen pt-[150px] md:h-screen mx-auto gap-2 text-center flex flex-col lg:h-screen">
        <p className="text-[#00df9a] font-bold p-4 uppercase text-xl m-t[-30px]">
          we are taders rights and welfare association 
        </p>
        <h2 className="text-[#00df64] font-bold p-4 uppercase text-[30px]">
         T.R.I.W.A
        </h2>
        <h1 className="md:text-4xl sm:text-3xl text-3xl font-bold md:py-6">
         Advocacy, Mediation,Training/Education <br />and Counselling of Traders
        </h1>
        <p className="md:text-2xl sm:text-4xl text-xl font-bold text-green-600">
          we are all about your rights as a traders
        </p>
        <button
          className="w-[200px] p-4 bg-[#00df9a] rounded-md font-medium my-6 mx-auto "
          onClick={nextImage}
        >
          Learn more about us
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
