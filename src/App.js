import logo from './logo.svg';
import './App.css';
import PocetnaStranica from './components/PocetnaStranica';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PocetnaStranica />} />
        </Routes>
      </Router >
    </div>
  );
}

export default App;
