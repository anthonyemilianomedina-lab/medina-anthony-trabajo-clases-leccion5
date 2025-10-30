import React, { useState } from "react";
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState("");
  const [lastValue, setLastValue] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState("");

  const handleButtonClick = () => {
    const numberValue = Number(inputValue);
    
    if (isNaN(numberValue) || inputValue.trim() === "") {
      setError("Por favor ingrese un numero valido");
      return;
    }

    setError("");
    setInputValue("");
    setLastValue(numberValue);
    setHistory(prevHistory => [...prevHistory, numberValue]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (error) setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Medina Sagastume Anthony Emiliano</h1>
        <div className="input-section">
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Ingrese un número"
            className="number-input"
          />
          <button onClick={handleButtonClick} className="submit-button">
            Validar y Agregar
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
        {lastValue && (
          <div className="last-value">
            <h2>Ultimo valor ingresado</h2>
            <p>{lastValue}</p>
          </div>
        )}
        {history.length > 0 && (
          <div className="history-section">
            <h2>Historial de Numeros</h2>
            <table className="history-table">
              <thead>
                <tr>
                  <th>N°</th>
                  <th>Valor Ingresado</th>
                </tr>
              </thead>
              <tbody>
                {history.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;