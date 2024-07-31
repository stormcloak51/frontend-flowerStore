import './App.css';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
// import Cart from './components/Cart'; 

function App() {

  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
