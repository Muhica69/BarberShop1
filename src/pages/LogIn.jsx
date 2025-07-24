import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function Login() {

  const [username, setUsername] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login',{
      username: username,
      password: password
    }).then(result=>{
      // Očekuje se da backend vraća { token: "..." }
      const token = result.data.token;
      if (token) {
        localStorage.setItem("token", token); // Sačuvaj token
        navigate('/Select');
      } else {
        // Opcionalno: obradi grešku ako nema tokena
        alert("Pogrešan username ili password!");
      }
    }
  ).catch(err=>(
    console.log(err),
    alert("Greška pri loginu!")
  ))

  }
  return (
    <div
      className="flex flex-row relative h-screen bg-cover bg-center"
     
    >
        <img
        src="/bg3.jpg"
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <img src="/public/sl2.png" className="absolute top-5 left-5 w-[90px] h-[90px] opacity-50" alt="Background" />
      <div className="flex items-center justify-center w-full bg-gray-800 bg-opacity-50">
        <div className="flex flex-col text-center items-ceenter justify-center rounded-lg opacity-80 bg-white w-1/3 h-1/2 shadow p-8">
          <h1 className="font-poppins text-bold text-[32px] pb-10">Log In</h1>
          <form onSubmit={HandleSubmit} className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Username"
              className="mb-4 p-2 border border-gray-300 rounded"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 mb-10 border border-gray-300 rounded"
              value={password}
              onChange={e => setpassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200"
            >
              Log In
            </button>
            <p className="font-poppins text-sm p-2 text-silver">Don't have an account? <a className="text-yellow-700"href=""onClick={()=>navigate("/Signup")}>Sign up</a></p>
            </form>
        </div> 
      
      </div>
         <button className="absolute bottom-8 left-8 text-lg font-semibold bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
        onClick={() => navigate("/Select1")}
      >
        Nazad
      </button>
    </div>
  );
}
export default Login;
