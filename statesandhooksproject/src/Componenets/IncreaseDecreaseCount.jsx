import React, { useState } from "react";
import IncreaseDecreaseCounteDisplayer from "./IncreaseDecreaseCounteDisplayer";

function IncreaseDecreaseCount() {
  let [count, setCount] = useState(0);
  return (
    <div style={{ margin: "50px" }}>
      <IncreaseDecreaseCounteDisplayer count={count} />
      <button
        style={{
          padding: "5px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "green",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={() => setCount(0)}
      >
        Reset count
      </button>
      <button
        style={{
          padding: "5px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "green",
          cursor: "pointer",
          margin: "10px",
        }}
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        Increase count
      </button>

      <button
        style={{
          padding: "5px",
          borderRadius: "5px",
          color: "white",
          backgroundColor: "green",
          cursor: "pointer",
          marginBottom: "10px",
        }}
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        Decrease count
      </button>
    </div>
  );
}

export default IncreaseDecreaseCount;
