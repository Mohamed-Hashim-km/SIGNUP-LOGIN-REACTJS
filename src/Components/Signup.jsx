import React, { useEffect, useRef, useState } from "react";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Signup({ setisReg }) {
  const username = useRef();
  const [email, setemail] = useState();
  const pass = useRef();
  const navigate = useNavigate();

  // fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))

  // const [a,seta]=useState(1)

  const buttonHandler = (e) => {
    e.preventDefault();
    const userDatas = { name: username.current.value, Email: email, Password: pass.current.value };
    localStorage.setItem("UserInfo", JSON.stringify(userDatas));

    toast.success("Successfully Signup!");
    navigate("/signed");
  };

  // useEffect(()=>{
  //   fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   .then(response => response.json())
  //   .then(json => console.log(json))
  // },[a])

  // function btns(){
  //   seta(2)
  // }

  return (
    <>
      <div className="flex justify-center h-screen items-center">
        <div className="rounded-xl box shadow-xl">
          <div className="text-center text-2xl font-extrabold py-5 bg-purple-600 rounded-md text-white">SIGHNUP FORM</div>
          <form onSubmit={buttonHandler}>
            <div className="field">
              <input type="text" className="border-2 border-gray-500 rounded-3xl ps-4 py-1 mb-3 outline-purple-600 mx-10 mt-4" required placeholder="NAME" ref={username} />
            </div>
            <div className="field">
              <input type="email" className="border-2 border-gray-500 rounded-3xl ps-4 py-1 mb-3 outline-purple-600 mx-10" required placeholder="EMAIL" onChange={(e) => setemail(e.target.value)} />
            </div>
            <div className="field">
              <input type="password" required placeholder="PASSWORD" className="border-2  border-gray-500 rounded-3xl ps-4 py-1 mb-3 outline-purple-600 mx-10" ref={pass} />
            </div>
            <div className="text-center font-bold ">
              <input type="submit" className="border-2 border-gray-500 px-3 py-1 rounded-md bg-purple-600 my-5 text-white cursor-pointer" />

              {/* <button onClick={btns}>button</button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
