import React, {  createContext, useContext, useState } from 'react'

export const AuthContextProvider=createContext()
export const useAuth = () => useContext(AuthContextProvider)

const AuthContext = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username,setUsername] = useState(null)

    function loginPage(username,password){
        if (username === "user" && password === "password") {
            setAuthenticated(true)
            setUsername(username)
            return true
          } else {
            setAuthenticated(false)
            username(null)
            return false
          }
    }
    function logoutPage(){
        setAuthenticated(false)
    }  
  return (
  <AuthContextProvider.Provider value={{isAuthenticated,loginPage,logoutPage,username}}>
    {children}
  </AuthContextProvider.Provider>
  )
}

export default AuthContext