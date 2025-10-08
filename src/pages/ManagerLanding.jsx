// src/pages/ManagerLanding.jsx
import React from "react";

const ManagerLanding = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-green-700 mb-4">
          Rehotra – Seamless Property Management for Managers
        </h1>
        <p className="text-lg text-gray-700">
          Manage flats, tenants, rent collections, and maintenance services efficiently — all in one centralized platform.
        </p>
        <div className="mt-6 space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started
          </button>
          <button className="border border-green-600 text-green-700 px-6 py-3 rounded-lg hover:bg-green-50 transition">
            Sign In
          </button>
        </div>
      </section>

      {/* Dashboard Overview */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Manager Dashboard – At a Glance
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Total Flats (Occupied & Empty)</li>
            <li>Current Month Rent Summary – Total, Received, Balance, Discounts</li>
            <li>Real-time Notifications for Rent & Maintenance</li>
            <li>Track Occupancy and Rent Status Effortlessly</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Assigned Property Management
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Display assigned buildings & flats</li>
            <li>Manage tenants & rent collections digitally</li>
            <li>Add or remove tenants with integrated rent tracking</li>
          </ul>
        </div>
      </section>

      {/* Services & Reports */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Services Management
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Access service providers – Plumber, Electrician, Cleaner, etc.</li>
            <li>Advanced filters by profession, distance, and price</li>
            <li>Manage service requests and schedules efficiently</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Reports & Analytics
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Generate monthly & annual reports</li>
            <li>Download payment receipts</li>
            <li>Track financial performance and tenant payments</li>
          </ul>
        </div>
      </section>

      {/* Profile & Tenant Management */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Manager Profile & Settings
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>personal details – Name, ID, Contact info, DOB, Proofs</li>
            <li>Manage bank details, UPI, QR, and signature</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-green-700 mb-3">
            Tenant Management
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Add tenants with full profiles and documents</li>
            <li>Assign tenants to flats, manage lease & payments</li>
            <li>Manage parking options and payment methods</li>
          </ul>
        </div>
      </section>

      {/* Why Managers Love Rehotra */}
      <section className="bg-green-50 py-16 text-center">
        <h2 className="text-4xl font-bold text-green-700 mb-6">
          Why Managers Love Rehotra
        </h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">Efficiency</h3>
            <p>Centralized platform for property & tenant management.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
            <p>Clear visibility of rent, tenants, and assigned tasks.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Control</h3>
            <p>Manage tenants, flats, services, and payments all in one place.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Insights</h3>
            <p>Generate reports & analytics for informed decisions.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManagerLanding;
