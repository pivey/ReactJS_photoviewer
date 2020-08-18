import React from 'react';
import './tailwind.output.css';
import GlobalStyleSheet from './components/GlobalStyleSheet';
import Router from './routing/Routing';
import { BontouchContextProvider } from './context/AppContext';

function App() {
  return (
    <>
      <BontouchContextProvider>
        <GlobalStyleSheet />
        <div className="container">
          <Router />
        </div>
      </BontouchContextProvider>
    </>
  );
}

export default App;
