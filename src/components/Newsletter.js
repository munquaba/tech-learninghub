import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Stay Updated with Our Roadmap
          </h1>
          <p className="text-gray-300 mb-4">
            Don't miss out on the latest updates and additions to our learning
            platform. Subscribe to our newsletter now!
          </p>
        </div>
        <div>
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <input
              className="p-3 rounded-md text-black bg-gray-100 mb-4 md:mb-0"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-[#00df9a] text-white rounded-md font-medium w-full md:w-auto px-6 py-3">
              Subscribe
            </button>
          </div>
          <p className="text-gray-300 text-sm mt-4">
            We respect your privacy. Read our{' '}
            <a
              href="#"
              className="text-[#00df9a] hover:underline"
            >
              Privacy Policy
            </a>{' '}
            for more information.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
