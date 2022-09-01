import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './views/landing';
import Login from './views/login';
import Register from './views/register';
import Dashboard from './views/dashboard';
import Error from './views/error';
import './assets/css/App.css';

function App() {
  return (
    <div id="app-window">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
