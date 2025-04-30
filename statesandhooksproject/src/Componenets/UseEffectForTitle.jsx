import React, { useState, useEffect } from "react";

function UseEffectForTitle() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    // This will run only once when component mounts
    alert("Component is mounted");
  }, []);
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run when count changes

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "green",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click me
      </button>
      <div style={{ marginTop: "20px", fontSize: "20px" }}>Count: {count}</div>
    </div>
  );
}

export default UseEffectForTitle;
