export default function Splash({ hidden }) {
  return (
    <div className={`splash ${hidden ? 'hidden' : ''}`}>
      <div className="splash-content">
        <div className="word">REDRUM</div>
        <div className="sub">Ouverture des verrous…</div>
      </div>
    </div>
  );
}
