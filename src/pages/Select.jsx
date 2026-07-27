import { ArrowLeft, CalendarDays, Check, Clock3, LogOut, Scissors, Trash2, UserRound } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api, { errorMessage } from "../api/axios";

const fallbackImages=["/barber1.png","/barber2.png","/barber3.png"];
const dayFmt=new Intl.DateTimeFormat("bs-BA",{weekday:"short",day:"2-digit",month:"short"});
const dateFmt=new Intl.DateTimeFormat("bs-BA",{weekday:"long",day:"2-digit",month:"long",hour:"2-digit",minute:"2-digit"});

export default function Select(){
 const navigate=useNavigate(); const [barbers,setBarbers]=useState([]); const [slots,setSlots]=useState([]); const [mine,setMine]=useState([]); const [barber,setBarber]=useState(null); const [slot,setSlot]=useState(null); const [loading,setLoading]=useState(true); const [notice,setNotice]=useState(""); const [error,setError]=useState("");
 const user=JSON.parse(localStorage.getItem("user")||"null");
 async function load(){setLoading(true);setError("");try{const [{data:b},{data:s},{data:m}]=await Promise.all([api.get("/frizeri"),api.get("/termini/slobodni"),api.get("/termini/moji")]);setBarbers(b);setSlots(s);setMine(m);}catch(e){if(e.response?.status===401)return navigate("/prijava");setError(errorMessage(e));}finally{setLoading(false)}}
 useEffect(()=>{load()},[]);
 const available=useMemo(()=>slots.filter(s=>!barber||String(s.frizerId?._id||s.frizerId)===barber._id),[slots,barber]);
 const grouped=useMemo(()=>available.reduce((a,s)=>{const k=new Date(s.datum).toDateString();(a[k]??=[]).push(s);return a},{}),[available]);
 async function reserve(){if(!slot)return;setLoading(true);setError("");try{await api.post(`/termini/${slot._id}/rezervisi`);setNotice("Termin je uspješno rezervisan.");setSlot(null);await load();}catch(e){setError(errorMessage(e));setLoading(false)}}
 async function cancel(id){if(!confirm("Želite li otkazati ovaj termin?"))return;try{await api.delete(`/termini/${id}`);setNotice("Termin je otkazan.");await load();}catch(e){setError(errorMessage(e))}}
 function logout(){localStorage.clear();navigate("/")}
 return <div className="booking-page"><header className="booking-nav"><Link className="brand" to="/"><Scissors/><span>BARBER.</span></Link><div><UserRound/><span>{user?.username||"Moj profil"}</span><button onClick={logout}><LogOut/> Odjava</button></div></header><main className="booking-main"><Link to="/" className="inline-back"><ArrowLeft/> Početna</Link><div className="booking-title"><p className="eyebrow">ONLINE REZERVACIJE</p><h1>Odaberite svoj termin</h1><p>Tri jednostavna koraka do svježeg izgleda.</p></div>{notice&&<div className="success"><Check/>{notice}<button onClick={()=>setNotice("")}>×</button></div>}{error&&<div className="form-error booking-error">{error}<button onClick={load}>Pokušaj ponovo</button></div>}
 <section className="my-bookings"><h2>Moji termini</h2>{mine.length===0?<p>Nemate predstojećih rezervacija.</p>:<div>{mine.map(t=><article key={t._id}><CalendarDays/><span><strong>{t.frizerId?.ime} {t.frizerId?.prezime}</strong><small>{dateFmt.format(new Date(t.datum))}</small></span><button aria-label="Otkaži termin" onClick={()=>cancel(t._id)}><Trash2/></button></article>)}</div>}</section>
 <section className="booking-step"><div className="step-label"><span>01</span><div><h2>Odaberite berbera</h2><p>Svaki majstor ima svoj potpis.</p></div></div><div className="barber-picker">{barbers.map((b,i)=><button className={barber?._id===b._id?"selected":""} onClick={()=>{setBarber(b);setSlot(null)}} key={b._id}><img src={fallbackImages[i%3]} alt=""/><span><strong>{b.ime} {b.prezime}</strong><small>{b.specijalnost||"Barber & stilista"}</small></span>{barber?._id===b._id&&<Check/>}</button>)}</div></section>
 <section className="booking-step"><div className="step-label"><span>02</span><div><h2>Odaberite vrijeme</h2><p>Prikazani su samo slobodni termini.</p></div></div>{!barber?<p className="empty-state">Prvo odaberite berbera.</p>:loading?<p className="empty-state">Učitavanje termina...</p>:Object.keys(grouped).length===0?<p className="empty-state">Trenutno nema slobodnih termina za ovog berbera.</p>:<div className="slot-days">{Object.entries(grouped).map(([day,items])=><div key={day}><h3>{dayFmt.format(new Date(day))}</h3><div>{items.map(s=><button className={slot?._id===s._id?"selected":""} key={s._id} onClick={()=>setSlot(s)}><Clock3/>{new Date(s.datum).toLocaleTimeString("bs-BA",{hour:"2-digit",minute:"2-digit"})}</button>)}</div></div>)}</div>}</section>
 <div className="booking-submit"><div>{slot?<><small>Odabrani termin</small><strong>{dateFmt.format(new Date(slot.datum))} · {barber.ime}</strong></>:<span>Odaberite berbera i vrijeme za nastavak.</span>}</div><button className="primary-button" disabled={!slot||loading} onClick={reserve}>{loading&&slot?"Rezervišem...":"Potvrdi rezervaciju"}</button></div></main></div>
}
