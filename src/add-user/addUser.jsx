import { useParams } from "react-router-dom";

const AddUser = () => {
    const {UserId}=useParams()
  return (
    <div className="add-user">
      <div className="title">
        <h1 className="text-center text-primary mb-4">
            {UserId?"ویرایش کاربر":"افزودن کاربر"}
        </h1>
      </div>
      <form className="form-add d-flex flex-column " action="">
        <div className="input-control d-flex flex-column">
          <label className="label" htmlFor="">نام و نام خانوادگی</label>
          <input type="text" className="input-user bg-white" />
        </div>

        <div className="input-control d-flex flex-column">
          <label className="label mt-3 mb-2" htmlFor="">
            نام کاربری
          </label>
          <input type="text" className="input-user bg-white" />
        </div>

        <div className="input-control d-flex flex-column ">
          <label className="label mt-3 mb-2" htmlFor="">
            ایمیل
          </label>
          <input type="text" className="input-user mb-3 bg-white" />
        </div>
        <div className="input-control">
          <label className="label" htmlFor="">آدرس</label>
          <div className="input-address d-flex flex-wrap">
            <input type="text" placeholder="شهر" className="input-user input-addr" />
            <input type="text" placeholder="خیابان" className="input-user input-addr "/>
            <input type="text" placeholder="ادامه آدرس" className="input-user input-addr" />
            <input type="text" placeholder="کد پستی" className="input-user input-addr" />
          </div>
        </div>
        <div className="btn text-left mt-4">
            <button className="bg-primary text-white btn px-4 mr-3" type="button">
              {UserId?"ویرایش":"افزودن"}
            </button>
            <button className="bg-danger text-white btn px-4" type="button">بازگشت</button>
        </div>
      </form>
    </div>
  );
};
export default AddUser;
