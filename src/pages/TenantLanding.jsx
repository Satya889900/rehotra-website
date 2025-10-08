// src/pages/TenantLanding.jsx
import React from "react";

const TenantLanding = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <section className="text-center max-w-5xl mx-auto mb-16">
        <h1 className="text-5xl font-bold text-blue-700 mb-4">
          Rehotra – Your Smart Rental Companion
        </h1>
        <p className="text-lg text-gray-700">
          From paying rent to finding services and managing properties, Rehotra
          makes tenant life easier, transparent, and stress-free.
        </p>
      </section>

      {/* Tenant Dashboard Overview */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Tenant Dashboard – All at a Glance</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Next Payment Due & One-Click Rent Pay</li>
            <li>Due Date Display with Integrated Calendar</li>
            <li>Financial Overview – Advance, Balance, Discounts</li>
            <li>Agreement Info – Start Date, Renewal, Duration</li>
            <li>Family Details</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Tenant Housing</h2>
          <p className="text-gray-700 mb-3">
            Browse available rental houses and shops with pictures, location, and amenities.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Advanced Search: Rental, PG, Buy</li>
            <li>Filter by Bedroom Type, Floor, Services & Amenities</li>
            <li>To-let listings with full property details</li>
          </ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Tenant Services</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Trusted service providers – Plumber, Electrician, Cleaner, etc.</li>
            <li>Search & Filter by profession, distance, price</li>
            <li>Full provider profiles with experience, contact info, and charges</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold text-blue-700 mb-3">Tenant Profile & Settings</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Manage photo, name, contact, ID & address proof</li>
            <li>Family member details and relationships</li>
            <li>Bank details, UPI, and signature management</li>
            <li>Sell Property – List houses, shops, or plots</li>
          </ul>
        </div>
      </section>

      {/* Why Tenants Love Rehotra */}
      <section className="bg-blue-50 py-16 text-center">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">Why Tenants Love Rehotra</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8 text-gray-700">
          <div>
            <h3 className="font-semibold text-lg mb-2">Convenience</h3>
            <p>Pay rent, track payments, and manage agreements easily.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Transparency</h3>
            <p>Clear visibility of financials and rental history.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Support</h3>
            <p>Access verified service providers anytime.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Control</h3>
            <p>Manage family details, bank info, and property alerts.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenantLanding;
