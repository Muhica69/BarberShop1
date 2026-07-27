import { ArrowLeft, Eye, EyeOff, Scissors } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api, { errorMessage } from "../api/axios";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(event) {
    event.preventDefault(); setError(""); setLoading(true);
    try {
      const { data } = await api.post("/klijenti/login", form);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.klijent));
      navigate(data.klijent?.role === "admin" ? "/admin" : "/rezervacija");
    } catch (err) { setError(errorMessage(err)); } finally { setLoading(false); }
  }

  return <AuthShell title="Dobro došli nazad" subtitle="Prijavite se i odaberite svoj termin.">
    <form onSubmit={submit} className="auth-form">
      <label>Korisničko ime<input autoFocus required autoComplete="username" minLength="3" value={form.username} onChange={e=>setForm({...form,username:e.target.value})} /></label>
      <label>Lozinka<div className="password-field"><input required minLength="8" type={show?"text":"password"} autoComplete="current-password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})}/><button type="button" aria-label="Prikaži lozinku" onClick={()=>setShow(!show)}>{show?<EyeOff/>:<Eye/>}</button></div></label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="primary-button" disabled={loading}>{loading?"Prijavljujem...":"Prijavi se"}</button>
      <p className="auth-switch">Nemate račun? <Link to="/registracija">Registrujte se</Link></p>
    </form>
  </AuthShell>;
}

export function AuthShell({title,subtitle,children}) {
  return <main className="auth-page"><div className="auth-overlay"/><Link className="back-link" to="/"><ArrowLeft/> Početna</Link><section className="auth-card"><div className="auth-brand"><Scissors/><span>BARBER.</span></div><p className="eyebrow">ONLINE REZERVACIJE</p><h1>{title}</h1><p className="muted">{subtitle}</p>{children}</section></main>;
}
