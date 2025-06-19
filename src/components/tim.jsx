export default function Tim() {
  return (
    <div id="team" className=" scroll-mt-20 flex flex-col items-center justify-center rounded w-[90vw] backdrop-blur-sm bg-white/10">
      <h1 className="text-yellow-700 text-4xl font-jaro mb-8">Naš Tim</h1>
      <div className="flex flex-row items-center justify-between w-[90vw] border-b-[0.5px] border-yellow-700 p-20 ">
        <div
          className=" mb-10 p-4  rounded-lg shadow  "
          style={{ backgroundImage: "url('/public/bg.jpg')" }}
        >
          <img
            src="/barber1.png"
            alt="barber1"
            className="w-60 h-140 object-cover rounded"
          />
        </div>
        <div className="text-white text-center max-w-xl mb-6">
          <h2 className="text-2xl font-bold mb-2">Adnan "Ado" Kapić</h2>
          <p className="text-yellow-700 font-semibold mb-2">
            Specijalnost:{" "}
            <span className="text-white">
              Fade &amp; klasična muška šišanja
            </span>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-yellow-700">O Adnanu:</span> Ado je rođen u
            Sarajevu i završio je školu za frizere u Minhenu. Nakon nekoliko
            godina rada u Berlinu, vratio se u BiH sa vizijom da podigne kvalitet
            barber usluge na viši nivo.
          </p>
          <div className="mb-2">
            <span className="font-semibold text-yellow-700 mb-1">
              Poznate ličnosti koje je šišao:
            </span>
            <ul className="list-disc text-center list-inside text-left ml-4">
              <li>Edin Džeko (nogometaš)</li>
              <li>Dino Merlin (muzičar)</li>
              <li>Senidah (styling za muzički spot)</li>
            </ul>
          </div>
        </div>
         </div>
    
      
      <div className="flex flex-row  w-[90vw] border-b border-yellow-700 border-b-[0.5px]   items-center justify-between p-20">
         <div className="text-white text-center max-w-xl mb-6">
          <h2 className="text-2xl font-bold mb-2">Adnan "Ado" Kapić</h2>
          <p className="text-yellow-700 font-semibold mb-2">
            Specijalnost:{" "}
            <span className="text-white">
              Fade &amp; klasična muška šišanja
            </span>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-yellow-700">O Adnanu:</span> Ado je rođen u
            Sarajevu i završio je školu za frizere u Minhenu. Nakon nekoliko
            godina rada u Berlinu, vratio se u BiH sa vizijom da podigne kvalitet
            barber usluge na viši nivo.
          </p>
          <div className="mb-2">
            <span className="font-semibold text-yellow-700 mb-1">
              Poznate ličnosti koje je šišao:
            </span>
            <ul className="list-disc text-center list-inside text-left ml-4">
              <li>Edin Džeko (nogometaš)</li>
              <li>Dino Merlin (muzičar)</li>
              <li>Senidah (styling za muzički spot)</li>
            </ul>
          </div>
          </div>
        <div
          className=" mb-10 p-4 bg-white rounded-lg shadow "
          style={{ backgroundImage: "url('/public/bg.jpg')" }}
        >
          <img
            src="/barber2.png"
            alt="barber1"
            className="w-60 h-140 object-cover rounded"
          />
        </div>
      </div>
       <div className="flex flex-row items-center justify-between w-full p-20  ">
        <div
          className=" mb-10 p-4 bg-white rounded-lg shadow "
          style={{ backgroundImage: "url('/public/bg.jpg')" }}
        >
          <img
            src="/barber3.png"
            alt="barber1"
            className="w-60 h-140 object-cover rounded"
          />

        </div>
          <div className="text-white text-center max-w-xl mb-6">
          <h2 className="text-2xl font-bold mb-2">Adnan "Ado" Kapić</h2>
          <p className="text-yellow-700 font-semibold mb-2">
            Specijalnost:{" "}
            <span className="text-white">
              Fade &amp; klasična muška šišanja
            </span>
          </p>
          <p className="mb-2">
            <span className="font-semibold text-yellow-700">O Adnanu:</span> Ado je rođen u
            Sarajevu i završio je školu za frizere u Minhenu. Nakon nekoliko
            godina rada u Berlinu, vratio se u BiH sa vizijom da podigne kvalitet
            barber usluge na viši nivo.
          </p>
          <div className="mb-2">
            <span className="font-semibold text-yellow-700 mb-1">
              Poznate ličnosti koje je šišao:
            </span>
            <ul className="list-disc text-center list-inside text-left ml-4">
              <li>Edin Džeko (nogometaš)</li>
              <li>Dino Merlin (muzičar)</li>
              <li>Senidah (styling za muzički spot)</li>
            </ul>
          </div>
          </div>
      </div>
    </div>
  );
}
