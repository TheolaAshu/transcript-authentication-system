import React from "react";
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



 
function App() {
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
        </Routes>
      </Router>
            
    );
}
export default App;