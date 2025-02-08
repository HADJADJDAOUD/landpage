import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS for styling

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); // State for the user's message

  const handleRequestDemo = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send email logic here (e.g., using an API or backend service)
    console.log('Email submitted:', email);
    console.log('Message submitted:', message);

    // Display a success toast notification
    toast.success('Thank you! We have received your submission.', {
      
      autoClose: 3000, // Close after 3 seconds
    });

    setIsModalOpen(false); // Close the modal
    setEmail(''); // Clear the email field
    setMessage(''); // Clear the message field
  };

  return (
    <div className="h-screen mt-16 md:mt-0 flex items-center justify-center">
      <div className="grid grid-cols-2 w-[80%] max-w-8xl gap-8">
        {/* Left Side - Text and Buttons */}
        <div className="flex font-oswald flex-col justify-center">
          <div>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-2">OPTIMIZE</h1>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-2">AUTOMATE</h1>
            <h1 className="text-5xl md:text-8xl font-bold text-white mb-4">INNOVATE</h1>
            <p className="md:text-3xl text-xl text-white mt-6 mb-6">
              AI-Powered ERP Assistant for Smarter Business
            </p>
          </div>
          <div className="flex w-full space-x-4 m-10">
            <button
              onClick={handleRequestDemo}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg md:text-lg text-sm font-medium hover:bg-blue-700 transition"
            >
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
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Request a Demo</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message"
                  rows="4"
                  required
                />
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
}