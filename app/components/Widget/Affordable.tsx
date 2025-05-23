import React from 'react'
import contactInfo from "@/components/Content/ContactInfo.json"
import { GrUserWorker } from 'react-icons/gr';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";

const Affordable = ({Data}:any) => {
  // console.log(Data);
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl text-center gap-10 justify-center items-center h-full">
        <div className="lg:w-[40%]">
          <h2 className="text-3xl font-bold text-gray-800">
          {Data.missionTitle}
          </h2>
          <p className="mt-4 text-gray-600">
         {Data.missionDescription}
          </p>
          <a id='cta-id' href={`tel:${contactInfo.tel}`}>
          <button id='cta-id' className="mt-8 rounded-lg bg-minor px-6 py-3 text-white transition hover:bg-main ease-in duration-700" >
            Call Now
          </button>
          </a>
        </div>
        <div className="mt-8 flex flex-col justify-center gap-6 lg:flex-row ">
          {/* Affordable */}
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md flex flex-col items-center ">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20 ">
            <GiReceiveMoney className=' text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">{Data.missionSection[0].title}</h3>
            <p className="mt-2 text-gray-600">
            {Data.missionSection[0].description}
            </p>
          </div>
          {/* Professional */}
          <div className="w-full max-w-sm rounded-lg border border-main bg-white p-6 shadow-md flex flex-col items-center">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <GrUserWorker className='text-main text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">
            {Data.missionSection[1].title}
            </h3>
            <p className="mt-2 text-gray-600">
            {Data.missionSection[1].description}
            </p>
          </div>
          {/* High Quality */}
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md flex flex-col items-center">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
            <FaRegThumbsUp className=' text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">
            {Data.missionSection[2].title}
            </h3>
            <p className="mt-2 text-gray-600">
            {Data.missionSection[2].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Affordable