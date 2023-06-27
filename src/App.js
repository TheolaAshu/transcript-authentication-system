import React from "react";
import{
    BrowserRouter as Router, Routes,Route,useNavigate,
} from "react-router-dom"
import Navbar from './components/Navbar';
import Hero from "./components/Hero";
import SignUp from "./pages/signUp";
import Login from "./pages/login";




 
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
        </Routes>
      </Router>
            
    );
}
export default App;