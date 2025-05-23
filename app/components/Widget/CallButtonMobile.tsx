import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ContactInfo from "@/components/Content/ContactInfo.json";

const CallButtonMobile = () => {
  return (
    <div>
      <div className=" flex -bottom-2 z-10 fixed h-20  justify-around visible md:hidden w-screen items-center bg-main">
      <Image className=' rounded-xl w-24 -mt-6 ' src="/he.png" alt="call" width={100} height={100} />
        <div className="text-center p-2 w-fit">
            <a id='cta-id' href={`tel:${ContactInfo.tel}`}><div className="text-sm sm:text-xl px-4 text-white font-bold text-center">Call Now</div>
        <div className="text-2xl w-full text-white font-bold  "> {ContactInfo.No}</div></a>
        
        </div>
        </div>
    </div>
  )
}

export default CallButtonMobile