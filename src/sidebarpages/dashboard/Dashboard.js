import './Dashboard.css';

import React from 'react';

import Chart from '../../components/charts/chart';
import Topbar from './topbar/Topbar';
import Summary from './summary/Summary';
import Bottom from './bottom/Bottom';

function Dashboard() {
  return (
    <div className="dashboard">
      <Topbar />
      <Summary />
      <div className="dashboard__chart">
        <Chart />
      </div>
      <Bottom />
    </div>
  );
}

export default Dashboard;
