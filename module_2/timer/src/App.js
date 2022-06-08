import React from "react";
import TimerV2 from "./components/TimerV2"
import TimerV1 from "./components/TimerV1";

const styles = {
  content: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#000",
    color: '#fff',
    fontSize: "60px"
  },
}

function App() {
  return (
    <div style={styles.content}>
      <TimerV1 />
      <TimerV2 />
    </div>
  );
};

export default App;
