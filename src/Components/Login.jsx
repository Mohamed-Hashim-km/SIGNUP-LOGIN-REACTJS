import React, { useRef, useState } from "react";
// import Sighn from "./Sighn";
import Logout from "./Logout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [emails, setEmial] = useState();
  // const [passwords, setPass] = useState();
  // const [logouts, setlogouts] = useState(false);
  const emails = useRef();
  const passwords = useRef();

  const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("UserInfo"));

  const SubmitHandler = (e) => {
    e.preventDefault();
    if (storedData.Email == emails.current.value && storedData.Password == passwords.current.value) {
      toast.success("Logged Successfully!");
      // setlogouts(true);
      // setisReg(true);

      navigate("/logged");
    } else {
      toast.error("Wrong");
    }
  };

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="rounded-xl box shadow-xl">
          <div className="text-center text-2xl font-extrabold py-5 bg-purple-600 rounded-md text-white">Login Form</div>
          <form onSubmit={SubmitHandler}>
            <div>
              <input type="email" className="border-2 border-gray-500 rounded-3xl ps-4 py-1 mb-3 outline-purple-600 mx-10 mt-4" required placeholder="EMAIL" ref={emails} />
            </div>
            <div>
              <input type="password" required placeholder="PASSWORD" className="border-2  border-gray-500 rounded-3xl ps-4 py-1 mb-3 outline-purple-600 mx-10" ref={passwords} />
            </div>
            <div className="text-center font-bold ">
              <input type="submit" className="border-2 border-gray-500 px-3 py-1 rounded-md bg-purple-600 my-5 text-white  cursor-pointer" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
