
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages';
import SignIn from './pages/signin'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<SignIn />} />
      </Routes>


    </Router>
  );
}

export default App;
