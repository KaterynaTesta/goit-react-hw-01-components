import React from 'react';
import PropTypes from 'prop-types';
import Statistics from './StatsEl';
import { Section, Title, StatsItem, StatsElement } from './Statistics.styled';

const StatisticsList = ({ stats, title, label }) => (
  <Section>
    {title && <Title>{title}</Title>}
    <StatsItem>
      {stats.map(item => (
        <StatsElement key={item.id} Type={stats}>
          <span className="label">{item.label}</span>
          <span className="percentage">{item.percentage}%</span>
        </StatsElement>
      ))}
    </StatsItem>
  </Section>
);

StatisticsList.defaultProps = {
  percentage: 0,
};

StatisticsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};
export default StatisticsList;
