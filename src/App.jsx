import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import OwnerLanding from "./pages/OwnerLanding";
import TenantLanding from "./pages/TenantLanding";
import ManagerLanding from "./pages/ManagerLanding";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const App = () => {
  return (
    <Router>
      {/* 🌐 Navbar */}
      <nav className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* 🔷 Logo */}
          <Link to="/">
            <img
              src="/assets/logo.png" // Replace with the actual path to your logo image (e.g., place it in public/assets/logo.png)
              alt="Rehotra"
              className="h-10 w-auto" // Adjust height as needed for your design
            />
          </Link>

          {/* 🔗 Navigation Links */}
          <div className="space-x-8 text-gray-700 font-medium">
            <Link to="/" className="hover:text-amber-600 transition">Home</Link>
            <Link to="/owner" className="hover:text-amber-600 transition">Owner</Link>
            <Link to="/manager" className="hover:text-amber-600 transition">Manager</Link>
            <Link to="/tenant" className="hover:text-amber-600 transition">Tenant</Link>
        </div>
        </div>
      </nav>

      {/* 🌍 Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/owner" element={<OwnerLanding />} />
        <Route path="/manager" element={<ManagerLanding />} />
        <Route path="/tenant" element={<TenantLanding />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </Router>
  );
};

export default App;