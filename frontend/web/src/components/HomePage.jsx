import React from "react";

export default function HomePage({ onAnalyzeClick }) {
  return (
    <div className="min-h-screen bg-[#fdf7f2] flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-[#f3ede7] bg-[#fdf7f2]">
        <div className="text-2xl font-semibold text-[#223118] font-serif">Skin<span className="font-sans">Genie</span></div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-[#223118] font-medium hover:underline">Home</a>
          <button
            className="text-[#223118] font-medium hover:underline bg-transparent border-none cursor-pointer"
            onClick={onAnalyzeClick}
          >
            Analyze
          </button>
          <a href="#" className="text-[#223118] font-medium hover:underline">Products</a>
          <button className="bg-[#223118] text-white px-6 py-2 rounded-md ml-4">Login</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex-1 flex flex-col items-center justify-center text-center py-24">
        <div className="text-xs tracking-widest text-[#7d7d6b] mb-4 font-semibold">AI-POWERED DERMATOLOGICAL SCIENCE</div>
        <h1 className="text-6xl font-serif font-bold text-[#223118] mb-4">
          Your skin,<span className="italic font-normal"> reimagined.</span>
        </h1>
        <p className="text-lg text-[#7d7d6b] max-w-xl mx-auto mb-8">
          Expert skin analysis meets precision-crafted formulas. Discover the routine your skin has been waiting for.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <button
            className="bg-[#223118] text-white px-8 py-3 rounded-md text-lg font-semibold shadow-md hover:bg-[#1a2412] transition"
            onClick={onAnalyzeClick}
          >
            Analyze My Skin
          </button>
          <button className="bg-transparent border-none text-[#223118] text-lg font-medium flex items-center gap-2 hover:underline">
            Explore Products <span className="text-xl">→</span>
          </button>
        </div>
      </section>

      {/* Precision analysis for personalized care section */}
      <section className="w-full flex flex-col md:flex-row items-center justify-center gap-16 py-24 bg-transparent">
        <div className="flex-1 flex flex-col items-start justify-center px-4 md:px-0">
          <h2 className="text-5xl font-serif font-semibold text-[#223118] mb-6 leading-tight">
            Precision analysis for <span className="italic">personalized</span> care.
          </h2>
          <p className="text-[#7d7d6b] text-lg mb-8 max-w-xl">
            Our dermatologist-backed AI evaluates your skin type and concerns to curate a routine that actually works. Start your journey to radiant skin today.
          </p>
          <div className="w-full flex justify-center md:justify-start">
            <div className="flex items-center w-full max-w-xs">
              <div className="flex-grow border-t border-[#e5ded6]"></div>
              <span className="mx-4 text-xs tracking-widest text-[#7d7d6b] font-semibold">THE PROCESS</span>
              <div className="flex-grow border-t border-[#e5ded6]"></div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-[#f7f3ee] rounded-2xl shadow-xl p-8 w-full max-w-md min-w-[350px]">
            <h3 className="text-2xl font-bold text-[#223118] mb-2">Skin Assessment</h3>
            <p className="text-[#7d7d6b] text-sm mb-6">Tell us about your skin for better recommendations.</p>
            <form>
              <div className="mb-4">
                <label className="block text-[#223118] font-medium mb-1">Skin Type</label>
                <select className="w-full border rounded-md px-3 py-2">
                  <option>Select your skin type</option>
                  <option>Oily</option>
                  <option>Dry</option>
                  <option>Combination</option>
                  <option>Normal</option>
                  <option>Sensitive</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-[#223118] font-medium mb-1">Age</label>
                <input type="number" className="w-full border rounded-md px-3 py-2" placeholder="e.g. 25" />
              </div>
              <div className="mb-4 flex gap-2 items-end">
                <button type="button" className="flex-1 border border-[#d6d1c4] rounded-md px-3 py-2 flex items-center justify-center gap-2 bg-white text-[#223118]">
                  <span className="material-icons">photo_camera</span> Upload Photo
                </button>
              </div>
              <div className="mb-4 grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[#223118] font-medium mb-1">Primary Concerns</label>
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center gap-2"><input type="checkbox" /> Acne</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Dryness</label>
                    <label className="flex items-center gap-2"><input type="checkbox" /> Redness</label>
                  </div>
                </div>
                <div className="pt-6 flex flex-col gap-1">
                  <label className="flex items-center gap-2"><input type="checkbox" /> Aging</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Dark Spots</label>
                  <label className="flex items-center gap-2"><input type="checkbox" /> Texture</label>
                </div>
              </div>
              <button type="submit" className="w-full bg-[#223118] text-white py-3 rounded-md font-semibold mt-4 flex items-center justify-center gap-2">
                Analyze My Skin <span className="material-icons">arrow_forward</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Curated for your routine section */}
      <section className="w-full max-w-6xl mx-auto mt-12 mb-20">
        <h2 className="text-4xl font-serif font-semibold text-center mb-2 text-[#223118]">Curated for your routine</h2>
        <p className="text-[#7d7d6b] text-center mb-10 text-lg">Science-backed formulas designed to deliver visible results.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Product Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
            <div className="w-full h-48 flex items-center justify-center mb-4"><img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Luminous Cleanser" className="object-contain h-40" /></div>
            <div className="w-full flex flex-col items-center">
              <span className="text-xs bg-[#e6ede6] text-[#223118] px-3 py-1 rounded-full mb-2">All Skin Types</span>
              <h3 className="text-lg font-semibold text-[#223118]">Luminous Cleanser</h3>
              <div className="text-xs text-[#7d7d6b] mb-4">HYALURONIC ACID  ALOE VERA</div>
              <button className="border border-[#223118] rounded-md px-4 py-2 text-[#223118] hover:bg-[#f3ede7] transition">View Details</button>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
            <div className="w-full h-48 flex items-center justify-center mb-4"><img src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80" alt="Pure Radiance Serum" className="object-contain h-40" /></div>
            <div className="w-full flex flex-col items-center">
              <span className="text-xs bg-[#f3ede7] text-[#223118] px-3 py-1 rounded-full mb-2">Dull Skin</span>
              <h3 className="text-lg font-semibold text-[#223118]">Pure Radiance Serum</h3>
              <div className="text-xs text-[#7d7d6b] mb-4">VITAMIN C  FERULIC ACID</div>
              <button className="border border-[#223118] rounded-md px-4 py-2 text-[#223118] hover:bg-[#f3ede7] transition">View Details</button>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
            <div className="w-full h-48 flex items-center justify-center mb-4"><img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Velvet Shield SPF" className="object-contain h-40" /></div>
            <div className="w-full flex flex-col items-center">
              <span className="text-xs bg-[#e6ede6] text-[#223118] px-3 py-1 rounded-full mb-2">Sensitive</span>
              <h3 className="text-lg font-semibold text-[#223118]">Velvet Shield SPF</h3>
              <div className="text-xs text-[#7d7d6b] mb-4">ZINC OXIDE  NIACINAMIDE</div>
              <button className="border border-[#223118] rounded-md px-4 py-2 text-[#223118] hover:bg-[#f3ede7] transition">View Details</button>
            </div>
          </div>
          {/* Product Card 4 */}
          <div className="bg-white rounded-2xl shadow-sm p-6 flex flex-col items-center">
            <div className="w-full h-48 flex items-center justify-center mb-4"><img src="https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80" alt="Arctic Moisture Balm" className="object-contain h-40" /></div>
            <div className="w-full flex flex-col items-center">
              <span className="text-xs bg-[#f3ede7] text-[#223118] px-3 py-1 rounded-full mb-2">Dry Skin</span>
              <h3 className="text-lg font-semibold text-[#223118]">Arctic Moisture Balm</h3>
              <div className="text-xs text-[#7d7d6b] mb-4">CERAMIDES  SQUALANE</div>
              <button className="border border-[#223118] rounded-md px-4 py-2 text-[#223118] hover:bg-[#f3ede7] transition">View Details</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-[#f3ede7] py-8 px-8 bg-[#fdf7f2] mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto gap-4">
          <div className="text-[#223118] font-serif text-xl font-semibold">SkinGenie</div>
          <div className="text-[#7d7d6b] text-sm text-center md:text-left">
            Bridging the gap between dermatology and daily care through intelligent analysis and premium botanical science.
          </div>
          <div className="flex gap-6 text-[#223118]">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mt-6 text-xs text-[#7d7d6b] gap-2">
          <div>© 2026 SKINGENIE. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">About Us</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
