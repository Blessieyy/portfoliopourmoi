import React, { useState } from "react";
import '../Experience/Exp.css'

const PerformanceDisplay = () => {
  const [performance, setPerformance] = useState(0);

  const handleInputChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0 && value <= 100) {
      setPerformance(value);
    }
    
  };

  return (
    <div className="performance-container">
      <h3>Performance Overview</h3>
      <input
        type="number"
        min="0"
        max="100"
        value={performance}
        onChange={handleInputChange}
        placeholder="Enter performance (0-100)"
      />
      <div className="performance-bar">
        <div
          className="performance-fill"
          style={{ width: `${performance}%` }}
        ></div>
      </div>
      <p>{performance}%</p>
    </div>
  );
};

export default PerformanceDisplay;