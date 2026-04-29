import { Link } from 'react-router';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-big">REDRUM</div>
      <div className="footer-grid">
        <div className="footer-col">
          <h4>Le bar</h4>
          <p>
            Bar alternatif underground depuis 2012.<br />
            Concerts, fléchettes, flippers, fish &amp; chips.<br />
            On vous attend de pied ferme.
          </p>
        </div>
        <div className="footer-col">
          <h4>Naviguer</h4>
          <Link to="/" data-cursor="hover">Accueil</Link>
          <Link to="/menu" data-cursor="hover">Carte</Link>
          <Link to="/events" data-cursor="hover">Concerts</Link>
          <Link to="/gallery" data-cursor="hover">Galerie</Link>
          <Link to="/about" data-cursor="hover">Le bar</Link>
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
    </footer>
  );
}
