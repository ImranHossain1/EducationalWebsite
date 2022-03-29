import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';


import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/"></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
