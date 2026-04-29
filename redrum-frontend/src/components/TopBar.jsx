import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router';

const NAV = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/menu', label: 'Carte' },
  { to: '/events', label: 'Concerts' },
  { to: '/gallery', label: 'Galerie' },
  { to: '/about', label: 'Le bar' },
];

export default function TopBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const pad = (n) => String(n).padStart(2, '0');
      setTime(`${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  return (
    <header className="topbar">
      <Link to="/" className="brand" data-cursor="hover">
        <div className="brand-mark">R</div>
        <div className="brand-name">REDRUM</div>
      </Link>
      <nav>
        {NAV.map((i) => (
          <NavLink
            key={i.to}
            to={i.to}
            end={i.end}
            data-cursor="hover"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {i.label}
          </NavLink>
        ))}
      </nav>
      <div className="status">
        <span className="dot"></span>
        <span>OUVERT · {time}</span>
      </div>
    </header>
  );
}
