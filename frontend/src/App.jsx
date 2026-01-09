import React from "react";
import Home from "./Home/home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import ContactUs from "./components/ContactUs";
import {Toaster} from "react-hot-toast"
import { useAuth } from "./context/AuthProvider";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div className="dark:bg-white dark:text-black">
        <Routes>
          <Route path="/" element={<Home />} />
           <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  );
};

export default App;
