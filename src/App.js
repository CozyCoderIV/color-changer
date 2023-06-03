import "./App.css";
import { useState } from "react";

function App() {
  // Attributes
  let colorCircle = document.getElementById("circle");
  let colorDisplay = document.getElementById("color");

  // Hooks
  const [color, setColor] = useState("none");

  // Function
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  // JSX
  return (
    <div className="App" id="app-bg">
      {/* Title */}
      <div id="title_container">
        <h1>Welcome to Color Changer</h1>
      </div>

      <div id="content-container">
        {/* form input */}
        <form>
          <label>Enter Color</label>
          <input type="text" value={color} onChange={handleChange}></input>
        </form>
        <button
          className="toggle"
          onClick={() => {
            colorCircle.style.backgroundColor = color;
            colorDisplay.innerText = color;
          }}
        >
          Change Color
        </button>
      </div>

      <div className="colorWheel" id="circle">
        <h2 id="color">{}</h2>
      </div>
    </div>
  );
}

export default App;
