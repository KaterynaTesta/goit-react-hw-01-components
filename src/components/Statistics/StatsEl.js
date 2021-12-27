import React from 'react';

const StatisticsElement = ({ label, percentage }) => (
  <ul>
    <li>
      <span>{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  </ul>
);

export default StatisticsElement;
