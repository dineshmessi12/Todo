import React, {  createContext, useContext, useState } from 'react'

export const AuthContextProvider=createContext()
export const useAuth = () => useContext(AuthContextProvider)

const AuthContext = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    function loginPage(username,password){
        if (username === "user" && password === "password") {
            setAuthenticated(true)
            return true
          } else {
            setAuthenticated(false)
            return false
          }
    }
    function logoutPage(){
        setAuthenticated(false)
    }  
  return (
  <AuthContextProvider.Provider value={{isAuthenticated,loginPage,logoutPage}}>
    {children}
  </AuthContextProvider.Provider>
  )
}

export default AuthContext