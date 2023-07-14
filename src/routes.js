import React from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import SignUp from "./pages/studentspg/signUp";
import Login from "./pages/studentspg/login";
import Transcript from "./pages/studentspg/transcript";
import Dashboard from "./pages/adminpg/dashboard";
import Adminlogin from "./pages/adminpg/adminlogin";
import AllTranscripts from "./pages/adminpg/allTranscripts";
import Students from "./pages/adminpg/students";
import UploadTrans from "./pages/adminpg/uploadTrans";
import LoadingPage from "./pages/assets/loading";
import Validlogin from "./pages/validatorpg/validlogin";
import VerifyingPage from "./pages/assets/verify";
import UploadPdf from "./pages/validatorpg/uploadpdf";
import ValidationPage from "./pages/assets/validnotvalid";

const Navigation = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/hero"
          element={
            <>
              <Navbar />, <Hero />
            </>
          }
        />
        <Route
          exact
          path="/adminlogin"
          element={
            <>
              <Adminlogin />
            </>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            <>
            {currentUser && currentUser?.role === "admin" ? (
                <Students />
              ) : (
                <Navigate to="/adminlogin" />
              )}
              <Dashboard />
            </>
          }
        />
        <Route
          exact
          path="/students"
          element={
            <>
              {currentUser && currentUser?.role === "admin" ? (
                <Students />
              ) : (
                <Navigate to="/adminlogin" />
              )}
            </>
          }
        />
        <Route
          exact
          path="/alltranscripts"
          element={
            <>
            {currentUser && currentUser?.role === "admin" ? (
                <Students />
              ) : (
                <Navigate to="/adminlogin" />
              )}
              <AllTranscripts />
            </>
          }
        />
        <Route
          exact
          path="/uploadtrans"
          element={
            <>
            {currentUser && currentUser?.role === "admin" ? (
                <Students />
              ) : (
                <Navigate to="/adminlogin" />
              )}
              <UploadTrans />
            </>
          }
        />
        <Route
          exact
          path="/loading"
          element={
            <>
              <LoadingPage />
            </>
          }
        />
        <Route
          exact
          path="/signup"
          element={
            <>
              <SignUp />
            </>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />
        
        <Route
          exact
          path="/transcripts"
          element={
            <>
            {currentUser && currentUser?.role === "student" ? (
                <Students />
              ) : (
                <Navigate to="/login" />
              )}
              <Transcript />
            </>
          }
        />
        <Route
          exact
          path="/validlogin"
          element={
            <>
              <Validlogin />
            </>
          }
        />
        <Route
          exact
          path="/verify"
          element={
            <>
            {currentUser && currentUser?.role === "validator" ? (
                <Students />
              ) : (
                <Navigate to="/validlogin" />
              )}
              <VerifyingPage />
            </>
          }
        />
        <Route
          exact
          path="/uploadpdf"
          element={
            <>
            {currentUser && currentUser?.role === "validator" ? (
                <Students />
              ) : (
                <Navigate to="/validlogin" />
              )}
              <UploadPdf />
            </>
          }
        />
        <Route
          exact
          path="/valid"
          element={
            <>
              <ValidationPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default Navigation;
