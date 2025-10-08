import React from "react";

const OwnerLanding = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-800">
      {/* 🌟 HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Rehotra – Complete Control Over Your Rental Properties
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">
          From managing flats to tracking rent, assigning managers, and monitoring maintenance, Rehotra empowers property owners with a digital dashboard for full transparency and efficiency.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-blue-100 transition duration-300">
            Get Started
          </button>
          <button className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-blue-700 transition duration-300">
            Request Demo
          </button>
        </div>
      </section>

      {/* 📊 OWNER DASHBOARD – AT A GLANCE */}
      <section className="py-16 px-6 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Owner Dashboard – At a Glance</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Total Flats",
              desc: "View all flats (Occupied & Empty)",
            },
            {
              title: "Occupied & Empty Flats",
              desc: "Filter and track effortlessly",
            },
            {
              title: "Rent Summary",
              desc: "Current Month Total, Received, Balance, Discounts",
            },
            {
              title: "House Rent Status",
              desc: "Pending, Paid, Balance, Discounts",
            },
            {
              title: "Notifications",
              desc: "Real-time alerts for payments, maintenance, and system updates",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🏢 PROPERTY MANAGEMENT */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Property Management</h2>
        <p className="max-w-4xl mx-auto text-lg mb-8">
          Manage buildings, flats, utilities, eco-friendly features, and configurations all in one place.
        </p>
        <ul className="text-left max-w-4xl mx-auto list-disc list-inside space-y-2 text-gray-700">
          <li>Add, edit, or delete multiple buildings and flats</li>
          <li>Upload photos, add addresses, and integrate Google Maps</li>
          <li>Manage utilities: electricity, water, power backup, gas, Wi-Fi</li>
          <li>Eco-friendly features: Rainwater harvesting, Solar panels, Kids & Pet friendly, Playground, Club</li>
          <li>Flat configurations: Bedrooms, Bathrooms, Floor, Area, Rent, Deposit, Maintenance</li>
          <li>Tenant preferences, appliances, electronics, furniture, décor, and security</li>
        </ul>
      </section>

      {/* 👥 TENANT MANAGEMENT */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Tenant Management</h2>
        <ul className="text-left max-w-4xl mx-auto list-disc list-inside space-y-2 text-gray-700">
          <li>Add, remove, and manage tenants with profile details</li>
          <li>Track rent payments, expenses, total payable amounts, and payment history</li>
          <li>Set tenant preferences and automated billing</li>
          <li>Assign services, amenities, and track charges monthly</li>
        </ul>
      </section>

      {/* 🧰 SERVICES & PROPERTY LISTINGS */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Services & Property Listings</h2>
        <ul className="text-left max-w-4xl mx-auto list-disc list-inside space-y-2 text-gray-700">
          <li>Find trusted service providers (Plumber, Electrician, Painter, Carpenter, Cleaner, etc.)</li>
          <li>Filter by profession, experience, distance, and price</li>
          <li>Browse and filter available properties to buy</li>
          <li>Search by Location, Bedroom types, Floor, Amenities, and Services</li>
        </ul>
      </section>

      {/* 📈 REPORTS & ANALYTICS */}
      <section className="py-16 px-6 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Reports & Analytics</h2>
        <ul className="text-left max-w-4xl mx-auto list-disc list-inside space-y-2 text-gray-700">
          <li>Generate monthly and yearly reports</li>
          <li>Tenant-wise and building-wise reports</li>
          <li>Advance payments and rent agreement tracking</li>
          <li>Payment receipts and complete financial oversight</li>
        </ul>
      </section>

      {/* ⚙️ SETTINGS & ADMINISTRATION */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Settings & Administration</h2>
        <ul className="text-left max-w-4xl mx-auto list-disc list-inside space-y-2 text-gray-700">
          <li>Owner Profile: Edit personal details, Bank/UPI info</li>
          <li>Signature management and document uploads</li>
          <li>
            Add and assign managers to properties with defined roles: Rent Control, Maintenance, Communication, Inspection
          </li>
          <li>Online TO-LET management – display and assign empty flats</li>
          <li>Add new tenants with complete Rehotra ID profiles</li>
        </ul>
      </section>

      {/* 💡 WHY OWNERS CHOOSE REHOTRA */}
      <section className="py-16 px-6 text-center max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Why Owners Choose Rehotra</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Complete Control", desc: "Manage buildings, flats, tenants, and managers seamlessly" },
            { title: "Transparency", desc: "Digital records reduce errors and disputes" },
            { title: "Efficiency", desc: "Save time with automation for rent tracking, service requests, and maintenance" },
            { title: "Actionable Insights", desc: "Reports and analytics for better decision-making" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-6 text-center">
        <p>© {new Date().getFullYear()} Rehotra. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OwnerLanding;
