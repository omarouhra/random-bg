import { useState } from "react";

function App() {
  const [index, setIndex] = useState(0);
  const colors = ["red", "green", "yellow", "purple", "black"];

  const getRandomColor = () => {
    let randomNumber = Math.floor(Math.random() * colors.length);
    setIndex(randomNumber);
  };

  return (
    <div style={{ backgroundColor: colors[index], height: "100vh" }}>
      <button onClick={() => getRandomColor()}>Change color {index}</button>
    </div>
  );
}

export default App;
