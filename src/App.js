import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import EnrollmentSuccessfull from './components/EnrollmentSuccessfull/EnrollmentSuccessfull';


import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ReviewCourses from './components/ReviewCourses/ReviewCourses';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/courses" element={<Courses/>}></Route>
          <Route path="/Review" element={<ReviewCourses/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/enrolled" element={<EnrollmentSuccessfull/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
