import React from 'react';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <div className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Column - Office Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Office Address</h3>
                  <address className="mt-2 text-base text-gray-600 not-italic">
                  22c  2nd Street 2nd cross, LGB nagar ,<br />
                  Saravanampatti<br />
                  Coimbatore, 651035<br />
                    India
                  </address>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="mt-2 text-base text-gray-600">
                    <a href="tel:+91-935-444-9357" className="hover:text-indigo-600">+91 (935) 444-9357</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="mt-2 text-base text-gray-600">
                    <a href="mailto:contact@example.com" className="hover:text-indigo-600">contact@transitley.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Company Info and Google Form Link */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">About Us</h2>
            <div className="prose prose-indigo text-gray-600">
              <p>
                We are a dedicated team of professionals committed to providing exceptional services to our clients. 
                With over 15 years of experience in the industry, we pride ourselves on our expertise, 
                reliability, and customer-focused approach.
              </p>
              
              <p>
                Our mission is to deliver innovative solutions that help our clients achieve their goals. 
                We believe in building long-term relationships based on trust, transparency, and excellent results.
              </p>
              
              <div className="mt-8 border-t border-gray-200 pt-6">
                <h3 className="text-lg font-medium text-gray-900">Have a Question?</h3>
                <p className="mt-2 text-base text-gray-600">
                  For any inquiries, please fill out our online form. We'll get back to you as soon as possible.
                </p>
                
                <a 
                  href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Contact Form <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;