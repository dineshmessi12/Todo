import React, {  createContext, useContext, useState } from 'react'
// import { executeBasicAuthentication } from '../api/HelloWorldApi'
import { apiClient } from '../api/ApiClient'

import axios from 'axios'

export const AuthContextProvider=createContext()
export const useAuth = () => useContext(AuthContextProvider)

const AuthContext = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username,setUsername] = useState(null)

    const [token,setToken] = useState(null)

    console.log(token,'>>>>>>>>>>>>>')

    // function loginPage(username,password){
    //     if (username === "user" && password === "password") {
    //         setAuthenticated(true)
    //         setUsername(username)
    //         return true
    //       } else {
    //         setAuthenticated(false)
    //         username(null)
    //         return false
    //       }
    // }

//     async function loginPage(username,password){
       
//       const basicToken = 'Basic ' + window.btoa(username+ ":" + password)
//       console.log(basicToken,"basicToken")
//       // const response = await executeBasicAuthentication(basicToken)
// try {
// const response = await axios.get('http://localhost:8080/basicauth',
//  {
// headers:{
//   Authorization: basicToken
// }
// }
// )
//       console.log(response,'res')

//       console.log(username,password,'>>>>>>>>>')

//       setAuthenticated(false)
//       if (response.status===200) {
//         console.log(response.status,'res status')
//           setAuthenticated(true)
//           setUsername(username)
//           setToken(basicToken)
//           apiClient.interceptors.request.use((config)=>{
//             console.log("<<<<<<<<<<<<<<<<<<<<<<<<")
//             config.headers.Authorization=basicToken
//             return config
//           })
//           return true
//         } else {
//           console.log("login failed")
//           setAuthenticated(false)
//           setUsername(null)
//           setToken(null)
//           return false
//         } 
//       }catch (err) {
// console.log(err,'err')
//       }
//   }

async function loginPage(username,password){
       
  const basicToken = 'Basic ' + window.btoa(username+ ":" + password)
  console.log(basicToken,"basicToken")
  // const response = await executeBasicAuthentication(basicToken)
try {
const response = await axios.post('http://localhost:8080/authenticate',
{username,password}
)
  console.log(response,'res')

  console.log(username,password,'>>>>>>>>>')

  setAuthenticated(false)
  if (response.status===200) {
    const jwtToken = 'Bearer ' + response.data.token
      setAuthenticated(true)
      setUsername(username)
      setToken(jwtToken)
      apiClient.interceptors.request.use((config)=>{
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<")
        config.headers.Authorization=jwtToken
        return config
      })
      return true
    } else {
      console.log("login failed")
      setAuthenticated(false)
      setUsername(null)
      setToken(null)
      return false
    } 
  }catch (err) {
console.log(err,'err')
  }
}
  
    function logoutPage(){
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }  
  return (
  <AuthContextProvider.Provider value={{isAuthenticated,loginPage,logoutPage,username,token}}>
    {children}
  </AuthContextProvider.Provider>
  )
}

export default AuthContext