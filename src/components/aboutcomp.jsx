import React from "react";
import image from "../images/logo-justice.jpeg";
import { NavLink } from "react-router-dom";

const Aboutcomp = () => {
  return (
    <div className="w-full bg-white text-black py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4 justify-center items-center xl:mt-[300px] md:mt-[300px]" src={image} alt="/" />
        <div className="flex flex-col  gap-7 items-start">
        <h1 className="text-[#00df9a] text-3xl uppercase md:text-4xl sm:text-2xl italic">TRADERS' RIGHTS AND WELFARE ASSOCIATION (TRIWA)</h1>
        <p className="text-[25px] font-bold mb-10"> <span className="text-red-700 italics">CAC/IT/NO.128706</span> <br /> phone number: +2349168686981</p>
          <p className="text-[30px] font-bold"> <span className="text-red-700 italics">TRIWA</span> is a Non-Governmental Organization(NGO) that seeks to achieve the following:</p>
          <p className="text-[25px] font-medium ">-Protection of the rights of Traders and Apprentices.</p>
          <p className="text-[25px] font-medium ">-Easy reach by the traders on matters of interest or concern regarding justice and fairplay.</p>
          <p className="text-[25px] font-medium ">-Use of Alternative Dispute Resolution (ADR) mechanisms to address troubling issues of conflict or dispute, as we have very experienced experts whose knowledge you can benefit, to resolve your business troubles or misunderstandings.</p>
          <p className="text-[25px] font-medium ">-Conduction of trainings and seminars aimed at increasing the knowledge of the  traders.</p>
          <p className="text-[25px] font-medium ">-Education of traders about newly made laws of their state.</p>
          <p className="text-[25px] font-medium ">-Teaching traders the importance of peaceful coexistence and ethno-religious tolerance, protecting investments in both the North and South.</p>
          <p className="text-[25px] font-medium ">-We encourage proper mentoring and apprenticeship.</p>
          <button className="w-[200px] p-4 bg-black text-[#00df9a] rounded-md font-medium my-6">
            <NavLink to="/about">Learn More</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Aboutcomp;
