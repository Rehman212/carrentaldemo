"use client"
import Link from "next/link"
import Image from "next/image"
export default function Aboutcompany(){
    return(
        <div className="relative flex flex-col items-center max-w-screen-xl px-4 mx-auto md:flex-row sm:px-1 p-8">
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pr-10">
        <div className="text-left">
            <h2
                className="text-4xl font-extrabold leading-10 tracking-tight text-gray-800 sm:text-5xl sm:leading-none md:text-5xl font-serif">
                Best Car Rental Company 
                <span className="font-bold text-[#18C78C]"> In Pakistan</span>
                <span className="text-xl font-semibold rounded-full text-blueGray-500"> 2.0</span>
            </h2>
            <p className="max-w-md mx-auto mt-3 text-base text-black sm:text-lg md:mt-5 md:text-sm md:max-w-3xl font-serif leading-6 ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.
            <br></br>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vulputate dignissim augue, Nullam vulputate dignissim augue.


            </p>
           <div className="mt-5 sm:flex md:mt-8 gap-3">
  <div className="rounded-md shadow-lg">
    <a href=""
       className="flex items-center justify-center px-5 py-2 text-sm font-medium text-white transition-all duration-300 ease-in-out bg-gradient-to-r from-[#272926] to-[#338E68] border border-transparent rounded-lg hover:from-[#338E68] hover:to-[#272926] hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 md:px-6 md:py-2.5">
      Getting started
      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </a>
  </div>
 
</div>
        </div>
    </div>
    <div className="flex items-center py-5 md:w-1/2 md:pb-20 md:pt-10 md:pl-10">
        <div className="relative w-full p-3 rounded  md:p-8">
            <div className="rounded-lg bg-white text-black w-full">
                <img src="/assests/images/gallery-3.webp" className="w-full rounded-3xl" />
            </div>
        </div>
    </div>
</div>
    )
}