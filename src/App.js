import logo from './logo.svg';
import './App.css';
import PocetnaStranica from './components/PocetnaStranica';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InfoStranica from './components/InfoStranica';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PocetnaStranica />} />
          <Route path="/info" element={<InfoStranica />} />

        </Routes>
      </Router >
    </div>
  );
}

export default App;
