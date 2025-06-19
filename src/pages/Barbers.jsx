import { picture } from "framer-motion/client"; 
import { useNavigate } from "react-router-dom";

export default function selectBarber(){
  const barbers = [
    { id: 1, name: 'Barber A', picture: '/images/barber-a.jpg',alt: 'Barber A' },
    { id: 2, name: 'Barber B',picture: '/images/barber-b.jpg',alt: 'Barber B' },
    { id: 3, name: 'Barber C',picture: '/images/barber-c.jpg',alt: 'Barber C' },
  ];
const navigate = useNavigate();
const handlebarberSelect = (barber) => {
localStorage.setItem('selectedBarber', JSON.stringify(barber));
navigate('/book-appointment');
}
  return (
    <div>
      <h1>Select a Barber</h1>
      <ul>
        {barbers.map((barber) => (
          <li key={barber.id}>{barber.name}{barber.picture}</li>
        ))}
      </ul>
    </div>
  );
}