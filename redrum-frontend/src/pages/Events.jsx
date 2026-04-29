import { EVENTS } from '../data/events.js';

export default function Events() {
  return (
    <div className="page active">
      <div className="events-page">
        <div className="events-hero">
          <h2>
            CONCERTS<br />
            <span className="alt">/ TOURNOIS / NUITS BLANCHES</span>
          </h2>
          <div className="meta">
            MAI — JUIN 2026<br />
            10 DATES PROCHAINES<br />
            ENTRÉE 5 — 10 EUROS
          </div>
        </div>

        <div className="events-list">
          {EVENTS.map((e) => (
            <div key={`${e.date}-${e.month}-${e.name}`} className="event-row" data-cursor="hover">
              <div className="event-date">
                <span className="day">{e.date}</span>
                {e.month} · {e.day}
              </div>
              <div className="event-time">{e.time}</div>
              <div className="event-name">
                {e.name}
                <span className="sub">{e.sub}</span>
              </div>
              <div className="event-tag">{e.tag}</div>
              <div className={`event-price ${e.price === 'free' ? 'free' : ''}`}>
                {e.price === 'free' ? 'GRATUIT' : `€${e.price}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
