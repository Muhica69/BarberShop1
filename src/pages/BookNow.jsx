import { useNavigate } from "react-router-dom";

function BookNow() {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-white">
      <img
        src="/bg3.jpg"
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8">Rezervišite Vaš termin !</h1>
        <p className="text-lg mb-4">Rezervišite termin kod najboljih berbera u našem gradu !</p>
        <button
          className="bg-yellow-500 text-black px-6 py-2 rounded hover:bg-yellow-600 transition duration-300"
          onClick={() => navigate("/Select1")}
        >
          Book Now
        </button>
      </div>
      <button className="absolute bottom-8 left-8 text-lg font-semibold bg-black/50 text-white px-4 py-2 rounded hover:bg-black/70 transition"
      onClick={() => navigate("/")}>
        Nazad
      </button>
    </div>
  );
}
export default BookNow;