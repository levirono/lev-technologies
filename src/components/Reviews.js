// components/Reviews.js
import React, { useState } from 'react';
import data from './ReviewData.json';

const Reviews = () => {
  const [selectedImage, setSelectedImage] = useState(require(data.images[0]));

  return (
    <div className="container mx-auto mt-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-green">{data.name}</h2>
        <img
          src={selectedImage}
          alt={`${data.name} Main Image`}
          className="mt-4 rounded-md shadow-md w-full max-w-lg mx-auto cursor-pointer"
          onClick={() => window.alert('Open other images here')}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(data.categories).map(([category, subcategories]) => (
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
    </div>
  );
};

export default Reviews;
