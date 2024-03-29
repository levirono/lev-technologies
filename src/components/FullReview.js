// FullReview.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const FullReview = ({ device, closeModal }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModalInternal = () => setIsModalOpen(false);

  return (
    <div className="container mx-auto mt-8">
      {/* Display full details of the selected device */}
      <h2 className="text-2xl font-bold text-green">{device.name}</h2>
      {device.images.length > 0 && (
        <img
          src={device.images[0]}
          alt={`${device.name} Main Image`}
          className="mt-4 rounded-md shadow-md w-full max-w-lg mx-auto cursor-pointer"
          onClick={openModal}
        />
      )}

      {/* Render categories and other details here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(device.categories).map(([category, subcategories]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-blue-900">{category}</h3>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {typeof subcategories === 'object' ? (
                  Object.entries(subcategories).map(([subcategory, value]) => (
                    <tr key={subcategory} className="border-b border-gray-300">
                      <td className="py-2 px-4 font-medium">{subcategory}</td>
                      <td className="py-2 px-4">{value}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-2 px-4">{subcategories}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))}
      </div>

      {/* Modal for additional images */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModalInternal}
        contentLabel="Additional Images Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg outline-none w-full h-full overflow-y-auto"
      >
        <h2 className="text-2xl font-bold mb-4">{device.name} - Additional Images</h2>
        <div className="flex justify-center items-center flex-wrap">
          {device.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${device.name} Image ${index + 1}`}
              className="w-auto h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto object-cover rounded-md m-2 cursor-pointer"
              onClick={() => closeModalInternal()}
            />
          ))}
        </div>
        <button className="mt-4 p-2 bg-gray-300 rounded-md" onClick={closeModalInternal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default FullReview;
