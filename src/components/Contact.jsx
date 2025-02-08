export default function Contact() {
    return (
      <>
        <hr className="bg-purple-700 text-purple-600" />
        <div className="h-screen flex items-center justify-center bg-gradient-to-b from-[#3e1f59] to-[#233066] p-6">
          <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
            {/* Contact Form */}
            <div className="text-white w-full md:w-1/2 p-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center md:text-left">
                CONTACT INFORMATION
              </h1>
              <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                  <input
                    key={index}
                    type="text"
                    defaultValue={detail}
                    className="border-2 border-gray-300 text-lg md:text-xl p-4 rounded-lg w-full text-black bg-white"
                  />
                ))}
              </div>
            </div>
  
            {/* Image (hidden on mobile) */}
            <div className="w-full md:w-1/2 flex justify-center p-6">
              <img
                src="/assets/image3.svg"
                alt="Abstract 3D Design"
                className="hidden md:block w-full max-w-md md:max-w-lg"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
  
  const contactDetails = [
    "+123-456-7890",
    "hello@reallygreatsite.com",
    "123 Anywhere St., Any City",
    "www.reallygreatsite.com",
  ];
  