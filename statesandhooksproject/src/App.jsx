import React from "react";
import MyCounter from "./Componenets/MyCounter";
import IncreaseDecreaseCount from "./Componenets/IncreaseDecreaseCount";
import UseEffectForTitle from "./Componenets/UseEffectForTitle";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        width: "100%",
      }}
    >
      <MyCounter />
      <br />
      <IncreaseDecreaseCount />
      <UseEffectForTitle />
    </div>
  );
}

export default App;
