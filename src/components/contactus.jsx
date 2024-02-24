import React from 'react';

function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen py-8 mb-[-37px]">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md mt-40 ">
        <h1 className="text-2xl font-semibold mb-4 ">Contact Us</h1>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="name">Name</label>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="text" id="name" name="name" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="email">Email</label>
            <input className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" type="email" id="email" name="email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-2" htmlFor="message">Message</label>
            <textarea className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500" id="message" name="message" rows="4"></textarea>
          </div>
          <button className="bg-[#00df9a] text-white py-2 px-4 rounded-md hover:bg-[#00df98d7] focus:outline-none" disabled type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
