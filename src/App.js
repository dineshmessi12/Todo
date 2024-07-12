// import { Component } from "react";

// import Counter from "./Component/counter/Counter";
import TodoApp from "./Component/todo/TodoApp";
import AuthContext from "./Component/todo/security/AuthContext";

// import Counter from "./Component/counter/Counter";
// import LearningComponent from "./Component/LearningComponent";

// import FirstComponent from "./Component/FirstComponent";
// import SecondComponent from "./Component/SecondComponent";

function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <LearningComponent/> */}
{/* 
      <CounterButton by={1} />
      <CounterButton by={2} />
      <CounterButton by={3} /> */}
      <AuthContext>
      <TodoApp/>
      </AuthContext>
    </div>
  );
}

// function FirstComponent(){
//   return (
//     <div>First Component</div>
//   );
// }
// class SecondComponent extends Component{
//   render(){
//     return (
//       <div>First Component</div>
//     );
//   }
// }

export default App;
