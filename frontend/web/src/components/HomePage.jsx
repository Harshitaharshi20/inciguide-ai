import React from "react";

/* 🔴 CHANGE 1: import useNavigate from react-router-dom */
import { useNavigate, Link } from "react-router-dom";

export default function HomePage() {

  /* 🔴 CHANGE 2: initialize navigate */
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#fdf7f2] flex flex-col">
      
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-[#f3ede7] bg-[#fdf7f2]">
        <div className="text-2xl font-semibold text-[#223118] font-serif">
          Skin<span className="font-sans">Genie</span>
        </div>

        <div className="flex items-center gap-8">

          {/* 🔴 CHANGE 3: <a> replaced with <Link> */}
          <Link to="/" className="text-[#223118] font-medium hover:underline">
            Home
          </Link>

          {/* 🔴 CHANGE 4: onClick now uses navigate */}
          <button
            className="text-[#223118] font-medium hover:underline bg-transparent border-none cursor-pointer"
            onClick={() => navigate("/analyze")}
          >
            Analyze
          </button>

          <Link
            to="/products"
            className="text-[#223118] font-medium hover:underline"
          >
            Products
          </Link>

          <button className="bg-[#223118] text-white px-6 py-2 rounded-md ml-4">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-24">
        <div className="text-xs tracking-widest text-[#7d7d6b] mb-4 font-semibold">
          AI-POWERED DERMATOLOGICAL SCIENCE
        </div>

        <h1 className="text-6xl font-serif font-bold text-[#223118] mb-4">
          Your skin,<span className="italic font-normal"> reimagined.</span>
        </h1>

        <p className="text-lg text-[#7d7d6b] max-w-xl mx-auto mb-8">
          Expert skin analysis meets precision-crafted formulas. Discover the
          routine your skin has been waiting for.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          
          {/* 🔴 CHANGE 5: button navigates using router */}
          <button
            className="bg-[#223118] text-white px-8 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-[#1a2412] transition"
            onClick={() => navigate("/analyze")}
          >
            Analyze Product
          </button>

          <button className="bg-transparent border-none text-[#223118] text-lg font-medium flex items-center gap-2 hover:underline">
            Explore Products <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Precision analysis section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-16 py-24">
        <div className="flex-1 px-4 md:px-0">
          <h2 className="text-5xl font-serif font-semibold text-[#223118] mb-6">
            Precision analysis for <span className="italic">personalized</span> care.
          </h2>
          <p className="text-[#7d7d6b] text-lg mb-8 max-w-xl">
            Our dermatologist-backed AI evaluates your skin type and concerns.
          </p>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="bg-[#f7f3ee] rounded-2xl shadow-xl p-8 w-full max-w-md">
            
            {/* 🔴 CHANGE 6: Face scan navigates to /facescan */}
            <button
              type="button"
              className="w-full border rounded-md px-3 py-3 bg-white text-[#223118]"
              onClick={() => navigate("/facescan")}
            >
              📷 Take Photo
            </button>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#f3ede7] py-8 px-8 mt-auto">
        <div className="text-center text-xs text-[#7d7d6b]">
          © 2026 SKINGENIE. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
}

