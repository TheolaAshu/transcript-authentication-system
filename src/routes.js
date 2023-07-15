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
import AdminSign from "./pages/adminpg/adminsign";
import AllTranscripts from "./pages/adminpg/allTranscripts";
import Students from "./pages/adminpg/students";
import UploadTrans from "./pages/adminpg/uploadTrans";
import LoadingPage from "./pages/assets/loading";
import ValidSign from "./pages/validatorpg/validsign";
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
          path="/"
          element={
            <>
              <Navbar />, <Hero />
            </>
          }
        />
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
          path="/asignup"
          element={
            <>
              <AdminSign />
            </>
          }
        />
        <Route
          exact
          path="dashboard"
          element={
            <>
              {currentUser && currentUser?.role === "admin" ? (
                <Dashboard />
              ) : (
                <Navigate to="/adminlogin" />
              )}
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
          path="/allTranscripts"
          element={
            <>
              {currentUser && currentUser?.role === "admin" ? (
                <AllTranscripts />
              ) : (
                <Navigate to="/adminlogin" />
              )}
            </>
          }
        />
        <Route
          exact
          path="/uploadTrans"
          element={
            <>
              {currentUser && currentUser?.role === "admin" ? (
                <UploadTrans />
              ) : (
                <Navigate to="/adminlogin" />
              )}
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
                <Transcript />
              ) : (
                <Navigate to="/login" />
              )}
            </>
          }
        />
        <Route
          exact
          path="/vsignup"
          element={
            <>
              <ValidSign />
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
            <VerifyingPage/>
              {/* {currentUser && currentUser?.role === "validator" ? (
                <VerifyingPage />
              ) : (
                <Navigate to="/validlogin" />
              )} */}
            </>
          }
        />
        <Route
          exact
          path="/uploadpdf"
          element={
            <>
              {currentUser && currentUser?.role === "validator" ? (
                <UploadPdf />
              ) : (
                <Navigate to="/validlogin" />
              )}
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
