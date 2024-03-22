import { useContext } from "react"
import ContextBtn from "./context/contextBtn"
import { Link } from "react-router-dom"


const Sidebar=()=>{
    const {shawMenu,setShawMenu}=useContext(ContextBtn)
    return(
        <div className="col-2">
            <div className="sidebar" style={shawMenu?{right:0}:{} }>
            <ul className="list">
                <li className="list-item img-sidebar">
                    <img src="./public/assetse/hairstyles-stretched-faces-3.jpg" alt="" />
                </li>
                <li className="list-item">
                    <Link to="/User" className="list-item-link">کاربران</Link>
                </li>
                <li className="list-item">
                    <Link to="/Post" className="list-item-link">پست ها</Link>
                </li>
                <li className="list-item">
                    <Link to="/Gallery" className="list-item-link">گالری</Link>
                </li>
                <li className="list-item">
                    <Link to="/Todo" className="list-item-link">کار ها</Link>
                </li>
            </ul>
        </div>
        </div>
    )
}

export default Sidebar