import React from "react";
import image from "../images/market.jpg";

const hero = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
  };

  return (
    <div className="text-white"  style={backgroundImageStyle}>
      <div className="max-[800px]  w-full mt-[-22px] h-screen pt-[150px] mx-auto gap-5 text-center flex flex-col">
        <h2 className="text-[#00df64] font-bold p-4  uppercase text-[30px]">
         T.R.I.W.A
        </h2>
        <h1 className="md:text-5xl sm:text-4xl text-4xl font-bold md:py-6">
         Advocacy, Mediation,Training/Education and Counselling of Traders
        </h1>
        <p className="md:text-2xl sm:text-4xl text-xl font-bold text-green-600">
          we are all about your rights as a traders
        </p>
        <button className="w-[200px] p-4 bg-[#00df9a] rounded-md font-medium my-6 mx-auto uppercase">
          learn more about us
        </button>
      </div>
    </div>
  );
};

export default hero;
