import React, { useEffect } from "react";
import axios from "axios";

export default function Select() {
  useEffect(() => {
    axios.get("http://localhost:3001/api/frizeri")
      .then(res => {
        const frizeri = res.data;

        if (frizeri[0]) {
          document.getElementById("fr1").innerText = `${frizeri[0].ime} ${frizeri[0].prezime}`;
        }
        if (frizeri[1]) {
          document.getElementById("fr2").innerText = `${frizeri[1].ime} ${frizeri[1].prezime}`;
        }
        if (frizeri[2]) {
          document.getElementById("fr3").innerText = `${frizeri[2].ime} ${frizeri[2].prezime}`;
        }
      })
      .catch(err => console.error("Greška pri dohvatu frizera:", err));
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center p-8 min-h-screen text-white">
      <img
        src="/bg3.jpg"
        alt="Pozadina"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative z-10 flex flex-col items-center">
        <img src="/sl2.png" alt="LOGO" className="w-[90px] h-[90px]" />
        <h1 className="text-4xl backdrop-blur-sm p-3 rounded-lg font-bold mb-8">Dobrodošli u naš sistem rezervacija!</h1>
        <p className="text-lg backdrop-blur-sm p-3 mb-4 rounded-lg">Odaberite Vašeg berbera za nastavak!</p>
      </div>

      <div className="relative z-10 flex flex-row items-center justify-center w-[80vw] gap-8">
        <div className="flex flex-col text-center items-center justify-center rounded-lg opacity-90 bg-white w-1/3 shadow p-8">
          <img src="/barber1.png" alt="Ado" className="w-30 h-38 rounded-lg mb-4" />
          <h1 id="fr1" className="font-jaro font-bold text-black text-[32px] pb-10"></h1>
          <button className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200">
            Odaberi
          </button>
        </div>

        <div className="flex flex-col text-center items-center justify-center rounded-lg opacity-90 bg-white w-1/3 shadow p-8">
          <img src="/barber2.png" alt="Keno" className="w-30 h-38 rounded-lg mb-4" />
          <h1 id="fr2" className="font-jaro font-bold text-black text-[32px] pb-10"></h1>
          <button className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200">
            Odaberi
          </button>
        </div>

        <div className="flex flex-col text-center items-center justify-center rounded-lg opacity-90 bg-white w-1/3 shadow p-8">
          <img src="/barber3.png" alt="Emir" className="w-30 h-38 rounded-lg mb-4" />
          <h1 id="fr3" className="font-jaro font-bold text-black text-[32px] pb-10"></h1>
          <button className="bg-yellow-700 text-white p-2 rounded hover:bg-yellow-600 border-2 border-yellow-700 shadow transition duration-200">
            Odaberi
          </button>
        </div>
      </div>
    </div>
  );
}
