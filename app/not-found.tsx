import Image from 'next/image'
import Link from 'next/link'
import ContactInfo from "@/components/Content/ContactInfo.json";
 
export default function NotFound() {
  return (
    <div>
       <div className="flex h-[90vh] flex-col items-center justify-center gap-2 text-3xl dark:text-black">
          <Image src="/404.png" alt="error" width={300} height={300} />
          {} Page not found
          <button
            className={`bg-main  px-6 py-1 text-white`}
          >
            <Link href={ContactInfo?.baseUrl}>Back to home</Link>
          </button>
        </div>
    </div>
  )
}