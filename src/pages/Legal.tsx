// Legal.tsx
import React from "react";

const Legal: React.FC = () => {
  return (
    <div className="bg-white text-black min-h-screen py-12 px-6 sm:px-12 md:px-24">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Legal & Privacy Policy</h1>
        <p className="text-center text-sm mb-8">Last Updated: 30 May 2025</p>

        {/* Privacy Policy Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>

          <p className="mb-6">
            At <strong>Transitley</strong> ("we", "us", or "our"), we value your privacy and are committed to safeguarding your personal information.
            This policy complies with the <strong>UK General Data Protection Regulation (UK GDPR)</strong>, the <strong>EU GDPR</strong>, and the
            <strong> Digital Personal Data Protection Act, 2023 (India)</strong>. It explains how we collect, use, store, and protect your personal data
            through our website <a href="https://transitley.com" className="text-blue-600 underline">https://transitley.com</a> and our consultancy, visa, and immigration services.
          </p>

          <h3 className="text-xl font-semibold mb-2">1. Data We Collect</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Personal details such as name, contact number, date of birth, and email address.</li>
            <li>Identification details including passport, visa information, and government-issued IDs.</li>
            <li>Educational, employment, and financial information required for service processing.</li>
            <li>Technical information such as IP address, browser type, and device identifiers (via cookies).</li>
            <li>Dependants’ or family information, if provided for immigration or visa purposes.</li>
            <li>Any data voluntarily shared through forms, calls, or consultations.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2. Purpose of Processing</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Providing requested immigration, education, or consultancy services.</li>
            <li>Fulfilling legal and regulatory requirements in the UK, EU, or India.</li>
            <li>Improving service quality, analytics, and customer support.</li>
            <li>Preventing fraud or unauthorised access.</li>
            <li>Communicating with you, including service updates and marketing (only with your consent).</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">3. Legal Basis for Processing</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Consent:</strong> When you voluntarily share data or agree to marketing.</li>
            <li><strong>Contractual Necessity:</strong> To fulfil requested services or agreements.</li>
            <li><strong>Legal Obligation:</strong> Compliance with immigration, KYC, and data laws.</li>
            <li><strong>Legitimate Interest:</strong> Business analytics, fraud prevention, and security.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">4. Data Storage & Retention</h3>
          <p className="mb-6">
            We securely store your data in compliance with international security standards. Data is retained only as long as
            required for the purposes stated or as required by law. Upon request, you may exercise your rights to access, correct,
            or delete your data.
          </p>

          <h3 className="text-xl font-semibold mb-2">5. Data Sharing & Third Parties</h3>
          <p className="mb-6">
            We do not sell or rent your personal information. However, data may be shared with:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Government authorities, embassies, or immigration bodies where legally necessary.</li>
            <li>Accredited partners or vendors working under confidentiality agreements.</li>
            <li>Legal or compliance advisors in connection with lawful requests.</li>
          </ul>
          <p className="mb-6">
            <strong>Disclaimer:</strong> Transitley shall not be liable for data misuse or disclosure caused by third-party systems, government databases,
            or circumstances beyond our reasonable control.
          </p>

          <h3 className="text-xl font-semibold mb-2">6. User Rights</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Right to access, rectify, or delete your data.</li>
            <li>Right to withdraw consent at any time.</li>
            <li>Right to restrict processing or data portability.</li>
            <li>Right to lodge a complaint with a data protection authority.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">7. Security & Responsibility</h3>
          <p className="mb-6">
            We employ encryption, firewalls, and secure access controls to protect your data. However, data transmission over
            the internet carries inherent risks. You are responsible for ensuring that the information provided is accurate and
            authorised for use.
          </p>
          <p className="mb-6">
            Transitley shall not be liable for unauthorised access, technical failures, or third-party breaches beyond our control.
          </p>

          <h3 className="text-xl font-semibold mb-2">8. Cookies & Tracking</h3>
          <p className="mb-6">
            Our site uses cookies for analytics and user experience enhancement. You may disable cookies via your browser settings,
            though some features may not function correctly.
          </p>

          <h3 className="text-xl font-semibold mb-2">9. Cross-Border Data Transfers</h3>
          <p className="mb-6">
            Data transfers between the UK, EU, and India are protected using lawful transfer mechanisms and contractual safeguards.
          </p>

          <h3 className="text-xl font-semibold mb-2">10. Policy Updates</h3>
          <p className="mb-6">
            This Privacy Policy may be updated periodically. The latest version will always be available on our website.
          </p>

          <h3 className="text-xl font-semibold mb-2">11. Contact Information</h3>
          <p className="mb-6">
            For questions about privacy or data access requests, please contact: <br />
            <strong>Email:</strong> privacy@transitley.com <br />
            <strong>Address:</strong> Transitley Ltd, Manchester, UK
          </p>
        </section>

        {/* Terms & Conditions Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Terms & Conditions</h2>

          <p className="mb-6">
            These Terms & Conditions ("Terms") govern your access to and use of Transitley’s website and services.
            By using our services, you agree to comply with these Terms in full.
          </p>

          <h3 className="text-xl font-semibold mb-2">1. Use of Services</h3>
          <p className="mb-6">
            You agree to use our services solely for lawful purposes and not engage in any activity that disrupts, damages,
            or interferes with our systems, website, or reputation.
          </p>

          <h3 className="text-xl font-semibold mb-2">2. Accuracy of Information</h3>
          <p className="mb-6">
            All information you provide must be accurate and complete. Transitley is not responsible for errors or delays
            resulting from false, incomplete, or misleading information supplied by clients.
          </p>

          <h3 className="text-xl font-semibold mb-2">3. Limitation of Liability</h3>
          <p className="mb-6">
            Transitley shall not be liable for any direct, indirect, or consequential losses resulting from the use of our
            website, information, or services. Our advice and documentation are provided based on information supplied by the client.
          </p>

          <h3 className="text-xl font-semibold mb-2">4. Third-Party Links</h3>
          <p className="mb-6">
            Our website may contain links to third-party sites. We are not responsible for the content, accuracy, or privacy
            practices of these external websites.
          </p>

          <h3 className="text-xl font-semibold mb-2">5. Intellectual Property</h3>
          <p className="mb-6">
            All content, branding, and materials on this website are the intellectual property of Transitley. You may not
            reproduce or distribute any material without written consent.
          </p>

          <h3 className="text-xl font-semibold mb-2">6. Governing Law</h3>
          <p className="mb-6">
            These Terms shall be governed by and construed in accordance with the laws of England and Wales, and applicable
            Indian laws for operations in India.
          </p>

          <h3 className="text-xl font-semibold mb-2">7. Contact</h3>
          <p className="mb-6">
            For legal or contractual queries, please contact: <br />
            <strong>Email:</strong> legal@transitley.com
          </p>

          <p className="text-sm text-gray-600 mt-8">
            © {new Date().getFullYear()} Transitley. All rights reserved.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Legal;
