import { useState } from "react";
import { analyzeProduct } from "./services/api";
import ProductForm from "./components/ProductForm";
import ResultCard from "./components/ResultCard";


function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async (payload) => {
    try {
      setLoading(true);
      setError(null);

      const data = await analyzeProduct(payload);
      setResult(data);
    } catch (err) {
      setError("Failed to analyze product. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
  <div style={{ color: "white", padding: "40px" }}>
    <h1 className="text-4xl font-bold text-blue-700">InciGuide </h1>
    <p>AI-powered skincare ingredient analysis</p>

    <ProductForm onAnalyze={handleAnalyze} loading={loading} />

    {error && <p style={{ color: "red" }}>{error}</p>}

    {result && <ResultCard result={result} />}
  </div>
);

}

export default App;
