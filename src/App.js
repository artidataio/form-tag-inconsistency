import { useState } from "react";
import "./styles.css";

export default function App() {
  const [input, setInput] = useState({
    text: "",
    number: 0,
    range: 50,
    checkbox: false,
    area: "",
    text2: ""
  });
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleCheckbox = (e) => {
    setInput((prev) => ({ ...prev, checkbox: e.target.checked }));
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
        <input
          type="text"
          name="text"
          value={input.text}
          onChange={handleInput}
          placeholder="text"
        />
        <input
          type="number"
          name="number"
          value={input.number}
          onChange={handleInput}
          placeholder="number"
        />
        <input
          type="range"
          name="range"
          value={input.range}
          onChange={handleInput}
          min={0}
          max={100}
        />
        <input
          type="checkbox"
          id="scales"
          name="checkbox"
          checked={input.checkbox}
          onChange={handleCheckbox}
        />
        <textarea
          rows={3}
          name="area"
          value={input.area}
          onChange={handleInput}
          placeholder="area"
        />
        <input
          type="text"
          name="text2"
          value={input.text2}
          onChange={handleInput}
          placeholder="text2"
        />
        <input type="submit" style={{ width: "50vw" }} />
      </form>
    </div>
  );
}
