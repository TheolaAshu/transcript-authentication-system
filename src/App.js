import React, { useEffect, useState } from "react";
import{
    BrowserRouter as Router, Routes,Route,useNavigate,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import SignUp from "./pages/studentspg/signUp";
import Login from "./pages/studentspg/login";
import Alltranscripts from "./pages/studentspg/allTranscripts";
import Adminlogin from "./pages/adminpg/adminlogin";
import Students from "./pages/adminpg/students";
import LoadingPage from "./pages/adminpg/loading";
import UploadPage from "./pages/adminpg/upload"
import Validlogin from "./pages/validatorpg/validlogin";
import VerifyingPage from "./pages/validatorpg/verify";
import UploadPdf from "./pages/validatorpg/uploadpdf";
import ValidationPage from "./pages/validatorpg/validnotvalid";
 
function App() {

 const [backendData, setBackendData] = useState([{}])
   useEffect(() => {
    fetch("http://localhost:5000/api").then(
     response => response.json() 
    ).then(
     data => {
      console.log(data);
      setBackendData(data)
     } 
    )
   },[])
   
    return(
      
    
        
      <Router>
          <Routes>
            <Route
            exact 
            path="/adminlogin"
            element={
                <>
              <Adminlogin/>
        
                </>
            }
            />
            <Route
            exact 
            path="/students"
            element={
                <>
              <Students/>
        
                </>
            }
            />
            <Route
            exact 
            path="/loading"
            element={
                <>
              <LoadingPage/>
        
                </>
            }
            />
            <Route
            exact 
            path="/upload"
            element={
                <>
              <UploadPage/>
        
                </>
            }
            />
            <Route
            exact 
            path="/"
            element={
                <>
              <Navbar/>
              <Hero/>
        
                </>
            }
            />
            <Route
            exact
            path="/signup"
            element={
              <>
              <SignUp/>

              </>
            }
               />
            <Route
            exact 
            path="/login"
            element={
                <>
                <Login/>
        
                </>
            }
            />
            <Route
            exact 
            path="/allTranscripts"
            element={
                <>
                <Alltranscripts/>
        
                </>
            }
            />
            <Route
            exact 
            path="/validlogin"
            element={
                <>
              <Validlogin/>
        
                </>
            }
            />
            <Route
            exact 
            path="/verify"
            element={
                <>
              <VerifyingPage/>
        
                </>
            }
            />
            <Route
            exact 
            path="/uploadpdf"
            element={
                <>
              <UploadPdf/>
        
                </>
            }
            />
            <Route
            exact 
            path="/valid"
            element={
                <>
              <ValidationPage/>
        
                </>
            }
            />
        </Routes>
      </Router>
            
    );
}
export default App;