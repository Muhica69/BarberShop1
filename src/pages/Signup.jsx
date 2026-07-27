import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api, { errorMessage } from "../api/axios";
import { AuthShell } from "./LogIn";

export default function Signup() {
  const navigate=useNavigate();
  const [form,setForm]=useState({username:"",email:"",phone:"",password:""});
  const [error,setError]=useState(""); const [loading,setLoading]=useState(false);
  async function submit(e){e.preventDefault();setError("");setLoading(true);try{const {data}=await api.post("/klijenti/register",form);localStorage.setItem("token",data.token);localStorage.setItem("user",JSON.stringify(data.klijent));navigate("/rezervacija");}catch(err){setError(errorMessage(err));}finally{setLoading(false)}}
  const change=e=>setForm({...form,[e.target.name]:e.target.value});
  return <AuthShell title="Kreirajte račun" subtitle="Rezervacija traje manje od minute."><form onSubmit={submit} className="auth-form compact">
    <label>Korisničko ime<input required name="username" minLength="3" maxLength="30" autoComplete="username" value={form.username} onChange={change}/></label>
    <label>Email<input required name="email" type="email" autoComplete="email" value={form.email} onChange={change}/></label>
    <label>Telefon<input required name="phone" type="tel" placeholder="+387 61 123 456" autoComplete="tel" value={form.phone} onChange={change}/></label>
    <label>Lozinka<input required name="password" type="password" minLength="8" autoComplete="new-password" value={form.password} onChange={change}/><small>Najmanje 8 znakova</small></label>
    {error&&<p className="form-error" role="alert">{error}</p>}<button className="primary-button" disabled={loading}>{loading?"Kreiram račun...":"Registruj se"}</button><p className="auth-switch">Već imate račun? <Link to="/prijava">Prijavite se</Link></p>
  </form></AuthShell>;
}
