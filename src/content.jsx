import { useContext } from "react";
import Gallery from "./gallery/gallery";
import Post from "./posts/posts";
import Todo from "./todos/todos";
import Users from "./users/users";
import ContextBtn from "./context/contextBtn";
import { Route, Routes } from "react-router-dom";
import AddUser from "./add-user/addUser";

const Content = () => {
    const {shawMenu,setShawMenu}=useContext(ContextBtn)

    const handelSetShawMnu=()=>{
        setShawMenu(!shawMenu)
    }
  return (
    <div className="col-sm-10 col-12 d-flex flex-column justify-content-center">
      <i onClick={handelSetShawMnu} className="fas fa-bars menu-icon"></i> 
      <Routes>
        <Route path="/User" element={<Users/>} />
        <Route path="/User/add" element={<AddUser/>} >
          <Route path=":UserId" />
        </Route>
        <Route path="/Post" element={<Post/>} />
        <Route path="/Gallery" element={<Gallery/>} />
        <Route path="/Todo" element={<Todo/>} />
        <Route path="/*" element={<Users/>} />
      </Routes> 
    </div>
  );
};
export default Content;
