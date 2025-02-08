export default function Services() {
  return (
    <>
      <hr className="bg-purple-700 text-purple-600" />
      <div className="bg-gradient-to-b from-[#3e1f59] to-[#233066] h-screen text-white py-12 px-6">
        <div className="container mx-auto text-center">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-oswald">
            VISION AND MISSION
          </h1>
          <h1 className="text-5xl md:text-7xl font-bold mb-12 font-oswald">
            STATEMENTS
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Our Vision */}
            <div className="border border-purple-500 p-6 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d73cbe]">
                OUR VISION
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                We envision a future where Algerian businesses harness the power
                of AI-driven automation to compete on a global scale. AllSuiteX
                strives to be the leading AI-powered business assistant, setting
                new standards for operational excellence and digital
                transformation.
              </p>
            </div>

            {/* Our Mission */}
            <div className="border border-purple-500 p-6 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-[#d73cbe]">
                OUR MISSION
              </h2>
              <p className="text-lg md:text-xl leading-relaxed">
                At AllSuiteX, our mission is to empower businesses with
                intelligent AI solutions that streamline operations, improve
                efficiency, and drive sustainable growth. We aim to bridge the
                gap between data and decision-making, enabling businesses to
                operate smarter and scale faster...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
