import React, { useState } from 'react';

const Services = () => {
  const [services] = useState([
    { title: 'Home Installation', description: 'Description for Home Installation.' },
    { title: 'Best Device to Buy', description: 'Description for Best Device to Buy.' },
    { title: 'Tech Queries', description: 'Description for Tech Queries.' },
    { title: 'Software and Game Installations', description: 'Description for Software and Game Installations.' },
    { title: 'Software and Game Testing', description: 'Description for Software and Game Testing.' },
    { title: 'Photography', description: 'Description for Photography.' },
    // Add more services as needed
  ]);

  const [bookingForm, setBookingForm] = useState({
    serviceName: '',
    requestDescription: '',
  });

  const handleServiceRequest = (serviceName) => {
    // Handle the service request here, e.g., send it to the backend
    // You can use the serviceName and requestDescription from the bookingForm state
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBookingForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div className="bg-gray-900 text-white p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {services.map((service, index) => (
          <div key={index} className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 rounded-lg p-6 mb-4">
            <h3 className="text-xl font-semibold mb-2 text-green-500">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            {/* Additional content for each service panel */}
          </div>
        ))}
      </div>

      {/* Booking/Request Service Form */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-gray-900 rounded-lg p-6 mt-8">
        <h3 className="text-xl font-semibold mb-4 text-green-500">Book a Service</h3>
        <form onSubmit={() => handleServiceRequest(bookingForm.serviceName)}>
          <label className="block mb-4">
            <span className="text-gray-400">Service Name:</span>
            <input
              type="text"
              name="serviceName"
              value={bookingForm.serviceName}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:border-blue-500 text-gray-200"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-400">Request Description:</span>
            <textarea
              name="requestDescription"
              value={bookingForm.requestDescription}
              onChange={handleInputChange}
              className="mt-1 p-2 w-full rounded-md border border-gray-700 bg-gray-800 focus:outline-none focus:border-blue-500 text-gray-200"
            ></textarea>
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Services;
