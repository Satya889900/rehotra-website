import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-4 text-blue-700">Privacy Policy</h2>
        <p className="text-gray-700 mb-2">
          Rehotra App is committed to protecting your privacy. This Privacy
          Policy explains how we collect, use, and safeguard your personal
          information when you use the Rehotra App.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>
            Personal Information: Name, email, phone, DOB, gender, address, ID
            proofs, bank details, Rehotra ID
          </li>
          <li>
            Property & Tenant Data: Building details, flat info, tenant
            profiles, rent history, service requests
          </li>
          <li>Payment Information: Payment methods, transactions, billing</li>
          <li>
            Device & Usage Data: IP, device type, browser, OS, app usage
            patterns
          </li>
          <li>
            Service Provider Data: Name, profession, license, contact info,
            working hours, service details
          </li>
        </ul>
        <p className="mt-4 text-gray-700">
          Users can contact us at{" "}
          <a
            href="mailto:rehotra.kods@gmail.com"
            className="text-blue-600 underline"
          >
            rehotra.kods@gmail.com
          </a>{" "}
          for privacy-related inquiries.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
