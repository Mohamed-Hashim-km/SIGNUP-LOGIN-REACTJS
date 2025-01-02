import React, { useState } from "react";
import Signup from "./Signup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [values, setvalues] = useState(false);
  const userData = JSON.parse(localStorage.getItem("UserInfo"));
  const navigate = useNavigate();

  const clear = () => {
    localStorage.clear();
    toast.success("Logout Successfully!");
    // window.location.reload()
    // isclear(false);
    // setisout(false);
    navigate("/")

   
  };

  return (
    <>
      {values ? (
        <Signup/>
      ) : (
        <div className="flex justify-center h-screen items-center shadow-xl">
          <div className="rounded-xl">
            <h2 className="text-center text-2xl font-extrabold py-5 bg-purple-600 rounded-md text-white px-10">
              {userData.name} you were successfully logged
            </h2>
            <div className="text-center">
              <button className="border-2 border-gray-500 px-3 py-1 rounded-md bg-purple-600 my-5 text-white cursor-pointer" onClick={clear}>
                LOGOUT
              </button>
            </div>
          </div>
        </div>
       )}
    </>
  );
}

export default Logout;
