export default function About() {
  return (
    <>
      <hr className="bg-purple-700 text-purple-600" />
      <div className="min-h-screen bg-gradient-to-b from-[#233066] to-[#3e1f59] text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center">
        
        {/* Image - Hidden on Mobile */}
        <div className="hidden md:flex justify-center w-1/2">
          <img
            src="/assets/image4.gif"
            alt="Decorative Abstract Shape"
            className="w-80 h-80 object-cover"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-4 uppercase">
            Letter from
          </h2>
          <h2 className="font-oswald text-5xl md:text-7xl font-bold mb-6 uppercase">
            Our Leader
          </h2>
          <p className="text-lg md:text-2xl font-semibold text-gray-300 mt-6 mb-6 leading-relaxed md:w-4/5">
            Struggling with slow decision-making, scattered data, and inefficient workflows? 
            Tatweer-505 is your AI-powered assistant, transforming business operations with intelligent 
            automation and real-time insights. Seamlessly integrate, optimize processes, and unlock 
            your business’s full potential.
          </p>
          <p className="text-pink-400 font-semibold text-lg">boukhari Aimen, Chief Executive Officer</p>
        </div>
      </div>
    </>
  );
}
