import logo from './logo.svg';
import './App.css';
import{BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Tasks from './pages/Tasks';
import Test from './pages/Test';
import Login from './pages/Login';
import Registration from './pages/Registration';

function App() {
  return (
    <div className="App"> 
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/registration" element={<Registration/>}></Route>
          <Route path="/tasks/:id" element={<Tasks/>}></Route>
          <Route path="/test" element={<Test/>}></Route>
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
