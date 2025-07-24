import React, { useState } from "react";
import InputMask from "react-input-mask";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [Username, setUsername] = useState("");
  const [Phone, setPhone] = useState("");
  const [password, setpassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const HandleSubmit = (e) => {
    e.preventDefault();

    // Osnovna validacija
    if (!Username || !Phone || !email || !password) {
      setError("Sva polja su obavezna!");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Neispravan format emaila!");
      return;
    }

    if (password.length < 6) {
      setError("Lozinka mora imati barem 6 karaktera.");
      return;
    }

    setError("");

    axios.post('http://localhost:3001/Klijenti', {
      username: Username.trim(),
      phone: Phone.trim(),
      email: email.trim().toLowerCase(),
      password: password.trim()
    })
      .then(result => {
        setUsername("");
        setPhone("");
        setEmail("");
        setpassword("");
        navigate("/Login");
      })
      .catch(error => {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const msg = error.response.data.message.toLowerCase();
          if (msg.includes("korisničko ime") && msg.includes("email")) {
            setError("Korisničko ime i email su zauzeti!");
          } else if (msg.includes("korisničko ime")) {
            setError("Korisničko ime već postoji!");
          } else if (msg.includes("email")) {
            setError("Email je već registrovan!");
          } else {
            setError(error.response.data.message);
          }
        } else {
          setError("Greška pri registraciji!");
        }
      });
  };

  return (
    <div className="flex flex-row relative h-screen bg-cover bg-center">
      <img
        src="/bg3.jpg"
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="flex items-center justify-center w-full  relative z-10">
        <div className="flex flex-col text-center items-center justify-center rounded-lg opacity-80 bg-white w-1/3 h-1/2 shadow p-8">
          <h1 className="font-poppins text-bold text-[32px] pb-5">Sign up</h1>
          <form onSubmit={HandleSubmit} className="flex flex-col mt-4">
            <input
              type="text"
              placeholder="Username"
              className="mb-4 p-2 border border-gray-300 rounded"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <InputMask
              mask="+387 99 999 999"
              maskChar={null}
              placeholder="Phone"
              className="mb-4 p-2 border border-gray-300 rounded"
              value={Phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              className="mb-4 p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="mb-4 p-2 mb-10 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            {error && <div className="text-red-600 mb-2">{error}</div>}
            <button
              type="submit"
              className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <button
        className="absolute bottom-8 left-8 text-lg font-semibold bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition z-20"
        onClick={() => navigate("/Select1")}
      >
        Nazad
      </button>
    </div>
  );
}

export default Signup;
