import logo from './logo.svg';
import './App.css';
import SingUp from './SingUp/SingUp';
import Loder from './SingUp/loder';
import Toaster from './SingUp/Toaster';
import { Route, Routes } from 'react-router-dom'

import Login from './SingUp/Login';

function App() {
  return (
    <div className="">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

  <Routes >

    <Route path='/Singup' element={<SingUp />} />
    <Route path='/' element={<Login />} />

  </Routes>
      {/* <SingUp /> */}
      {/* <Loder /> */}
      {/* <Toaster /> */}
      {/* <Login  /> */}
    </div>
  );
}

export default App;
