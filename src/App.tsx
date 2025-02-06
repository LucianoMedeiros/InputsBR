import { ChangeEvent, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputPhone from "./components/phone/input-phone";
// import { FaSquarePhone } from "react-icons/fa6";

function App() {
  const [value, setValue] = useState("");
  const handlePhoneChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <InputPhone
        name="celular"
        label="Celular"
        value={value}
        onChange={handlePhoneChange}
        mask="+99 (99)99999-9999"
        // icon={<FaSquarePhone />}
        // iconPosition="right"
        labelPosition="left"
      />
      <p>value</p>
      <p style={{ whiteSpace: "pre" }}>{JSON.stringify(value, null, 2)}</p>
    </>
  );
}

export default App;
