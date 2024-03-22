import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div className="users">
      <div className="users-title">
        <h1 className="title">مدریت کاربران</h1>
      </div>
      <div className="search-add">
        <div className="right">
          <input placeholder="جستجو" className="search-input" type="text" />
        </div>
        <div className="left">
          <Link to={"/User/add"}>
            <button type="button" className=" add-button btn text-white">
              <span>+</span>
            </button>
          </Link>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>عملیات</th>
            <th>ایمیل</th>
            <th>نام کاربر</th>
            <th>نام</th>
            <th>#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <i className="fa-solid fa-trash trash-icon"></i>
              <Link to={"/User/add/1"}>
                <i className="fas fa-edit text-warning edit-icon"></i>
              </Link>
            </td>
            <td>mohammad@gmail.com</td>
            <td>mmad-dev</td>
            <td>محمد</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Users;
