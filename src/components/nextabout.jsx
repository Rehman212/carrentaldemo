"use client"
import Link from "next/link"
import Image from "next/image"
export default function Newabout(){
    return(
        <div className="p-6">
      <div className="lg:max-w-7xl max-w-xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="aspect-[308/213]">
            <img src="https://readymadeui.com/images/payment-img.webp" alt="Image" className="object-cover w-full h-full" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-black font-serif mb-6">Best Car Rental Company <span className="bg-[#2DA677] text-white text-[40px] "> In Pakistan</span></h2>
            <p className="text-black text-[15px] leading-6">
              Immerse yourself in creativity and unlock the power of imagination. Whether you're designing, writing, building, or exploring new ideas, this is your space to let inspiration flow freely. Break boundaries, experiment boldly, and turn your vision into reality—one creative spark at a time.
            </p>
            <ul className="list-disc text-[15px] text-black space-y-2 pl-4 mt-6">
              <li>Discover innovative ideas.</li>
              <li>Create unique projects.</li>
              <li>Collaborate with like-minded individuals.</li>
              <li>Transform your visions into reality.</li>
            </ul>
            <div className="mt-6">
              <button type="button" className="cursor-pointer px-4 py-2 bg-[#348260] rounded-full text-white text-sm font-serif">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}