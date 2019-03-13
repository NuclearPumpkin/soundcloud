import React from 'react';
// import { Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div className="dashboard">
          <div className="dashboard-main">
            <p>Streaming Activities here</p>
          </div>
        </div>
        <div className="dashboard-side">
          <p>This is sidebar</p>
        </div>
      </div>
    );
  }
}
