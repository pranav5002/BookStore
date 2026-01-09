import React from "react";
import Home from "./Home/home";
import { Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
      </div>
    </>
  );
};

export default App;
