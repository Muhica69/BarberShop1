function Info() {
  return (
    <div id="about" className=" scroll-mt-20 rounded mt-30 flex flex-row  items-center justify-between w-[90vw] h-[66vh] backdrop-blur-sm bg-white/10  p-20 pt-20 pb-20">
    <div className="flex flex-col mt-20 items-center justify-center mb-20">
            <div className=" mb-10 p-4 bg-white rounded-lg shadow mb-10"
      style={{ backgroundImage: "url('/public/bg.jpg')" }}
         >
        <img
          src="/image.png"
          alt="Vizija"
          className="w-110 h-60 object-cover rounded"
        />
      </div>
      <h2 className="text-2xl  font-jaro font-bold mb-2 text-yellow-700">Naša vizija</h2>
      <p className="text-white text-center max-w-xl mb-6">
        Naša vizija je da pružimo najbolju uslugu našim klijentima, koristeći
        najnovije tehnike i proizvode u industriji. Posvećeni smo stvaranju
        prijatnog ambijenta i profesionalnog iskustva za svakog posetioca našeg
        salona.
      </p>
      </div>
      <div className="flex flex-col mt-20 items-center justify-center mb-20">

      <h2 className="text-2xl  font-jaro font-bold mb-2 text-yellow-700">O nama</h2>
      <p className="text-white text-center max-w-xl">
        Mi smo tim iskusnih frizera i stilista sa strašću za svoj posao. Naš salon je mesto gde se tradicija susreće sa savremenim trendovima, a svaki klijent je u centru pažnje. Verujemo u kvalitet, posvećenost i prijateljsku atmosferu.
      </p>
             <div className=" mb-10 p-4 bg-white rounded-lg shadow mt-10"
      style={{ backgroundImage: "url('/public/bg.jpg')" }}
         >
        <img
          src="/svi.png"
          alt="Vizija"
          className="w-110 h-60 object-cover rounded"
        />
      </div>
      </div>
    </div>
  );
}
export default Info;