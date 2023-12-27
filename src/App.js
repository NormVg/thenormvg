import './App.css';
import HomePage from './pages/HomePage';
import Header from './components/Header';

import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage/>
      <Analytics />
    </div>
  );
}

export default App;
