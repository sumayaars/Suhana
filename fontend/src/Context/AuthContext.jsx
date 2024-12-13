import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export default function AuthProvider({children}) {
  const [userToken, setUserToken]=useState(null);
  const [loggedUser,setLoggedUser]=useState(null);
  const [googleUser, setGoogleUser]=useState(null);
  console.log(userToken);
  console.log(googleUser);

  async function getUserInfo() {
    if (userToken) {
      try {
        const response=await axios.get("https://api.escuelajs.co/api/v1/auth/profile",{
          headers: {
            Authorization: `Bearer ${userToken.access_token}`
        }
        })
        setLoggedUser(response.data);
        localStorage.setItem("user", JSON.stringify(userToken));
        
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
      
    }
    
  }

  useEffect(()=>{
    getUserInfo();
  },[userToken,googleUser]);
  return (
    <AuthContext.Provider value={{userToken,setUserToken,loggedUser,setLoggedUser,googleUser,setGoogleUser}}>
     {children}
    </AuthContext.Provider>
  )
}
