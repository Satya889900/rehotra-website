    import React from "react";
    import { Link } from "react-router-dom";

    const Home = () => {
    return (
        <div className="font-sans bg-amber-50 text-amber-800 min-h-screen">
        {/* 🌟 HERO SECTION */}
        <section className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white py-20 px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Rehotra – Simplifying Rental & Property Management
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            A centralized platform for Owners, Tenants, Managers, and Administrators
            to manage rental properties with transparency, efficiency, and ease.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
                to="/owner"
                className="bg-white text-amber-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-amber-100 transition duration-300"
            >
                Owner Module
            </Link>
            <Link
                to="/manager"
                className="bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-orange-700 transition duration-300"
            >
                Manager Module
            </Link>
            <Link
                to="/tenant"
                className="bg-amber-600 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-amber-700 transition duration-300"
            >
                Tenant Module
            </Link>
            </div>
        </section>

        {/* ⚡ FEATURES SECTION */}
        <section className="py-16 px-6 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-amber-800">Features</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-amber-200">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">
                Streamlined Property Management
                </h3>
                <p className="text-amber-600">
                Manage all your rental units, agreements, and tenant records in one centralized system.
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-orange-200">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">Tenant-Friendly Experience</h3>
                <p className="text-orange-600">
                Tenants can pay rent online, raise service requests, and access their rental history anytime, anywhere.
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-amber-200">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">Efficient Maintenance & Operations</h3>
                <p className="text-amber-600">
                Track maintenance requests, communicate with tenants, and manage property operations effortlessly.
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-orange-200">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">Powerful Admin Control</h3>
                <p className="text-orange-600">
                Administrators get full visibility with analytical reports, role management, and system monitoring.
                </p>
            </div>
            </div>
        </section>

        {/* 🔧 HOW IT WORKS SECTION */}
        <section className="bg-orange-50 py-16 px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-amber-800">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-amber-200">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">1. For Owners & Managers</h3>
                <p className="text-amber-600">
                Track payments, agreements, and tenant details digitally. Reduce manual errors and save time.
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-orange-200">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">2. For Tenants</h3>
                <p className="text-orange-600">
                Pay rent online, submit service requests, and view rental history with ease.
                </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-amber-200">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">3. For Administrators</h3>
                <p className="text-amber-600">
                Oversee system performance, and generate actionable insights for better decision-making.
                </p>
            </div>
            </div>
        </section>

        {/* 💡 WHY REHOTRA SECTION */}
        <section className="py-16 px-6 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-amber-800">Why Rehotra</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-amber-200">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">Transparency</h3>
                <p className="text-amber-600">Digital records for every transaction and request.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-orange-200">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">Efficiency</h3>
                <p className="text-orange-600">Simplify property operations and save time.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-amber-200">
                <h3 className="text-xl font-semibold mb-2 text-amber-700">Accountability</h3>
                <p className="text-amber-600">Clear notifications and updates for all parties.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition border border-orange-200">
                <h3 className="text-xl font-semibold mb-2 text-orange-700">Analytics</h3>
                <p className="text-orange-600">Powerful insights for data-driven property management.</p>
            </div>
            </div>
        </section>

        {/* 🦶 FOOTER */}
        <footer className="bg-amber-900 text-amber-200 py-6 text-center">
            <p className="mb-2">© {new Date().getFullYear()} Rehotra. All rights reserved.</p>
            <div className="flex justify-center gap-6">
            <Link
                to="/privacy-policy"
                className="text-amber-200 hover:text-orange-300 underline"
            >
                Privacy Policy
            </Link>
            <Link
                to="/terms-conditions"
                className="text-amber-200 hover:text-orange-300 underline"
            >
                Terms & Conditions
            </Link>
            </div>
        </footer>

        </div>
    );
    };

    export default Home;