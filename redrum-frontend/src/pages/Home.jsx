import { useNavigate } from 'react-router';

export default function Home() {
  const nav = useNavigate();
  return (
    <div className="page active">
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-hex"></div>

        <div className="hero-content">
          <div className="hero-tagline">Bar alternatif · Tournai · Depuis toujours</div>
          <h1>
            <span className="glitch-word" data-text="MURDER">
              <span className="halo" aria-hidden="true"></span>
              <span className="base">REDRUM</span>
              <span className="frag f1" aria-hidden="true">REDRUM</span>
              <span className="frag f2" aria-hidden="true">REDRUM</span>
              <span className="frag f3" aria-hidden="true">REDRUM</span>
              <span className="frag f4" aria-hidden="true">REDRUM</span>
              <span className="scan" aria-hidden="true"></span>
            </span>
            <span className="neon-bar" aria-label="BAR">
              <span className="letter l-b">B</span>
              <span className="letter l-a">A</span>
              <span className="letter l-r">R</span>
            </span>
          </h1>
          <p className="hero-sub">
            Bières belges, gin to, rhum ambré, cocktails à la louche. Concerts live,
            flippers qui clignotent, fléchettes qui ratent. <strong>On boit, on crie, on recommence.</strong>
          </p>
          <div className="hero-cta-row">
            <button className="btn btn-primary" data-cursor="hover" onClick={() => nav('/events')}>
              Prochains concerts →
            </button>
            <button className="btn btn-ghost" data-cursor="hover" onClick={() => nav('/menu')}>
              Voir la carte
            </button>
          </div>
        </div>

        <div className="hero-side">
          <div className="info-block">
            <div className="num">01</div>
            <div>
              <div className="label">Adresse</div>
              <div className="value">Rue de la <strong>Madeleine</strong><br />7500 Tournai · BE</div>
            </div>
          </div>
          <div className="info-block">
            <div className="num">02</div>
            <div>
              <div className="label">Ce soir</div>
              <div className="value"><strong>The Spunyboys</strong><br />+ Maka DJ set · 21h</div>
            </div>
          </div>
          <div className="info-block">
            <div className="num">03</div>
            <div>
              <div className="label">Happy hour</div>
              <div className="value">Tous les soirs<br /><strong>17h — 18h</strong> · Bières à la paille</div>
            </div>
          </div>
          <div className="info-block">
            <div className="num">04</div>
            <div>
              <div className="label">Followers Facebook</div>
              <div className="value"><strong>7 600+</strong> âmes perdues</div>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, k) => (
            <span key={k} className="ticker-group">
              <span>REDRUM</span><span className="skull">✛</span>
              <span>MURDER</span><span className="skull">✛</span>
              <span>BIÈRE FROIDE</span><span className="skull">✛</span>
              <span>CONCERTS</span><span className="skull">✛</span>
              <span>FLIPPERS</span><span className="skull">✛</span>
              <span>HAPPY HOUR 17—18</span><span className="skull">✛</span>
              <span>TOURNAI</span><span className="skull">✛</span>
            </span>
          ))}
        </div>
      </div>

      <section className="signature">
        <div className="section-head">
          <div className="section-num">CHAMBRE 237 — SIGNATURES</div>
          <div className="section-title">Trois cocktails qui<br /><span className="accent">font des trucs.</span></div>
          <div className="section-meta">Créés au comptoir<br />maison · garantis pas raisonnables</div>
        </div>
        <div className="drinks-grid">
          <div className="drink-card" data-cursor="hover">
            <div className="drink-num"><span>N° 001</span><span>SIGNATURE</span></div>
            <div className="drink-name">Le Jack<br />Torrance</div>
            <div className="drink-desc">Bourbon, sirop d'écorce, twist d'orange brûlée. Pour celui qui regarde la machine à écrire un peu trop longtemps.</div>
            <div className="drink-meta">
              <span className="drink-price">€9</span>
              <span className="drink-tag">FORT</span>
            </div>
          </div>
          <div className="drink-card" data-cursor="hover">
            <div className="drink-num"><span>N° 002</span><span>SIGNATURE</span></div>
            <div className="drink-name">Démogorgon<br />Spritz</div>
            <div className="drink-desc">Gin, hibiscus, prosecco, glaçons. Devient violet quand on le secoue, change de dimension dès la deuxième gorgée.</div>
            <div className="drink-meta">
              <span className="drink-price">€8.50</span>
              <span className="drink-tag">FRAIS</span>
            </div>
          </div>
          <div className="drink-card" data-cursor="hover">
            <div className="drink-num"><span>N° 003</span><span>SIGNATURE</span></div>
            <div className="drink-name">Sang &amp;<br />Limonade</div>
            <div className="drink-desc">Rhum ambré, grenadine maison, jus de citron pressé devant toi. Rouge comme le couloir, doux comme un mensonge.</div>
            <div className="drink-meta">
              <span className="drink-price">€8</span>
              <span className="drink-tag">SUCRÉ</span>
            </div>
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="strip-grid">
          <div className="strip-item">
            <div className="stat"><span className="red">14</span> ans</div>
            <div className="label">À gueuler à Tournai</div>
          </div>
          <div className="strip-item">
            <div className="stat">200<span className="red">+</span></div>
            <div className="label">Concerts par an</div>
          </div>
          <div className="strip-item">
            <div className="stat">40<span className="red">.</span></div>
            <div className="label">Bières au choix</div>
          </div>
          <div className="strip-item">
            <div className="stat">3<span className="red">am</span></div>
            <div className="label">Heure de fermeture (officielle)</div>
          </div>
        </div>
      </section>
    </div>
  );
}
