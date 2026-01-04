function ResultCard({ result }) {
  // 🔍 Safe debug (INSIDE component)
  console.log("ResultCard received:", result);

  // Prevent render before data arrives
  if (!result) return null;

  return (
    <div style={{ marginTop: "40px" }}>
      {/* Product Overview */}
      <section style={styles.section}>
        <h2>Product Overview</h2>
        <p>
          <b>Name:</b>{" "}
          {result.product_overview?.product_name || "N/A"}
        </p>
        <p>
          <b>Skin Type:</b>{" "}
          {result.product_overview?.skin_type || "N/A"}
        </p>
        <p>
          <b>Routine Step:</b>{" "}
          {result.product_overview?.routine_step || "N/A"}
        </p>
      </section>

      {/* Ingredient Analysis */}
      <section style={styles.section}>
        <h2>Ingredient Insights</h2>

        {result.ingredient_insights?.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3>{item.ingredient}</h3>

            <p>
              <b>Risk:</b>{" "}
              <span style={{ color: riskColor(item.risk) }}>
                {item.risk}
              </span>
            </p>

            {item.warning && (
              <p style={{ color: "#ff6b6b" }}>
                ⚠ {item.warning}
              </p>
            )}

            <p style={{ fontSize: "14px", opacity: 0.9 }}>
              {item.description}
            </p>
          </div>
        ))}
      </section>

      {/* Routine Guidance */}
      <section style={styles.section}>
        <h2>Routine Guidance</h2>
        <ul>
          {result.routine_guidance?.notes?.map((note, i) => (
            <li key={i}>{note}</li>
          ))}
        </ul>
      </section>

      {/* Confidence */}
      <section style={styles.section}>
        <h2>AI Confidence</h2>
        <p>
          Level: <b>{result.confidence?.level}</b>
        </p>
        <p>
          Score: <b>{result.confidence?.score}</b>
        </p>
      </section>
    </div>
  );
}

const riskColor = (risk) => {
  if (risk === "High") return "#ff6b6b";
  if (risk === "Medium") return "#feca57";
  return "#1dd1a1";
};

const styles = {
  section: {
    marginBottom: "30px",
  },
  card: {
    background: "#1a1a1a",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "12px",
  },
};

export default ResultCard;
