import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FullReview = () => {
  const [device, setDevice] = useState(null);
  const { deviceId } = useParams();
  console.log(deviceId);

  useEffect(() => {
    const fetchDevice = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/reviews/${deviceId}`);
        // console.log(response);
        // const response = await fetch(`http://localhost:5000/api/reviews/${deviceId}`);
        const data = await response.json();
        console.log('Fetched Device Data:', data);
        setDevice(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDevice();
  }, [deviceId]);

  if (!device) {
    return <div>Loading...</div>; // You might want to show a loading state while fetching data
  }
console.log(device?.images[0]);
  return (
    <div className="container mx-auto mt-8">
    <h1>Full Review</h1>
      {/* Display full details of the selected device */}
      <h2 className="text-2xl font-bold text-green-800">{device.name}</h2>
      {device.images.length > 0 && (
  (() => {
    const imageUrl = `/${device.images[0]}`; // Adjust as needed
    console.log('Image URL:', imageUrl);

    return (
      <img
        src={imageUrl}
        alt={`${device.name} Main Image`}
        className="mt-4 rounded-md shadow-md w-full max-w-lg mx-auto cursor-pointer"
      />
    );
  })()
)}


      {/* Render categories and other details here */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(device.categories).map(([category, subcategories]) => (
          <div key={category} className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-green-800">{category}</h3>
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

      {/* Additional Material Input */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-green-800">Material</h3>
        <input
          type="text"
          value={device.categories.Material}
          className="mt-1 p-2 w-full border rounded-md"
          readOnly
        />
      </div>

      {/* Additional Images */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-green-800">Additional Images</h3>
        <div className="flex justify-center items-center flex-wrap">
        {device.images.map((image, index) => {
  const imageUrl = `/${image}`; // Adjust as needed
  console.log('Image URL:', imageUrl);

  return (
    <img
      key={index}
      src={imageUrl}
      alt={`${device.name} Image ${index + 1}`}
      className="w-auto h-auto sm:w-auto sm:h-auto md:w-auto md:h-auto object-cover rounded-md m-2 cursor-pointer"
    />
  );
})}
        </div>
      </div>
    </div>
  );
};

export default FullReview;
