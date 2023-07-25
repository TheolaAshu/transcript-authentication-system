import React, { useState } from "react";
import { BASE_URL } from "../config";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useState('')

  const login = async (email, password, role = 'student') => {
    setLoading(true)
    const data = {
      email: email,
      password: password,
    };
    await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data)

        if(role !== data.userProfileData.role){
          setError('This account is not authorised to access this dashboard')
          setLoading(false)
          return
        }
        if (data.userProfileData) {
          setCurrentUser(data.userProfileData);
          setToken(data.accessToken)
        }

        if (data.error) {
          console.log(data.error);
          setError(data.error);
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
        setError(error.message);
        setLoading(false)
      });
  };

  const register = async (email, password, matricule, name, role) => {
    setLoading(true);
    const data = {
      email: email,
      password: password,
      profileData: {
        matricule,
        name,
        email,
        role
      },
    };
    await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        console.log(data);

        if (data.error) {
          setError(data.error);
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error registering user:", error);
        setError(error.message);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        login,
        register,
        loading,
        error,
        setError,
        token
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
