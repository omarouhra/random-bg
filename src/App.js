import { useState } from "react";

function App() {
  const [color, setColor] = useState("#fffff");

  const getRandomColor = () => {
    let randomColor =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");

    setColor(randomColor);
  };

  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>
      <button onClick={() => getRandomColor()}>Change color {color}</button>
    </div>
  );
}

export default App;
