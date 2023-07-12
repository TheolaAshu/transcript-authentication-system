import React, { useEffect, useState } from "react";
import{
    BrowserRouter as Router, Routes,Route,useNavigate,
} from "react-router-dom"
import Navbar from './components/navbar';
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
import VerifyingPage from "./pages/validatorpg/verify";
import UploadPdf from "./pages/validatorpg/uploadpdf";
import ValidationPage from "./pages/validatorpg/validnotvalid";
import { AuthProvider } from "./Auth";

function App() {

//  const [backendData, setBackendData] = useState([{}])
//    useEffect(() => {
//     fetch("http://localhost:5000/api").then(
//      response => response.json() 
//     ).then(
//      data => {
//       console.log(data);
//       setBackendData(data)
//      } 
//     )
//    },[])
   
    return(
      
    
    <AuthProvider>  
      <Router>
          <Routes>
          <Route
            exact 
            path="/hero"
            element={
                <>
              <Navbar/>, <Hero/>
              </>
            }
            />
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
            path="/alltranscripts"
            element={
                <>
              <AllTranscripts/>
        
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
            path="dashboard"
            element={
                <>
                <Dashboard/>
        
                </>
            }
            />
            <Route
            exact 
            path="/transcripts"
            element={
                <>
                <Transcript/>
        
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
            path="/uploadtrans"
            element={
                <>
              <UploadTrans/>
        
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
      </AuthProvider>
            
    );
}
export default App;