import React from 'react';
import yobe from "../images/yobe.jpeg";
import hannah from "../images/hannah.jpeg";
import sismary from "../images/sis-mary.jpeg";
import anas from "../images/anas.jpeg";
import john from "../images/john.jpeg";

const Ourteam = () => {
    return <div className='w-full pb-[200px]  xl:h-[1800px]'>

        <h1 className=' text-center font-serif text-green-500 text-3xl py-3 px-3 mt-5 mb-10 uppercase italic'>our Traders rights team membr's</h1>
        <div className='grid  xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

        <div className=' flex flex-col rounded-xl gap-3 justify-center items-center p-1 hover:text-green-700 bg-gray-200 m-20 shadow-xl'>
                <img className='' src={sismary} alt="our teams image" />
                <h1 className='text-1xl text-center font-mono font-normal uppercase'>Barr. (sis). mary Uzoma </h1>
                <p className='text-center my-2 mx-4 font-light text-[20px] px-10'>Chief Coordinator
                </p>
            </div>

            <div className=' flex flex-col rounded-xl gap-3 justify-center items-center p-1 hover:text-green-700 bg-gray-200 m-20 shadow-xl'>
                <img className='' src={anas} alt="our teams image" />
                <h1 className='text-1xl font-mono font-normal uppercase'>Hon. Anas Ibrahim</h1>
                <p className='text-center my-2 mx-4 font-light  text-[20px] px-10'>Regional Coordinator
                </p>
            </div>

            <div className=' flex text-center flex-col rounded-xl gap-3 justify-center items-center p-1  hover:text-green-700 bg-gray-200 m-20 shadow-xl'>
                <img className='' src={yobe} alt="our teams image" />
                <h1 className='text-1xl font-mono font-normal uppercase '>Alhaji Abullahi bulama</h1>
                <p className='text-center my-2 mx-4 font-light text-[20px] px-10'>Regional Coordinator
                </p>
            </div>

            <div className=' flex flex-col text-center rounded-xl gap-3 justify-center items-center p-1 hover:text-green-700  bg-gray-200 m-20 shadow-xl'>
                <img className='' src={hannah} alt="our teams image" />
                <h1 className='text-1xl font-mono font-normal uppercase'> Miss Hannah Adaeze</h1>
                <p className='text-center my-2 mx-4 font-light  text-[20px] px-10'> Analyst
                </p>
            </div>


            <div className=' flex flex-col text-center rounded-xl gap-3 justify-center items-center p-1 hover:text-green-700 bg-gray-200 m-20 shadow-xl'>
                <img className='' src={john} alt="our teams image" />
            <h1 className='text-1xl font-mono font-normal uppercase'>Barr. John Ejere</h1>
                <p className='text-center my-2 mx-4 font-light text-[20px] px-10'>Legal Adviser
                </p>
            </div>

          

        </div>


    </div>;
}


export default Ourteam;