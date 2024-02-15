// // FullReviewPage.js
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const FullReviewPage = () => {
//   const { deviceId } = useParams();
//   const [device, setDevice] = useState(null);

//   useEffect(() => {
//     const fetchDeviceData = async () => {
//         try {
//           const response = await fetch(`http://localhost:5000/api/reviews/${deviceId}`);
          
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
      
//           const data = await response.json();
//           console.log('Fetched Device Data:', data);
//           setDevice(data);
//         } catch (error) {
//           console.error('Error fetching data:', error);
//         }
//       };

//     fetchDeviceData();
//   }, [deviceId]);

//   return (
//     <div className="container mx-auto mt-8">
//       {device && (
//         <div>
//           <h2 className="text-2xl font-bold text-green">{device.name}</h2>
//           {device.images.length > 0 && (
//             <img
//               src={device.images[0]}
//               alt={`${device.name} Main Image`}
//               className="mt-4 rounded-md shadow-md w-full max-w-lg mx-auto"
//             />
//           )}
//           {/* Render other details here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FullReviewPage;
