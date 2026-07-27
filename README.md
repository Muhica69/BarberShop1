# BARBER. — online rezervacije

Produkcijski React/Vite frontend i Express/MongoDB API za registraciju klijenata, pregled slobodnih termina, rezervacije i otkazivanje.

## Lokalno pokretanje

1. Kopirajte `backend-frizer/.env.example` u `backend-frizer/.env` i postavite sigurnu `JWT_SECRET` vrijednost.
2. Pokrenite MongoDB ili unesite MongoDB Atlas adresu u `MONGODB_URI`.
3. Instalirajte pakete: `npm ci` i zatim `cd backend-frizer && npm ci`.
4. Iz korijena pokrenite `npm run dev`.

Frontend je na `http://localhost:5173`, API na `http://localhost:3001`, a health check na `/api/health`. Pri prvom pokretanju API sigurno kreira početne berbere i slobodne termine za narednih 14 dana.

## Produkcija

- Frontend: postavite `VITE_API_URL` na javni API URL i pokrenite `npm run build`; objavite sadržaj `dist/` direktorija.
- Backend: postavite `NODE_ENV=production`, `MONGODB_URI`, snažan `JWT_SECRET`, `CLIENT_URL` i opcionalno `PORT`; zatim pokrenite `npm start` u `backend-frizer` direktoriju.
- Podesite SPA fallback na `index.html` kod hosting providera.

Prije objave pokrenite `npm run check`.
