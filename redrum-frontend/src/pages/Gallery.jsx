import { TILES } from '../data/gallery.js';

export default function Gallery() {
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
          {TILES.map((t) => (
            <div key={t.size} className={`tile ${t.size}`} data-cursor="hover">
              <div className={`tile-inner ${t.ph}`}></div>
              <div className="timestamp">{t.ts}</div>
              <div className="tile-overlay">
                <div className="tag">{t.tag}</div>
                <div className="cap">{t.cap}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
