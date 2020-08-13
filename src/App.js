import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import './App.css';
import Wrapper from './components/Wrapper';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper />
      </div>
    </Provider>
  );
}
export default App;
