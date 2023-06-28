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





 
function App() {
    return(
        
      <Router>
          <Routes>
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