import React from "react";
import InputMask from "react-input-mask";

function Signup() {
  // This furrnction would handle the signup logic
  return (
     <div
      className="flex flex-row relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/public/pozadina.webp')" }}
    >
      <img src="/public/sl2.png" className="absolute top-5 left-5 w-[90px] h-[90px] opacity-50" alt="Background" />
      <div className="flex items-center justify-center w-full bg-gray-800 bg-opacity-50">
        <div className="flex flex-col text-center items-ceenter justify-center rounded-lg opacity-80 bg-white w-1/3 h-1/1,5 shadow p-8">
          <h1 className="font-poppins text-bold text-[32px] pb-5">Sign up</h1>
          <form className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Username"
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            <InputMask
              mask="+387 99 999 999"
              maskChar={null}
              placeholder="Phone"
              className="mb-4 p-2 border border-gray-300 rounded"
            />
            
             <input
              type="email"
              placeholder="Email"
              className="mb-4 p-2 border border-gray-300 rounded"
              
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 mb-10 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200"
            >
              Log In
            </button>
            </form>
        </div> 
      
      </div>
    </div>
    
  );
  
  
}

export default Signup;