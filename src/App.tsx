import React, { useEffect, useState } from 'react';
import { API } from 'aws-amplify';
import logo from './logo.svg';
import './App.css';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {}, []);

  const greeting = async () => {
    const greetingData = await API.get('myapi', '/greeting', {});
    setData(greetingData.message);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>{data}</h2>
      </header>
    </div>
  );
}

export default App;
