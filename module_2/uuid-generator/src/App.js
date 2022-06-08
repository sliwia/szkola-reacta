import React from "react";
import { v4 as uuidv4 } from 'uuid';
import "./App.css"

const styles = {
  content: {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: '#000',
    color: '#fff',
    fontSize: "20px"
  },
  mainTitle: {
    fontSize: "60px"
  },
  versionText: {
    fontStyle: "italic",
  }
}

function App() {
  return (
    <div style={styles.content}>
      <h1 style={styles.mainTitle}>UUID Generator</h1>
      {`Your id: ${uuidv4()}`}
      <div style={styles.versionText}>(version: 4)</div>
    </div>
  );
}

export default App;
