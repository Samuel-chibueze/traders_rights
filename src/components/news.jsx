import React from 'react';
import img1 from "../images/traderimg.jpeg";
import img2 from "../images/traderimg2.jpeg";
import img3 from "../images/traderimg8.jpeg";
import img4 from "../images/traderimg5.jpeg";
import img5 from "../images/traderimg6.jpeg";

const news = () => {
    return (<div className='h-[250vh] md:h-[170vh] sm:h-[250vh] lg:h-[120vh] bg-gray-200'>
        <div className=''>
        <h2 className="text-3xl text-teal-600 text-center py-5 px-7 uppercase font-serif  md:text-2xl italic">
                TRIWA visit to the yobe state house of assembly
            </h2>
            <p className="text-center py-5 text-[20px] px-3 italic">"members of TRIWA paid a visit to the yobe state youth leaders "</p>

       <div className='flex flex-col gap-5  justify-center items-center md:flex-row md:flex-wrap md:justify-center'>
        <img className='w-[40vh] ' src={img2} alt="" />
        <img className='w-[40vh]' src={img2} alt="" />
        <img className='w-[40vh]' src={img3} alt="" />
        <img className='w-[40vh]' src={img4} alt="" />
        <img className='w-[40vh]' src={img5} alt="" />
        </div>   
        </div>

    </div>);
}

export default news;