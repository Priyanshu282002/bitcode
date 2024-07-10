import { Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Practice from "./pages/Practice";
import { useState } from "react";

function App() {
  const[isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <div className="App">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/practice" element={<Practice/>}/>
      </Routes>
    </div>
  );
}

export default App;
