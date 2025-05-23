"use client";
import { Link } from "lucide-react";
import React, { useState } from "react";
import ContactInfo from "@/components/Content/ContactInfo.json";

const AreaWeServe = ({ slugs }: any) => {
  const [showAll, setShowAll] = useState(false);
  const initialCount = 30;

  const handleReadMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  return (
    <div className="mx-6 md:mx-10 flex h-fit w-auto flex-wrap gap-4 justify-center items-center mt-4">
      {slugs
        .sort()
        .slice(0, showAll ? slugs.length : initialCount)
        .map((City: any, index: number) => {
          return (
            <div className="" key={index}>
              <a
                href={`https://${City.slug}.${ContactInfo.host}`}
                className="text-center"
              >
                <button
                  type="button"
                  className="text-white bg-main hover:bg-main/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                >
                  <h3>{City.name}</h3>
                  
                </button>
              </a>
            </div>
          );
        })}
      {!showAll && slugs.length > initialCount && (
        <button
          onClick={handleReadMore}
          className="text-white bg-minor hover:bg-minor/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          View All
        </button>
      )}
      {showAll && (
        <button
          onClick={handleShowLess}
          className="text-white bg-minor hover:bg-minor/90 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default AreaWeServe;
