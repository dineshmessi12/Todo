
import "./todo.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"; 
import Logout from "./Logout";
// import Footer from "./Footer";
import TodoList from "./TodoList";
import Login from "./Login";
import Welcome from "./Welcome";
import Error from "./Error";
import Header from "./Header";
import AuthContext, { useAuth } from "./security/AuthContext";
import Todo from "./Todo";

const TodoApp = () => {
    function AuthenticatedRoute({children}){
        const authContext = useAuth();
        if(authContext.isAuthenticated){
    return children;
        }
        return <Navigate to ="/" />
    }
  return (
    <div className="todo">
        <AuthContext>
       <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome/:userName" element={
            <AuthenticatedRoute><Welcome /></AuthenticatedRoute>
            } />
          <Route path="*" element={<Error />} />
          <Route path="/todos" element={
            <AuthenticatedRoute> <TodoList /></AuthenticatedRoute> 
            } />
               <Route path="/todos/:id" element={
            <AuthenticatedRoute> <Todo /></AuthenticatedRoute> 
            } />
          <Route path="logout" element={
          <AuthenticatedRoute>  <Logout /></AuthenticatedRoute>
            } />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      </AuthContext>
    </div>
  );
};
export default TodoApp;
