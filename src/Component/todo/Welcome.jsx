
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HelloWorldApi, retrieveHelloWorldApi } from "./api/HelloWorldApi";
import { useAuth } from "./security/AuthContext";

const Welcome = () => {
  const { userName } = useParams();
  const [message, setMessage] = useState(null);

 const authContext= useAuth()
  function CallHelloWorld() {
    // axios
      // .get("http://localhost:8080/hello-world")
      // .then((response) => success(response))
      // .catch((error) => errorResponse(error));
      // HelloWorldApi()
      retrieveHelloWorldApi('madhan',authContext.token)
      .then((response) => success(response))
      .catch((error) => errorResponse(error));
  }

  function success(response) {
    console.log(response);
    setMessage(response.data.message);
  }
  function errorResponse(error) {
    console.log(error);
  }
  return (
    <div className="welcome">
      <div>
        <h1>Welcome {userName}</h1>
      </div>
      <div>
        Manage Your Todos -<Link to="/todos">Go here</Link>
      </div>
      <div className="btn btn-success m-5"  onClick={CallHelloWorld}>
        Call hello world
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
};

export default Welcome;
