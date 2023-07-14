import React from "react";
import { AuthProvider } from "./context/AuthContext";
import Navigation from "./routes";

function App() {
  return (
    <AuthProvider> 
      <Navigation/>   
    </AuthProvider>
  );
}
export default App;
