import React from 'react';

const WhatsAppCommunity: React.FC = () => {
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Join Our WhatsApp Community
          </h2>
          <p className="text-gray-600">
            Stay connected with updates, offers, and travel tips
          </p>
        </div>

        {/* Single Row Layout */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 bg-white border-2 border-teal-100 rounded-2xl p-8 hover:border-teal-400 hover:shadow-lg transition-all duration-300 max-w-4xl mx-auto">
          
          {/* QR Code */}
          <div className="flex-shrink-0">
            <div className="bg-gray-50 rounded-xl p-4 border-2 border-gray-200">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                <img 
                  src="/images/qrcode1.jpeg" 
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain rounded-lg"
                />
                {/* Fallback placeholder */}
                {/* <div className="absolute">
                  <svg className="w-16 h-16 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 11h8V3H3v8zm2-6h4v4H5V5zm8-2v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm13-2h3v3h-3v-3zm0 5h3v3h-3v-3zm-5-5h3v3h-3v-3z"/>
                  </svg>
                </div> */}
              </div>
              <p className="text-center text-xs text-gray-500 mt-2">Scan to join</p>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Connect With Our Community
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Get instant updates, exclusive deals, and connect with fellow travelers
            </p>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                University Admission
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Job
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Visa
              </span>
               <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Forex
              </span>
               <span className="inline-flex items-center gap-1 text-xs text-gray-500">
                <svg className="w-4 h-4 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Courier
              </span>
            </div>
          </div>

          {/* Join Button */}
          <div className="flex-shrink-0">
            <a
              href="https://chat.whatsapp.com/CpEa3VLQdB2CX69tXR9Z0r"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppCommunity;