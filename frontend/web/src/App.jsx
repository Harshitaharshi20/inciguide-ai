import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import FaceScan from "./components/FaceScan";
import ProductForm from "./components/ProductForm";
import ResultCard from "./components/ResultCard";
import Toast from "./components/Toast";
import { analyzeProduct } from "./services/api";

export default function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const handleAnalyze = async (payload) => {
    try {
      setLoading(true);
      setResult(null);
      const data = await analyzeProduct(payload);
      if (data.error) {
        setToast({ message: data.message || "Analysis failed", type: "error" });
      } else {
        setResult(data);
        setToast({ message: "Analysis complete!", type: "success" });
      }
    } catch (err) {
      setToast({ message: "Connection error. Please check your backend.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/face-scan" element={<FaceScan />} />
        <Route
          path="/analyze"
          element={
            <div className="min-h-screen bg-[#fdf7f2] pb-20 px-4 md:px-8">
              <nav className="w-full flex items-center justify-between px-8 py-4 border-b border-[#f3ede7] bg-[#fdf7f2]">
                <div className="text-2xl font-semibold text-[#223118] font-serif">
                  Skin<span className="font-sans">Genie</span>
                </div>
                <div className="flex items-center gap-8">
                  <a href="/" className="text-[#223118] font-medium hover:underline">Home</a>
                  <span className="text-[#223118] font-medium underline">Analyze</span>
                  <a href="#" className="text-[#223118] font-medium hover:underline">Products</a>
                  <button className="bg-[#223118] text-white px-6 py-2 rounded-md ml-4">Login</button>
                </div>
              </nav>
              <main className="max-w-5xl mx-auto">
                <ProductForm onAnalyze={handleAnalyze} loading={loading} />
                <div className="mt-16">
                  {!result && !loading && (
                    <div className="text-center py-20 bg-white/50 rounded-3xl border-2 border-dashed border-blue-100">
                      <div className="text-6xl mb-4 opacity-50">🧴</div>
                      <h3 className="text-xl font-bold text-gray-400 uppercase tracking-widest">Ready for Analysis</h3>
                      <p className="text-gray-400 mt-2">Paste your product ingredients above to get started.</p>
                    </div>
                  )}
                  {result && <ResultCard result={result} />}
                </div>
              </main>
              {toast && (
                <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

