import React from "react";

const ProcessWidget = () => {
  return (
    <div className="mt-16 px-4 md:px-32">
      <h2 className="text-center text-3xl font-extrabold text-main">
        Our Standard Working Process
      </h2>
      <p className="mt-4 text-center text-lg">
       
      </p>
      <section className="relative lg:mx-32 flex flex-col items-center justify-center gap-8  p-8">
        {/* Vertical Progress Bar */}
        <div className="absolute left-1/2  h-[90%] w-1 -translate-x-1/2 transform bg-gray-300 md:block"></div>

        {/* Step 1 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg ">
          <div className="mb-4 text-xl font-bold text-main">Step 1: Initial Consultation</div>
          <p className="">
          We start with a thorough consultation to assess your plumbing needs, listen to your concerns, and provide a detailed estimate covering the scope, costs, and timeline.
          </p>
          {/* <div className="absolute hidden md:block w-4 h-4 bg-white border-2 border-gray-500 rounded-full -left-2 top-1/2 transform -translate-y-1/2"></div> */}
        </div>

        {/* Step 2 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold text-main">
            Step 2: Expert Diagnosis
          </div>
          <p className="">
          Our skilled plumbers then conduct a comprehensive diagnosis, using advanced tools to identify and address the root cause of the problem.
          </p>
        </div>

        {/* Step 3 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold text-main">
            Step 3: Professional Service
          </div>
          <p className="">
          With precision and care, our team performs necessary repairs or installations, ensuring the job is done right the first time.
          </p>
        </div>

        {/* Step 4 */}
        <div className="relative flex flex-col items-center rounded-md bg-white p-4 text-center shadow-lg">
          <div className="mb-4 text-xl font-bold text-main">Step 4: Follow-Up Support</div>
          <p className="">
          We offer follow-up support to ensure everything works perfectly, providing routine checks and addressing any further concerns for your long-term satisfaction.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ProcessWidget;
