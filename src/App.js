import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState({
    input1: "",
    input2: "",
    input3: "",
    area: ""
  });
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="App">
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center"
        }}
      >
        <div className="input">
          <label>input1: </label>
          <input
            type="text"
            name="input1"
            value={input.input1}
            onChange={handleInput}
          />
        </div>
        <div className="input">
          <label>input2: </label>
          <input
            type="text"
            name="input2"
            value={input.input2}
            onChange={handleInput}
          />
        </div>
        <div className="input">
          <label>input3: </label>
          <input
            type="text"
            name="input3"
            value={input.input3}
            onChange={handleInput}
          />
        </div>
        <div className="input">
          <label>area:</label>
          <textarea
            rows={3}
            name="area"
            value={input.area}
            onChange={handleInput}
          />
        </div>
        <input type="submit" style={{ width: "50vw" }} />
      </form>
    </div>
  );
}
