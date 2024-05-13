import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddUser = () => {
  //   add user
  const navigate = useNavigate();

  const [adduser, setAddUser] = useState({
    userName: "",
    email: "",
    tel: "",
  });

  const handleChange = (prop) => (e) => {
    setAddUser({ ...adduser, [prop]: e.target.value });
  };
  const { userName, email, tel } = adduser;
  const Submit = async (e) => {
    try {
      e.preventDefault();

      let add = await axios.post("http://localhost:5005/user/add", {
        userName,
        email,
        tel,
      });
      if (add.data.success === true) {
        setAddUser({ userName: "", email: "", tel: "" });
        navigate("/");
        alert("qoshildi");
      }
      console.log(add);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container ">
        <div className="row justify-content-center align-items-center align-self-center mt-5">
          <div className="col-md-auto mt-5">
            <form
              className="row g-3 justify-content-center needs-validation"
              noValidate
            >
              <div className="col-md-6">
                <input
                  onChange={handleChange("userName")}
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  placeholder="ismni yozing..."
                  required
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-6">
                <input
                  onChange={handleChange("email")}
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  required
                  placeholder="email yozing..."
                />
              </div>
              <div className="w-100"></div>
              <div className="col-md-6">
                <input
                  onChange={handleChange("tel")}
                  type="number"
                  className="form-control"
                  id="validationCustom03"
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
    </>
  );
};
