import { type ReactNode } from 'react';
import './Statistics.css';

interface StatisticsProps {
  data: ReactNode;
  description: string;
}


function Statistics({ data, description }: StatisticsProps) {
  return (
    <div className="statistics">
      <h2>{data}</h2>
      <p>{description}</p>
    </div>
  )
}

export default Statistics;