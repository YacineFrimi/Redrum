import { HOURS } from '../data/hours.js';

export default function About() {
  const today = new Date().getDay();

  return (
    <div className="page active">
      <div className="about-page">
        <section className="about-hero">
          <div>
            <h2>
              EN 1980,<br />
              CETTE PETITE<br />
              FAMILLE EST RESTÉE<br />
              <span className="red">CONFINÉE</span>
            </h2>
            <p>
              <strong>Pendant plusieurs mois</strong> et tout s'est bien passé.
              Alors aucune raison de paniquer si tu pousses notre porte un mardi soir.
            </p>
            <p>
              Le Redrum, c'est un bar alternatif planté à Tournai depuis 2012.
              Un comptoir, une scène, des flippers qui flashent, des fléchettes qui ratent
              et une salle qui hurle dès que la première guitare branche.
            </p>
            <p>
              On y joue du <strong>garage rock</strong>, du <strong>post-punk</strong>, du <strong>rockabilly</strong>,
              du <strong>heavy</strong> et tout ce qui fait vibrer les murs. Bières belges, cocktails à la louche,
              et des shots qu'on n'avoue jamais le lendemain.
            </p>
          </div>
          <div className="about-visual">
            <div className="blood-drips"></div>
            <div className="blood-text">REDRUM</div>
          </div>
        </section>

        <section className="about-meta">
          <div className="meta-block">
            <h3>OÙ NOUS TROUVER</h3>
            <div className="big">Rue de la<br />Madeleine 14</div>
            <p>
              7500 <strong style={{ color: 'var(--blood)' }}>Tournai</strong> — Belgique<br />
              À 50m de la Grand-Place. Cherchez le néon rouge et les gens qui fument dehors.
            </p>
            <p style={{ marginTop: 16, fontFamily: 'var(--mono)', fontSize: 12, letterSpacing: '0.1em' }}>
              T. <strong>+32 69 84 12 37</strong><br />
              E. SALUT@REDRUM.BE
            </p>
          </div>

          <div className="meta-block">
            <h3>HORAIRES D'OUVERTURE</h3>
            <div className="hours-table">
              {HOURS.map((h) => (
                <div
                  key={h.day}
                  className={`hours-row ${h.closed ? 'closed' : ''} ${h.idx === today ? 'tonight' : ''}`}
                >
                  <span className="day">{h.day}{h.idx === today ? ' · ce soir' : ''}</span>
                  <span className="time">{h.time}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: 24, fontFamily: 'var(--typer)', fontSize: 14, fontStyle: 'italic' }}>
              Happy Hour quotidienne <strong style={{ color: 'var(--blood)' }}>17h — 18h</strong>.
              Bière à la paille, prix dégueulasses (dans le bon sens).
            </p>
          </div>

          <div className="meta-block">
            <h3>SUIVRE LE BAZAR</h3>
            <div className="big" style={{ fontSize: 28, marginBottom: 24 }}>
              Tout passe par<br />Facebook<br />(désolé).
            </div>
            <div className="socials">
              <a className="social-link" href="#" data-cursor="hover">
                <span>FACEBOOK · 7,6K</span>
                <span className="arrow">→</span>
              </a>
              <a className="social-link" href="#" data-cursor="hover">
                <span>INSTAGRAM · @redrum.tournai</span>
                <span className="arrow">→</span>
              </a>
              <a className="social-link" href="#" data-cursor="hover">
                <span>BANDCAMP · groupes maison</span>
                <span className="arrow">→</span>
              </a>
              <a className="social-link" href="#" data-cursor="hover">
                <span>YOUTUBE · captations live</span>
                <span className="arrow">→</span>
              </a>
              <a className="social-link" href="#" data-cursor="hover">
                <span>NEWSLETTER · une fois par mois max</span>
                <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
