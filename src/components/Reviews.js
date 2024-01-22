// Reviews.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import FullReview from './FullReview';
import deviceData from './ReviewData.json';

const Reviews = () => {
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const selectedDevice = selectedDeviceId
    ? deviceData.devices.find(device => device.id === selectedDeviceId)
    : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (deviceId) => {
    setSelectedDeviceId(deviceId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedDeviceId(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {deviceData.devices.map((device) => (
          <div key={device.id} className="mb-6 cursor-pointer" onClick={() => openModal(device.id)}>
            <h2 className="text-2xl font-bold text-green">{device.name}</h2>
            {device.images.length > 0 && (
              <img
                src={device.images[0]}
                alt={`${device.name} Main Image`}
                className="mt-4 rounded-md shadow-md w-full max-w-lg mx-auto"
              />
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Full Review Modal"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg outline-none w-full h-full overflow-y-auto"
      >
        {selectedDevice && <FullReview device={selectedDevice} />}
        <button className="mt-4 p-2 bg-gray-300 rounded-md" onClick={closeModal}>
          Close
        </button>
      </Modal>
    </div>
  );
};

export default Reviews;
