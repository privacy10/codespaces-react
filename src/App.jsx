import { useState } from 'react';
import './App.css';

function App() {
  const [energy, setEnergy] = useState(40);
  const [production, setProduction] = useState(60);

  const handleBoost = () => {
    setEnergy((current) => Math.min(current + 30, 100));
    setProduction((current) => Math.min(current + 20, 100));
  };

  return (
    <div className="App">
      <main className="sim-panel">
        <p className="eyebrow">Operations Console</p>
        <h1>Sunrise Valley Simulator</h1>

        <div className="stats-grid">
          <div className="stat-card">
            <span className="label">Power output</span>
            <strong>{production}%</strong>
          </div>
          <div className="stat-card">
            <span className="label">Energy grid</span>
            <strong>{energy}%</strong>
          </div>
        </div>

        <p className="status-line">Energy grid: {energy}%</p>

        <div className="meter-wrap">
          <div className="meter-line">
            <div className="meter-fill" style={{ width: `${energy}%` }} />
          </div>
        </div>

        <button type="button" onClick={handleBoost}>
          Boost Production
        </button>
      </main>
    </div>
  );
}

export default App;
