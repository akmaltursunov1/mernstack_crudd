import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const UpdateUser = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  let localUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState({
    userName: localUser.userName,
    email: localUser.email,
    tel: localUser.tel,
  });
  const Submit = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.put(
        `http://localhost:5005/user/updateuser/${id}`,
        user
      );
      if (res.data.success === true) {
        alert("ozgarteildi");
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {" "}
      <div className="container ">
        <div className="row justify-content-center align-items-center align-self-center mt-5">
          <div className="col-md-auto mt-5">
            <form
              className="row g-3 justify-content-center needs-validation"
              noValidate
            >
              <div className="col-md-6">
                <input
                  onChange={changeHandler}
                  type="text"
                  name="userName"
                  className="form-control"
                  value={user.userName}
                  id="validationCustom03"
                  placeholder="ismni yozing..."
                  required
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-6">
                <input
                  onChange={changeHandler}
                  value={user.email}
                  type="text"
                  name="email"
                  className="form-control"
                  id="validationCustom04"
                  required
                  placeholder="email yozing..."
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-6">
                <input
                  type="number"
                  name="tel"
                  onChange={changeHandler}
                  value={user.tel}
                  className="form-control"
                  id="validationCustom05"
                  required
                  placeholder="telni yozing..."
                />
              </div>
              <div className="col-12">
                <button
                  onClick={Submit}
                  className="btn btn-primary"
                  type="submit"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
