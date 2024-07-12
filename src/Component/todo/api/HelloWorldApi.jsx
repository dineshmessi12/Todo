
import { apiClient } from "./ApiClient";


export const HelloWorldApi = ()=> apiClient.get("http://localhost:8080/hello-world-bean");

export const retrieveHelloWorldApi = (username,token)=> apiClient.get(`/hello-world/path-variable/${username}`,{
    headers:{
        Authorization:token 
    }
});

export const  executeBasicAuthentication= (token)=> apiClient.get(`/basicauth`,{
    headers:{
        Authorization:token
    }
})

