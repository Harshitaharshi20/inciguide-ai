import axios from "axios";

const API_BASE = "http://localhost:8000";

export const analyzeProduct = async () => {
  const response = await axios.post(`${API_BASE}/analyze-product`, {
    product_name: "Active Serum",
    skin_type: "Sensitive"
  });
  return response.data;
};
