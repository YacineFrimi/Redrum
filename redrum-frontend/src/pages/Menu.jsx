import { useState } from 'react';
import { MENU, MENU_TABS } from '../data/menu.js';

export default function Menu() {
  const [cat, setCat] = useState('cocktails');

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
          {MENU_TABS.map((t) => (
            <button
              key={t.id}
              className={`menu-tab ${cat === t.id ? 'active' : ''}`}
              data-cursor="hover"
              onClick={() => setCat(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="menu-list">
          {MENU[cat].map((item, i) => (
            <div key={item.name} className="menu-item" data-cursor="hover">
              <div className="menu-item-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="menu-item-body">
                <div className="menu-item-name">{item.name}</div>
                <div className="menu-item-desc">{item.desc}</div>
              </div>
              <div className="menu-item-price">€{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
