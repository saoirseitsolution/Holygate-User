import { Metadata } from 'next';
import Link from 'next/link';
import { fourNotFound } from '@/constants/images'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Error 404',
};

const NotFound = () => {
    
    return (
        <div className="relative flex  items-center justify-center overflow-hidden">
            <div className="px-6 py-16 text-center font-semibold md:py-20">
                <div className="relative mt-20">
                    <Image src={fourNotFound} alt="404" className=" mx-auto -mt-10 w-full max-w-xs object-cover md:-mt-14 md:max-w-xl" />
                    <h1 className="mt-6 text-3xl text-[#2E297A] font-semibold tracking-wide md:text-4xl">Page Not Found</h1>
                    <p className="my-5 text-2xl tracking-wide text-[#A9A9A9] ">Oops! The page are for does not exist.</p>
                    <Link href="/" className=" mx-auto w-max border p-2 px-3 border-[#2E297A] rounded-lg text-[#2E297A]  text-sm tracking-wide uppercase shadow-none">
                      Back  Home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;





