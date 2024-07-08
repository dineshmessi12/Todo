
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { HelloWorldApi, retrieveHelloWorldApi } from "./api/HelloWorldApi";

const Welcome = () => {
  const { userName } = useParams();
  const [message, setMessage] = useState(null);
  function CallHelloWorld() {

   console.log('CallHelloWorld')
    // axios
      // .get("http://localhost:8080/hello-world")
      // .then((response) => success(response))
      // .catch((error) => errorResponse(error));
      HelloWorldApi()
      // retrieveHelloWorldApi('madhan')
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
      <div className="btn btn-success m-5" on onClick={CallHelloWorld}>
        Call hello world
      </div>
      <div className="text-info">{message}</div>
    </div>
  );
};

export default Welcome;
