import React from 'react'
import { div } from 'three/tsl'

export default function Home() {
  return (
    <div className="h-screen mt-16 md:mt-0 flex items-center justify-center    ">
    <div className="grid grid-cols-2 w-[80%] max-w-8xl gap-8">
      {/* Left Side - Text and Buttons */}
      <div className="flex font-oswald flex-col justify-center">
        <div>
          <h1 className="text-8xl font-bold text-white mb-2">OPTIMIZE</h1>
          <h1 className="text-8xl font-bold text-white mb-2">AUTOMATE</h1>
          <h1 className="text-8xl font-bold text-white mb-4">INNOVATE</h1>
    

          <p className="md:text-3xl  text-xl text-white mt-6 mb-6">
          AI-Powered ERP Assistant for Smarter Business

          </p>
        </div>
        <div className="flex  w-full space-x-4 m-10">
          <button className="px-6   py-3 bg-blue-600 text-white rounded-lg md:text-lg text-sm font-medium hover:bg-blue-700 transition">
            Request demo
          </button>
          <button className="px-6 py-3 bg-gray-600 text-white rounded-lg text-lg font-medium hover:bg-gray-700 transition">
            Learn more
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="flex items-center justify-center hidden md:block">
        <img 
          src="/assets/image5.gif" 
          alt="Hero" 
          className="w-full max-w-lg"
        />
      </div>
      
    </div>
    
  </div>
  )
}
