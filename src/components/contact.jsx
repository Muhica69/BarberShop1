import { Instagram } from "lucide-react";
import { Facebook, Twitter, Linkedin, Phone } from "lucide-react";
function contact() {
  return (
    <div id="kontakt"className="w-full flex flex-row items-center justify-between h-[33vh] backdrop-blur-sm bg-black/20">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-white text-3xl font-jaro mb-4">Kontakt</div>
        <ul className="flex flex-col items-start">
          <li className="flex flex-row mb-4">
            <span className="flex flex-row items-center gap-2 text-white hover:text-yellow-700 transition-colors">
              <Instagram size={22} />
              barber.ba
            </span>
          </li>
          <li className="flex flex-row mb-4">
            <span className="flex flex-row items-center gap-2 text-white hover:text-yellow-700 transition-colors">
              <Facebook size={22} />
              barber.ba
            </span>
          </li>
          <li className="flex flex-row mb-4">
            <span className="flex flex-row items-center gap-2 text-white hover:text-yellow-700 transition-colors">
              <Phone size={22} />
              +387 61 123 456
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="text-white text-3xl font-jaro mb-4 flex items-center gap-2">
          Radno vrijeme
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className="text-white  mb-1">Pon - Sub</div>
            <div className="text-yellow-700  mb-1">09:00 - 20:00</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="text-white  mb-1">Nedjelja</div>
              <div className="text-yellow-700  mb-1">Zatvoreno</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default contact;
