import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
   <Router>
					<Routes>
          <Route exact path="/" element={<Navigate to="/dashboard" />}/>
          <Route path="/dashboard" element={<Dashboard/>} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;
