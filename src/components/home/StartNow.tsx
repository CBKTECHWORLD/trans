// import React from 'react';

const StartNow = () => {
  // Function to open Google Form in a new tab
  const openGoogleForm = () => {
    // Replace this URL with your actual Google Form URL
    const googleFormUrl = "https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc";
    window.open(googleFormUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Find the right resources to get started with <span className="text-blue-600">Transitley</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Cloud KITS Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Initial KITS</h2>
            <p className="text-gray-600 mb-4">University Application</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200">
              Start Now
            </button>
          </div>

          {/* Eligibility Check Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Eligibility Check</h2>
            <p className="text-gray-600 mb-4">Applicant Documents</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>

          {/* Visa Process Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">Visa Process</h2>
            <p className="text-gray-600 mb-4">VISA Help</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>

          {/* IELTS Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">IELTS</h2>
            <p className="text-gray-600 mb-4">Coaching</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>

          {/* Universities Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
            <h2 className="text-xl font-semibold text-blue-600 mb-2">Universities</h2>
            <p className="text-gray-600 mb-4">Top Universties</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>

          {/* Free Counselling Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
            <h2 className="text-xl font-semibold text-green-600 mb-2">Free Counselling</h2>
            <p className="text-gray-600 mb-4">End to end</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>

          {/* FOREX Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
            <h2 className="text-xl font-semibold text-yellow-600 mb-2">FOREX</h2>
            <p className="text-gray-600 mb-4">Currency Converter</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>

          {/* Ticket Booking Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
            <h2 className="text-xl font-semibold text-purple-600 mb-2">Ticket Booking</h2>
            <p className="text-gray-600 mb-4">Flight and Luggage</p>
            <button 
              onClick={openGoogleForm}
              className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-200"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartNow;

// import React, { useState } from 'react';

// const StartNow = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const [phone, setPhone] = useState('');
//   const [otpSent, setOtpSent] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [activeField, setActiveField] = useState('email'); // 'email' or 'phone'

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!otpSent) {
//       // Validate email or phone
//       if ((activeField === 'email' && email) || (activeField === 'phone' && phone)) {
//         // Here you would typically send the OTP to the email/phone
//         console.log(`OTP sent to ${activeField === 'email' ? email : phone}`);
//         setOtpSent(true);
//       }
//     } else {
//       // Verify OTP
//       console.log(`Verifying OTP: ${otp}`);
//       // Add your OTP verification logic here
//       // On successful verification:
//       // setIsModalOpen(false);
//       // Reset form
//       // setEmail('');
//       // setPhone('');
//       // setOtp('');
//       // setOtpSent(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
//           Find the right resources to get started with <span className="text-blue-600">Transitley</span>
//         </h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
//           {/* Cloud KITS Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Initial KITS</h2>
//             <p className="text-gray-600 mb-4">University Application</p>
//             {/* <p className="text-sm text-gray-500">Brochure </p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200">
//               Start Now
//             </button>
//           </div>


//           {/* SOF Review Card */}
//           <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
//             <h2 className="text-xl font-semibold text-green-600 mb-2">Eligibility Check</h2>
//             <p className="text-gray-600 mb-4">Applicant Documents</p>
//             <p className="text-sm text-gray-500"></p>
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>

//   {/* SOF Review Card */}
//   <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
//             <h2 className="text-xl font-semibold text-yellow-600 mb-2">Visa Process</h2>
//             <p className="text-gray-600 mb-4">VISA Help</p>
//             {/* <p className="text-sm text-gray-500">Startline: 1</p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>
//             {/* SOF Review Card */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
//             <h2 className="text-xl font-semibold text-purple-600 mb-2">IELTS</h2>
//             <p className="text-gray-600 mb-4">Coaching </p>
//             {/* <p className="text-sm text-gray-500">Startline: 1</p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>
//             {/* SOF Review Card */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
//             <h2 className="text-xl font-semibold text-blue-600 mb-2">Universities</h2>
//             <p className="text-gray-600 mb-4">Top Universties</p>
//             {/* <p className="text-sm text-gray-500">Startline: 1</p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>
//             {/* SOF Review Card */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
//             <h2 className="text-xl font-semibold text-green-600 mb-2">Free Counselling</h2>
//             <p className="text-gray-600 mb-4">End to end</p>
//             {/* <p className="text-sm text-gray-500">Startline: 1</p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>
//             {/* SOF Review Card */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
//             <h2 className="text-xl font-semibold text-yellow-600 mb-2">FOREX</h2>
//             <p className="text-gray-600 mb-4">Currency Converter</p>
//             {/* <p className="text-sm text-gray-500">Startline: 1</p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>
//             {/* SOF Review Card */}
//             <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
//             <h2 className="text-xl font-semibold text-purple-600 mb-2">Ticket Booking</h2>
//             <p className="text-gray-600 mb-4">Flight and Luggage</p>
//             {/* <p className="text-sm text-gray-500">Startline: 1</p> */}
//             <button 
//               onClick={() => setIsModalOpen(true)}
//               className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-md transition duration-200"
//             >
//               Start Now
//             </button>
//           </div>
//                </div>

//         {/* Modal */}
//         {isModalOpen && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
//             <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-2xl font-bold text-gray-800">
//                   {otpSent ? 'Verify OTP' : 'Get Started'}
//                 </h2>
//                 <button 
//                   onClick={() => {
//                     setIsModalOpen(false);
//                     setOtpSent(false);
//                     setEmail('');
//                     setPhone('');
//                     setOtp('');
//                   }}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   &times;
//                 </button>
//               </div>

//               <form onSubmit={handleSubmit}>
//                 {!otpSent ? (
//                   <>
//                     <div className="mb-4">
//                       <div className="flex border rounded-md overflow-hidden mb-2">
//                         <button
//                           type="button"
//                           className={`py-2 px-4 ${activeField === 'email' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//                           onClick={() => setActiveField('email')}
//                         >
//                           Email
//                         </button>
//                         <button
//                           type="button"
//                           className={`py-2 px-4 ${activeField === 'phone' ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
//                           onClick={() => setActiveField('phone')}
//                         >
//                           Phone
//                         </button>
//                       </div>

//                       {activeField === 'email' ? (
//                         <input
//                           type="email"
//                           value={email}
//                           onChange={(e) => setEmail(e.target.value)}
//                           placeholder="Enter your email"
//                           className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           required
//                         />
//                       ) : (
//                         <input
//                           type="tel"
//                           value={phone}
//                           onChange={(e) => setPhone(e.target.value)}
//                           placeholder="Enter your phone number"
//                           className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                           required
//                         />
//                       )}
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200"
//                     >
//                       Send OTP
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <p className="mb-4 text-gray-600">
//                       We've sent an OTP to your {activeField === 'email' ? 'email' : 'phone'}
//                     </p>
//                     <input
//                       type="text"
//                       value={otp}
//                       onChange={(e) => setOtp(e.target.value)}
//                       placeholder="Enter OTP"
//                       className="w-full p-3 border rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                       required
//                     />
//                     <button
//                       type="submit"
//                       className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition duration-200"
//                     >
//                       Verify OTP
//                     </button>
//                   </>
//                 )}
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default StartNow;