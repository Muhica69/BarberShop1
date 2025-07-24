import { useNavigate } from "react-router-dom";

export default function Select1() {
  const navigate = useNavigate();
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <img
        src="/bg3.jpg"
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
          <img
        src="/sl2.png"
        alt="LOGO"
        className="absolute top-8 left-50 w-[90px] h-[90px] "
      />
      <div className="relative z-10 flex flex-row items-center justify-center w-full gap-8">
        <div className="flex flex-col text-center items-center justify-center rounded-lg opacity-80 bg-white w-1/3 h-1/2 shadow p-8">
          <h1 className="font-poppins text-bold text-[32px] pb-10">Prijavite se i rezervišite Vaš termin!</h1>
          <button
            className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200"
            onClick={() => navigate("/Login")}
          >
            Prijavi se
          </button>
        </div>
        <div className="flex flex-col text-center items-center justify-center rounded-lg opacity-80 bg-white w-1/3 h-1/2 shadow p-8">
          <h1 className="font-poppins text-bold text-[32px] pb-10">Registrujte se i rezervišite Vaš termin!</h1>
          <button
            className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200"
            onClick={() => navigate("/Signup")}
          >
            Registrujte se
          </button>
        </div>
      </div>
      <button className="absolute bottom-8 left-8 text-lg font-semibold bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
        onClick={() => navigate("/BookNow")}
      >
        Nazad
      </button>
    </div>
  );
}

