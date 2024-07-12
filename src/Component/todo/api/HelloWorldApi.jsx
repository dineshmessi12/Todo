import axios from "axios";

const apiClient =axios.create({
    baseURL: "http://localhost:8080",
})
export const HelloWorldApi = ()=> apiClient.get("http://localhost:8080/hello-world-bean");

export const retrieveHelloWorldApi = (username)=> apiClient.get(`/hello-world/path-variable/${username}`);

