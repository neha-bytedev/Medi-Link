import React from "react";

const departments = [
  { name: "Emergency Department" },
  { name: "Cardiology Department" },
  { name: "Pediatric Department" },
  { name: "Obstetrics and Gynecology Department" },
  { name: "Psychiatry Department" },
  { name: "Neurology Department" },
  { name: "Occupational Therapy Department" },
  { name: "Physical Therapy Department" },
];

export default function ProHealth() {
  return (
    <>
        <div className="bg-blue-50 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:items-center lg:justify-between">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">Get to Know ProHealth Departments</h1>
          <p className="text-gray-600 mt-4">
            At ProHealth, we offer a wide range of medical and healthcare services that are
            designed to meet your individual needs and help you achieve optimal health.
          </p>
          <div className="mt-6 inline-flex items-center bg-white shadow-lg rounded-full px-4 py-2">
            <span className="text-sm font-medium text-gray-700">Find the best doctor</span>
            <span className="ml-2 bg-blue-500 text-white px-3 py-1 rounded-full text-xs">Top Rated Hospital</span>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
              src="https://in.pinterest.com/pin/937452478678758348/"
            alt="Doctor"
            className="w-72 h-auto object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
    
    <div className="bg-blue-50 min-h-screen">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800">Get to Know ProHealth Departments</h1>
      </header>

      {/* Departments Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto p-6">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <h2 className="text-lg font-semibold text-gray-700">{dept.name}</h2>
            <p className="text-gray-500 mt-2">Short description about the department.</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-white shadow-lg rounded-lg p-10 text-center mt-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">Don’t Let Your Health Take a Backseat!</h2>
        <p className="text-gray-500 mt-4">Schedule an appointment with one of our experienced medical professionals today.</p>
        <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg text-lg">Book Now</button>
      </div>

      {/* Footer Section */}
      <footer className="mt-16 bg-gray-900 text-white py-6 text-center">
        <p>© 2025 ProHealth Medical & Healthcare Center</p>
      </footer>
    </div>

    </>
  );
}
