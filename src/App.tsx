import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import RootRoute from './app/routes';
import { Store } from './app/store';

function App() {
  return (
      <>
       <Provider store={Store}>        
          <RootRoute />
       </Provider>
      </>
  );
}

export default App;
