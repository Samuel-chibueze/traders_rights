import React from "react";
import {MdSpatialAudioOff,MdOutlineGroups2} from "react-icons/md";
const Aim=()=>{
    return(
        <div className="text-green pb-[100px] bg-gray-200 w-full mt-[30px] border-b-2 border-gray-300">
            <h2 className="text-3xl text-teal-600 text-center py-5 px-7 uppercase font-serif  md:text-2xl italic">
                our aims and objectives
            </h2>
            <p className="text-center py-3 text-[20px] px-3 italic">"These are the various aims and objectives that are there in Traders Rights and Welfare Association."</p>
         <div className="grid  gap-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      
         <div className="flex flex-col gap-2 bg-gray-200 justify-center items-center py-8 px-7 w-[300px] mt-8  rounded m-auto hover:duration p-[50px] hover:text-green-700 ">
               <div className="text-5xl bg-green-200 text-green-500 p-6 rounded-[30px]">
                 <MdSpatialAudioOff className="" />
               </div>
               
                  <p className="  p-4 uppercase text-xl font-bold">Advocacy</p>
                     <p className=" font-normal italic text-[18px]"> • The TR.I.W.A (Traders Rights and Welfare Association) is deeply committed to advocacy efforts that amplify the voices of traders 
                     and safeguard their rights and interests. Through tireless advocacy, TR.I.W.A raises awareness about the unique challenges and issues that traders encounter in their daily operations. By engaging with policymakers, stakeholders, and the public, the association aims to drive positive change and influence policies and regulations that directly impact the livelihoods of traders. </p>  
                     <h1 className="text-center text-4xl mt-4 font-light">A.</h1> 
              </div>

              <div className="flex flex-col gap-2 bg-gray-200 justify-center items-center py-8 px-7 w-[300px] mt-8  rounded m-auto hover:duration p-[50px] hover:text-green-700 ">
               <div className="text-5xl bg-green-200 text-green-500 p-6 rounded-[30px]">
                 <MdSpatialAudioOff className=" " />
               </div>
               
                  <p className="  p-4 uppercase text-xl font-bold">Mediation</p>
                  <p className=" font-normal italic text-[18px]">•TR.I.W.A assumes a pivotal role in mediating conflicts and disputes that arise within the Trading environment. TRIWA uses the Alternative Dispute Resolution Mechanisms in settling disputes that arise among traders. Serving as an impartial intermediary, the association facilitates constructive dialogues and negotiations between traders and other stakeholders, including suppliers, customers, and landlords. 
</p>
                     <h1 className="text-center text-4xl mt-4 font-light">M.</h1>   
              </div>


            
              <div className="flex flex-col gap-2 bg-gray-200 justify-center items-center py-8 px-7 w-[300px]  rounded m-auto hover:duration p-[50px] hover:text-green-700 ">
               <div className="text-5xl bg-green-200 text-green-500 p-6 rounded-[30px] font-light">
                 <MdSpatialAudioOff className=" " />
               </div>
               
                  <p className="  p-4 uppercase text-xl font-bold">Education/Training</p>
                  <p className=" font-normal italic text-[18px]">TR.I.W.A brings together big and small Traders to interact
                   at our training programmes and seminars where we teach the best ways of doing business. It provides 
                   traders with an excellent opportunity to network with other profesionals and entrepreneurs
. It also provides members with membership directories which helps to increase
                     thier exposure to new markerts and potential clients 
</p>   
                     <h1 className="text-center text-4xl mt-10 font-light">E.</h1> 
              </div>

            
              <div className="flex flex-col gap-2 bg-gray-200 justify-center items-center py-8 px-7 w-[300px]  rounded m-auto hover:duration p-[50px] hover:text-green-700 ">
               <div className="text-5xl bg-green-200 text-green-500 p-6 rounded-[30px]">
                 <MdOutlineGroups2 className=" " />
               </div>
               
               <p className="  p-4 uppercase text-xl font-bold">Conunselling/collaborations</p>
               <p className=" font-normal italic text-[18px]">TR.I.W.A offers insightful consultation, encouraging trading cooperation. It strengthens strategic methods and promotes group growth by sharing expert perspectives. A healthy and active trade network is strengthened by this synergy, which enhances trading knowledge and resource optimization.
 </p>   
                     <h1 className="text-center text-4xl mt-10 font-light">C</h1> 
              </div>

          
          </div>
        </div>
    );
};

export default Aim;