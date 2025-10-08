import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-2xl shadow">
        <h2 className="text-3xl font-bold mb-6 text-blue-700">
          Terms & Conditions
        </h2>

        <div className="space-y-6 text-gray-700">
          <section>
            <h3 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h3>
            <p>
              By accessing or using the Rehotra App, you agree to comply with
              these Terms and Conditions. If you do not agree, do not use the
              App.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">2. User Eligibility</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Users must be 18 years or older.</li>
              <li>Users must provide accurate and complete information.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">3. User Roles</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>Owners:</strong> Can manage properties, flats, tenants,
                managers and payments.
              </li>
              <li>
                <strong>Managers:</strong> Can manage assigned properties,
                tenants, rent collections, and maintenance services.
              </li>
              <li>
                <strong>Tenants:</strong> Can pay rent, raise service requests,
                and access property listings.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">4. Account Responsibilities</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Users are responsible for maintaining the confidentiality of
                their login credentials.
              </li>
              <li>
                Users agree to notify Rehotra immediately of any unauthorized
                account access.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">5. Payments & Transactions</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All rent payments, maintenance charges, and service payments
                processed via the App are final.
              </li>
              <li>
                Rehotra is not responsible for payment failures caused by
                third-party payment gateways.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">6. Prohibited Activities</h3>
            <p className="mb-2">Users shall not:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the App for illegal purposes or fraudulent activities.</li>
              <li>Share login credentials with unauthorized users.</li>
              <li>Tamper with the App’s functionality or security features.</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">7. Intellectual Property</h3>
            <p>
              All content, logos, graphics, and software in the Rehotra App are
              the property of Rehotra and are protected by copyright and other
              intellectual property laws.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">8. Termination</h3>
            <p>
              Rehotra reserves the right to suspend or terminate accounts for
              violations of these Terms.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">
              9. Disclaimers & Limitation of Liability
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Rehotra provides the App on an “as-is” basis.</li>
              <li>
                We do not guarantee uninterrupted service or error-free
                performance.
              </li>
              <li>
                Rehotra is not liable for indirect, incidental, or consequential
                damages arising from the use of the App.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">10. Governing Law</h3>
            <p>
              These Terms are governed by the laws of India. Any disputes shall
              be resolved in the courts of Bengaluru/Karnataka.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">11. Changes to Terms</h3>
            <p>
              Rehotra may update these Terms at any time. Users will be notified
              of significant changes via the App.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold mb-2">12. Contact Us</h3>
            <p>
              For any questions about these Terms, email:{" "}
              <a
                href="mailto:rehotra.kods@gmail.com"
                className="text-blue-600 underline"
              >
                rehotra.kods@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
