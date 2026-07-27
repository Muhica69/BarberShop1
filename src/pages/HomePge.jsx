import { ArrowRight, Clock3, Instagram, MapPin, Menu, Phone, Scissors, Star, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const barbers=[
  {name:"Adnan Kapić",role:"Fade & klasično šišanje",image:"/barber1.png"},
  {name:"Kenan Hadžić",role:"Brada & precizne linije",image:"/barber2.png"},
  {name:"Emir Delić",role:"Moderni stilovi",image:"/barber3.png"},
];
const services=[{name:"Muško šišanje",price:"20 KM",time:"45 min"},{name:"Šišanje + brada",price:"30 KM",time:"60 min"},{name:"Uređivanje brade",price:"15 KM",time:"30 min"}];

export default function HomePage(){
 const [open,setOpen]=useState(false);
 return <div className="site-shell">
  <header className="nav"><a href="#top" className="brand"><Scissors/><span>BARBER.</span></a><nav className={open?"nav-links open":"nav-links"}>{["O nama","Usluge","Tim","Kontakt"].map(x=><a key={x} onClick={()=>setOpen(false)} href={`#${x.toLowerCase().replace(" ","-")}`}>{x}</a>)}<Link className="nav-cta" to="/rezervacija">Rezerviši termin</Link></nav><button className="menu-button" onClick={()=>setOpen(!open)} aria-label="Meni">{open?<X/>:<Menu/>}</button></header>
  <main id="top">
   <section className="hero"><div className="hero-shade"/><div className="hero-content"><p className="eyebrow">SARAJEVO · EST. 2025</p><h1>Stil koji govori<br/><em>prije vas.</em></h1><p>Precizno šišanje, vrhunska njega i atmosfera kojoj se vraćate.</p><Link className="primary-button hero-button" to="/rezervacija">Rezerviši termin <ArrowRight/></Link></div><div className="hero-rating"><span>4.9</span><div><div className="stars">★★★★★</div><small>Na osnovu 120+ recenzija</small></div></div></section>
   <section id="o-nama" className="intro-section"><div><p className="eyebrow">VIŠE OD ŠIŠANJA</p><h2>Zanat. Karakter.<br/>Dobar osjećaj.</h2></div><p>Vjerujemo da odlična frizura počinje razgovorom. Naš tim spaja klasični zanat i savremene tehnike kako bi svaki detalj bio baš vaš.</p></section>
   <section id="usluge" className="services-section"><div className="section-heading"><p className="eyebrow">CJENOVNIK</p><h2>Naše usluge</h2></div><div className="service-list">{services.map((s,i)=><article key={s.name}><span>0{i+1}</span><h3>{s.name}</h3><p><Clock3/> {s.time}</p><strong>{s.price}</strong></article>)}</div></section>
   <section id="tim" className="team-section"><div className="section-heading"><p className="eyebrow">MAJSTORI ZANATA</p><h2>Upoznajte tim</h2></div><div className="team-grid">{barbers.map(b=><article key={b.name}><div className="portrait"><img src={b.image} alt={b.name}/></div><h3>{b.name}</h3><p>{b.role}</p></article>)}</div></section>
   <section className="cta-section"><Scissors/><p className="eyebrow">VRIJEME JE ZA NOVI LOOK</p><h2>Vaš termin je<br/>nekoliko klikova daleko.</h2><Link className="light-button" to="/rezervacija">Rezerviši sada <ArrowRight/></Link></section>
  </main>
  <footer id="kontakt"><div className="footer-brand"><a className="brand" href="#top"><Scissors/><span>BARBER.</span></a><p>Mjesto dobrog stila i još boljeg osjećaja.</p></div><div><h4>Posjetite nas</h4><p><MapPin/> Ferhadija 12, Sarajevo</p><p><Phone/> +387 61 123 456</p><p><Instagram/> @barber.sarajevo</p></div><div><h4>Radno vrijeme</h4><p>Pon – Sub <span>09:00 – 20:00</span></p><p>Nedjelja <span>Zatvoreno</span></p></div><small>© {new Date().getFullYear()} BARBER. Sva prava zadržana.</small></footer>
 </div>
}
