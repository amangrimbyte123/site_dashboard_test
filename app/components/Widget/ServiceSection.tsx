import React from 'react'
import contactInfo from "@/components/Content/ContactInfo.json"
import { GrUserWorker } from 'react-icons/gr';
import { FaRegThumbsUp } from 'react-icons/fa';
import { GiReceiveMoney } from "react-icons/gi";

const SeviceSection = ({Data}:any) => {
  // console.log(Data);
  return (
    <div className="bg-gray-100 px-6 py-12 ">
      <div className="mx-auto flex flex-col lg:flex-row max-w-7xl text-center gap-10 justify-center items-center h-full">
        <div className="lg:w-[20%]">
          <h2 className="text-3xl font-bold text-gray-800">
          Plumbing Needs For Every Premises
          </h2>
          <p className="mt-4 text-gray-600">
         {/* {Data.missionDescription} */}
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
            <h3 className="mt-4 text-lg font-bold text-gray-800">Plumbing Maintenance Service</h3>
            <p className="mt-2 text-gray-600">
            Regular maintenance is key to preventing unexpected plumbing problems and extending the life of your system. We provide thorough plumbing maintenance services, including inspections and routine check-ups to identify and address potential issues before they become major concerns. Our proactive approach helps maintain the efficiency and reliability of your plumbing, saving you time and money in the long run.
            </p>
          </div>
          {/* Professional */}
          <div className="w-full max-w-sm rounded-lg border border-main bg-white p-6 shadow-md flex flex-col items-center">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <GrUserWorker className='text-main text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">
            Plumbing Installation Service
            </h3>
            <p className="mt-2 text-gray-600">
            Proper installation is the foundation of a reliable plumbing system. We offers expert plumbing installation services, ensuring that every component is correctly fitted and fully operational. Whether you’re renovating, building new, or upgrading existing systems, our skilled plumbers use the latest techniques and high-quality materials to ensure long-lasting performance and efficiency in your plumbing setup.
            </p>
          </div>
          {/* High Quality */}
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md flex flex-col items-center">
            {/* <div className="flex h-12 w-12 items-center justify-center rounded-full bg-minor/20">
            <FaRegThumbsUp className=' text-xl'/>
            </div> */}
            <h3 className="mt-4 text-lg font-bold text-gray-800">
            Plumbing Repair Service
            </h3>
            <p className="mt-2 text-gray-600">
            When plumbing issues arise, swift and effective repairs are crucial to avoid further damage. We specialize in comprehensive plumbing repairs for all types of systems. Our experienced team quickly diagnoses the problem and implements reliable solutions to restore your system’s functionality. From leaky pipes to complex issues, we handle repairs with precision and care, ensuring your home or business runs smoothly again.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeviceSection