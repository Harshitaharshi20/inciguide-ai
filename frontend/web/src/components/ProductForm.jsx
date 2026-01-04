import { useState } from "react";

function ProductForm({ onAnalyze, loading }) {
  const [productName, setProductName] = useState("");
  const [skinType, setSkinType] = useState("Sensitive");
  const [routineStep, setRoutineStep] = useState("Serum");
  const [ingredients, setIngredients] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const ingredientList = ingredients
      .split(",")
      .map((i) => i.trim())
      .filter(Boolean);

    onAnalyze({
      product_name: productName,
      skin_type: skinType,
      routine_step: routineStep,
      ingredients: ingredientList,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Analyze a Skincare Product</h2>

      <input
        type="text"
        placeholder="Product Name (optional)"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
        style={styles.input}
      />

      <select
        value={skinType}
        onChange={(e) => setSkinType(e.target.value)}
        style={styles.input}
      >
        <option>Sensitive</option>
        <option>Oily</option>
        <option>Dry</option>
        <option>Combination</option>
        <option>Normal</option>
      </select>

      <select
        value={routineStep}
        onChange={(e) => setRoutineStep(e.target.value)}
        style={styles.input}
      >
        <option>Cleanser</option>
        <option>Toner</option>
        <option>Serum</option>
        <option>Moisturizer</option>
        <option>Sunscreen</option>
      </select>

      <textarea
        placeholder="Ingredients (comma separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        rows={5}
        style={styles.textarea}
      />

      <button type="submit" disabled={loading} style={styles.button}>
        {loading ? "Analyzing..." : "Analyze Product"}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: "500px",
    marginTop: "30px",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#1a1a1a",
    color: "white",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #444",
    background: "#1a1a1a",
    color: "white",
  },
  button: {
    padding: "12px",
    width: "100%",
    borderRadius: "8px",
    background: "#646cff",
    color: "white",
    border: "none",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default ProductForm;
