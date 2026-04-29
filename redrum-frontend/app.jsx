// Components for Redrum bar site
const { useState, useEffect, useRef } = React;

/* ============= TOPBAR ============= */
function TopBar({ page, setPage }) {
  const [time, setTime] = useState('');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getHours()).padStart(2, '0');
      const mm = String(d.getMinutes()).padStart(2, '0');
      const ss = String(d.getSeconds()).padStart(2, '0');
      setTime(`${hh}:${mm}:${ss}`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  const items = [
  { id: 'home', label: 'Accueil' },
  { id: 'menu', label: 'Carte' },
  { id: 'events', label: 'Concerts' },
  { id: 'gallery', label: 'Galerie' },
  { id: 'about', label: 'Le bar' }];


  return (
    <header className="topbar">
      <div className="brand" data-cursor="hover" onClick={() => setPage('home')}>
        <div className="brand-mark">R</div>
        <div className="brand-name">REDRUM</div>
      </div>
      <nav>
        {items.map((i) =>
        <button
          key={i.id}
          className={page === i.id ? 'active' : ''}
          data-cursor="hover"
          onClick={() => setPage(i.id)}>
          {i.label}</button>
        )}
      </nav>
      <div className="status">
        <span className="dot"></span>
        <span>OUVERT · {time}</span>
      </div>
    </header>);

}

/* ============= HOME ============= */
function HomePage({ setPage }) {
  return (
    <div className="page active">
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="hero-hex"></div>

        <div className="hero-content">
          <div className="hero-tagline">Bar alternatif · Tournai · Depuis toujours</div>
          <h1>
            <span className="glitch-word" data-text="MURDER"><span className="halo" aria-hidden="true"></span><span className="base">REDRUM</span><span className="frag f1" aria-hidden="true">REDRUM</span><span className="frag f2" aria-hidden="true">REDRUM</span><span className="frag f3" aria-hidden="true">REDRUM</span><span className="frag f4" aria-hidden="true">REDRUM</span><span className="scan" aria-hidden="true"></span></span>
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
            <button className="btn btn-primary" data-cursor="hover" onClick={() => setPage('events')}>
              Prochains concerts →
            </button>
            <button className="btn btn-ghost" data-cursor="hover" onClick={() => setPage('menu')}>
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
          {Array.from({ length: 2 }).map((_, k) =>
          <React.Fragment key={k}>
              <span>REDRUM</span><span className="skull">✛</span>
              <span>MURDER</span><span className="skull">✛</span>
              <span>BIÈRE FROIDE</span><span className="skull">✛</span>
              <span>CONCERTS</span><span className="skull">✛</span>
              <span>FLIPPERS</span><span className="skull">✛</span>
              <span>HAPPY HOUR 17—18</span><span className="skull">✛</span>
              <span>TOURNAI</span><span className="skull">✛</span>
            </React.Fragment>
          )}
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
            <div className="drink-name">Sang &<br />Limonade</div>
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
    </div>);

}

/* ============= MENU ============= */
function MenuPage() {
  const [cat, setCat] = useState('cocktails');

  const data = {
    cocktails: [
    { name: 'Le Jack Torrance', desc: 'Bourbon, sirop d\'écorce, orange brûlée', price: '9' },
    { name: 'Démogorgon Spritz', desc: 'Gin, hibiscus, prosecco', price: '8.5' },
    { name: 'Sang & Limonade', desc: 'Rhum ambré, grenadine maison, citron', price: '8' },
    { name: 'Room 237', desc: 'Mezcal, ananas grillé, piment', price: '10' },
    { name: 'Wendy\'s Tears', desc: 'Vodka, citron vert, sel noir, soda', price: '8' },
    { name: 'Eleven', desc: 'Gin, gaufre belge infusée, miel', price: '9' },
    { name: 'Carrie', desc: 'Tequila, jus de tomate, tabasco, céleri', price: '8.5' },
    { name: 'Le Couloir', desc: 'Cognac, café froid, cardamome', price: '9.5' }],

    bieres: [
    { name: 'Duvel', desc: 'Blonde forte · Belgique · 33cl', price: '4.5' },
    { name: 'Chouffe Houblon', desc: 'IPA belge · pression · 25cl', price: '4' },
    { name: 'Cuvée des Trolls', desc: 'Blonde épicée · 33cl', price: '4' },
    { name: 'Saison Dupont', desc: 'Saison sèche · 33cl', price: '4.5' },
    { name: 'Aquarium IPA', desc: 'Maison Redrum · pression · 25cl', price: '5' },
    { name: 'Westmalle Tripel', desc: 'Trappiste · 33cl', price: '5' },
    { name: 'Kriek Lindemans', desc: 'Cerise · pour les gentils · 25cl', price: '4' },
    { name: 'Bière à la paille', desc: 'Happy Hour 17h-18h · uniquement', price: '3' }],

    rhum: [
    { name: 'Diplomatico Reserva', desc: 'Venezuela · 12 ans · 4cl', price: '7' },
    { name: 'Plantation XO', desc: 'Barbade · vieux · 4cl', price: '8' },
    { name: 'Trois Rivières', desc: 'Martinique · agricole · 4cl', price: '6' },
    { name: 'Zacapa 23', desc: 'Guatemala · 4cl', price: '9' },
    { name: 'Don Papa', desc: 'Philippines · doux · 4cl', price: '6.5' },
    { name: 'Botran 18', desc: 'Guatemala · 4cl', price: '8.5' }],

    gin: [
    { name: 'Gin Tonic Maison', desc: 'Gin Bombay, tonic, concombre', price: '8' },
    { name: 'Hendrick\'s', desc: 'Avec rose et concombre', price: '9' },
    { name: 'Monkey 47', desc: 'Forêt-Noire · botanique', price: '11' },
    { name: 'Tanqueray Ten', desc: 'Citron, pamplemousse, camomille', price: '9' },
    { name: 'Copperhead', desc: 'Belge · sec · botanique', price: '9' },
    { name: 'Gin du chef', desc: 'Composition surprise · à la louche', price: '7' }],

    shots: [
    { name: 'Jägermeister', desc: 'Le classique · 4cl glacé', price: '4' },
    { name: 'Fernet Branca', desc: 'Italien · amer · pour les durs', price: '5' },
    { name: 'Underberg', desc: 'Petite bouteille · digestion express', price: '4' },
    { name: 'Tequila Cuervo', desc: 'Sel, citron, regret', price: '4' },
    { name: 'Mezcal Vida', desc: 'Fumé · pour ceux qui aiment ça', price: '6' },
    { name: 'Shot Mystère', desc: 'Le barman décide · vous payez', price: '3' },
    { name: 'Sambuca flambé', desc: 'Avec le grain de café · trois flammes', price: '5' },
    { name: 'Tournée du patron', desc: 'Quand il est de bonne humeur', price: '0' }]

  };

  const tabs = [
  { id: 'cocktails', label: 'Cocktails' },
  { id: 'bieres', label: 'Bières' },
  { id: 'rhum', label: 'Rhum' },
  { id: 'gin', label: 'Gin' },
  { id: 'shots', label: 'Shots' }];


  return (
    <div className="page active">
      <div className="menu-page">
        <div className="menu-hero">
          <h2>
            CARTE<br />
            DES <span className="crossed">POISONS</span>
          </h2>
          <p className="menu-sub">
            On verse, on encaisse, on recommence. Prix en euros, pourboires en monnaie sonnante,
            l'addition se règle au comptoir — comme à la grande époque.
          </p>
        </div>

        <div className="menu-tabs">
          {tabs.map((t) =>
          <button
            key={t.id}
            className={`menu-tab ${cat === t.id ? 'active' : ''}`}
            data-cursor="hover"
            onClick={() => setCat(t.id)}>
            {t.label}</button>
          )}
        </div>

        <div className="menu-list">
          {data[cat].map((item, i) =>
          <div key={i} className="menu-item" data-cursor="hover">
              <div className="menu-item-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="menu-item-body">
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-desc">{item.desc}</div>
              </div>
              <div className="menu-item-price">€{item.price}</div>
            </div>
          )}
        </div>
      </div>
    </div>);

}

/* ============= EVENTS ============= */
function EventsPage() {
  const events = [
  { date: '03', month: 'MAI', day: 'VEN', name: 'THE SPUNYBOYS', sub: 'Rockabilly · BE / FR', tag: 'CONCERT', time: '21:00', price: '8' },
  { date: '04', month: 'MAI', day: 'SAM', name: 'MAKA · DJ SET', sub: 'After party · 22h → fermeture', tag: 'DJ', time: '22:00', price: 'free' },
  { date: '10', month: 'MAI', day: 'VEN', name: 'THE WARLORD TAVERN', sub: 'Post-punk / garage rock · entrée gratuite', tag: 'CONCERT', time: '21:30', price: 'free' },
  { date: '11', month: 'MAI', day: 'SAM', name: 'SUPER 8°', sub: 'Garage rock crasseux · BXL', tag: 'CONCERT', time: '22:00', price: '6' },
  { date: '17', month: 'MAI', day: 'VEN', name: 'STRAIGHT SHOOTER', sub: 'Heavy rock · Tournai mob', tag: 'LIVE', time: '21:00', price: '7' },
  { date: '18', month: 'MAI', day: 'SAM', name: 'KEUTCH KAPAK', sub: 'Set électro après le live', tag: 'DJ', time: '23:00', price: '5' },
  { date: '24', month: 'MAI', day: 'VEN', name: 'TOURNOI FLÉCHETTES', sub: 'Inscriptions au comptoir · 16 places', tag: 'TOURNOI', time: '20:00', price: 'free' },
  { date: '25', month: 'MAI', day: 'SAM', name: 'BLIND TEST CINÉ', sub: 'Spécial Stephen King · équipes de 4', tag: 'JEU', time: '20:30', price: 'free' },
  { date: '31', month: 'MAI', day: 'VEN', name: 'OPEN MIC RAGE', sub: 'Vous montez, vous criez, on applaudit', tag: 'OPEN', time: '21:00', price: 'free' },
  { date: '07', month: 'JUIN', day: 'SAM', name: 'NUIT MASURE 14', sub: 'Soirée spéciale · concerts surprise + DJ', tag: 'SOIRÉE', time: '19:00', price: '10' }];


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
          {events.map((e, i) =>
          <div key={i} className="event-row" data-cursor="hover">
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
          )}
        </div>
      </div>
    </div>);

}

/* ============= GALLERY ============= */
function GalleryPage() {
  const tiles = [
  { size: 's1', ph: 'ph1', tag: 'CONCERT', cap: 'Hagen Das · scène', ts: 'ARC.04.18' },
  { size: 's2', ph: 'ph2', tag: 'PUBLIC', cap: 'Vendredi 23h17', ts: 'ARC.04.04' },
  { size: 's3', ph: 'ph3', tag: 'BAR', cap: 'Néon — bar principal', ts: 'ARC.03.29' },
  { size: 's4', ph: 'ph4', tag: 'COCKTAIL', cap: 'Démogorgon Spritz', ts: 'ARC.04.11' },
  { size: 's5', ph: 'ph5', tag: 'FLIPPER', cap: 'Salle arrière', ts: 'ARC.02.14' },
  { size: 's6', ph: 'ph6', tag: 'LIVE', cap: 'Unik Unik · ouverture', ts: 'ARC.04.05' },
  { size: 's7', ph: 'ph7', tag: 'FLÉCHETTES', cap: 'Tournoi mensuel', ts: 'ARC.03.22' },
  { size: 's8', ph: 'ph8', tag: 'SOIRÉE', cap: 'Halloween 2025', ts: 'ARC.10.31' },
  { size: 's9', ph: 'ph9', tag: 'BAR', cap: 'Service au comptoir', ts: 'ARC.04.20' },
  { size: 's10', ph: 'ph10', tag: 'AFFICHE', cap: 'Masure 14 · soirée', ts: 'ARC.04.15' },
  { size: 's11', ph: 'ph11', tag: 'TERRASSE', cap: 'Fumeurs en hiver', ts: 'ARC.01.18' },
  { size: 's12', ph: 'ph12', tag: 'AFTER', cap: '4h du matin · vendredi', ts: 'ARC.04.27' }];


  return (
    <div className="page active">
      <div className="gallery-page">
        <div className="gallery-hero">
          <h2>
            ARCHIVES<br />
            <span className="red">/ SCÈNES DE CRIME</span>
          </h2>
          <p className="sub">
            Quatorze ans à gueuler dans les amplis. Voici quelques pièces à conviction.
            Cliquez si vous voulez — ça fait rien de spécial, mais le curseur change.
          </p>
        </div>

        <div className="gallery-grid">
          {tiles.map((t, i) =>
          <div key={i} className={`tile ${t.size}`} data-cursor="hover">
              <div className={`tile-inner ${t.ph}`}></div>
              <div className="timestamp">{t.ts}</div>
              <div className="tile-overlay">
                <div className="tag">{t.tag}</div>
                <div className="cap">{t.cap}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>);

}

/* ============= ABOUT ============= */
function AboutPage() {
  const today = new Date().getDay(); // 0=dim, 1=lun...
  const hours = [
  { day: 'Lundi', time: 'Fermé', closed: true, idx: 1 },
  { day: 'Mardi', time: '17h — 01h', idx: 2 },
  { day: 'Mercredi', time: '17h — 01h', idx: 3 },
  { day: 'Jeudi', time: '17h — 02h', idx: 4 },
  { day: 'Vendredi', time: '17h — 03h', idx: 5 },
  { day: 'Samedi', time: '17h — 03h', idx: 6 },
  { day: 'Dimanche', time: '17h — 00h', idx: 0 }];


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
              {hours.map((h, i) =>
              <div
                key={i}
                className={`hours-row ${h.closed ? 'closed' : ''} ${h.idx === today ? 'tonight' : ''}`}>
                
                  <span className="day">{h.day}{h.idx === today ? ' · ce soir' : ''}</span>
                  <span className="time">{h.time}</span>
                </div>
              )}
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
    </div>);

}

/* ============= FOOTER ============= */
function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-big">REDRUM</div>
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Le bar</h4>
          <p>
            Bar alternatif underground depuis 2012.<br />
            Concerts, fléchettes, flippers, fish & chips.<br />
            On vous attend de pied ferme.
          </p>
        </div>
        <div className="footer-col">
          <h4>Naviguer</h4>
          <a onClick={() => setPage('home')} data-cursor="hover">Accueil</a>
          <a onClick={() => setPage('menu')} data-cursor="hover">Carte</a>
          <a onClick={() => setPage('events')} data-cursor="hover">Concerts</a>
          <a onClick={() => setPage('gallery')} data-cursor="hover">Galerie</a>
          <a onClick={() => setPage('about')} data-cursor="hover">Le bar</a>
        </div>
        <div className="footer-col">
          <h4>Adresse</h4>
          <p>
            Rue de la Madeleine 14<br />
            7500 Tournai · Belgique<br />
            +32 69 84 12 37
          </p>
        </div>
        <div className="footer-col">
          <h4>Suivre</h4>
          <a href="#" data-cursor="hover">Facebook</a>
          <a href="#" data-cursor="hover">Instagram</a>
          <a href="#" data-cursor="hover">Bandcamp</a>
          <a href="#" data-cursor="hover">Newsletter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 REDRUM BAR · TOURNAI · BE</span>
        <span className="warning">L'ABUS D'ALCOOL EST DANGEREUX, ON SAIT</span>
        <span>SITE DESSINÉ AU COUTEAU</span>
      </div>
    </footer>);

}

/* ============= APP ============= */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "splatX": 251,
  "splatY": 0,
  "splatSize": 300,
  "splatOpacity": 75,
  "splatRotate": 0,
  "barSize": 55,
  "barTilt": 0,
  "barSpacing": 14
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = useState('home');
  const [splashed, setSplashed] = useState(false);
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // splash
  useEffect(() => {
    const t = setTimeout(() => setSplashed(true), 1400);
    return () => clearTimeout(t);
  }, []);

  // page change → scroll top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [page]);

  // Apply splatter tweaks as CSS vars on :root
  useEffect(() => {
    const r = document.documentElement.style;
    r.setProperty('--splat-x', tweaks.splatX + 'px');
    r.setProperty('--splat-y', tweaks.splatY + 'px');
    r.setProperty('--splat-size', tweaks.splatSize + '%');
    r.setProperty('--splat-opacity', tweaks.splatOpacity / 100);
    r.setProperty('--splat-rotate', tweaks.splatRotate + 'deg');
    r.setProperty('--bar-size', (tweaks.barSize / 100) + 'em');
    r.setProperty('--bar-tilt', tweaks.barTilt + 'deg');
    r.setProperty('--bar-spacing', (tweaks.barSpacing / 100) + 'em');
  }, [tweaks]);

  return (
    <>
      <div className={`splash ${splashed ? 'hidden' : ''}`}>
        <div className="splash-content">
          <div className="word">REDRUM</div>
          <div className="sub">Ouverture des verrous…</div>
        </div>
      </div>

      {/* Cursor handled natively via CSS cursor: url('skeleton.cur') */}

      <TopBar page={page} setPage={setPage} />

      <div className="grain"></div>
      <div className="scanlines"></div>


      <main data-screen-label={`Redrum · ${page}`}>
        {page === 'home' && <HomePage setPage={setPage} />}
        {page === 'menu' && <MenuPage />}
        {page === 'events' && <EventsPage />}
        {page === 'gallery' && <GalleryPage />}
        {page === 'about' && <AboutPage />}
      </main>

      <Footer setPage={setPage} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Splatter" />
        <TweakSlider label="X" value={tweaks.splatX} min={-300} max={300} step={1} unit="px"
          onChange={(v) => setTweak('splatX', v)} />
        <TweakSlider label="Y" value={tweaks.splatY} min={-300} max={300} step={1} unit="px"
          onChange={(v) => setTweak('splatY', v)} />
        <TweakSlider label="Taille" value={tweaks.splatSize} min={50} max={600} step={10} unit="%"
          onChange={(v) => setTweak('splatSize', v)} />
        <TweakSlider label="Opacité" value={tweaks.splatOpacity} min={0} max={100} step={5} unit="%"
          onChange={(v) => setTweak('splatOpacity', v)} />
        <TweakSlider label="Rotation" value={tweaks.splatRotate} min={0} max={360} step={5} unit="°"
          onChange={(v) => setTweak('splatRotate', v)} />
        <TweakSection label="BAR" />
        <TweakSlider label="Taille lettres" value={tweaks.barSize} min={20} max={120} step={1} unit="%"
          onChange={(v) => setTweak('barSize', v)} />
        <TweakSlider label="Inclinaison" value={tweaks.barTilt} min={-15} max={15} step={1} unit="°"
          onChange={(v) => setTweak('barTilt', v)} />
        <TweakSlider label="Espacement" value={tweaks.barSpacing} min={0} max={50} step={1} unit="%"
          onChange={(v) => setTweak('barSpacing', v)} />
      </TweaksPanel>
    </>);

}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);