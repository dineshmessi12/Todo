import axios from "axios";

axios.create({
    baseURL: "http://localhost:8080",
})
export const HelloWorldApi = ()=> axios.get("/hello-world-bean");

export const retrieveHelloWorldApi = (username)=> axios.get(`/hello-world/path-variable/${username}`);

