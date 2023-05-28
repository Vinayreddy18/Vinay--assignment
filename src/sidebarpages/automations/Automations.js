import React from 'react';
import { Link } from 'react-router-dom';

function Automations() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f5f5f5',
      }}
    >
      <div
        style={{
          backgroundColor: '#ffffff',
          padding: '20px',
          borderRadius: '5px',
        }}
      >
        <h1 style={{ color: '#333333' }}>Automations page</h1>
        <p style={{ color: '#666666' }}>
          Content of the Automations page goes here.
        </p>
        <p style={{ color: '#666666' }}>
          Go back to the{' '}
          <Link to="/" style={{ color: '#007bff', textDecoration: 'none' }}>
            home page
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default Automations;
