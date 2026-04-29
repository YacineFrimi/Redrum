# Redrum

Site du **Redrum**, bar alternatif à Tournai (BE).

## Front (`redrum-frontend/`)

Vite + React 19 + React Router 7.

```bash
cd redrum-frontend
npm install
npm run dev      # dev server sur http://localhost:5173
npm run build    # build prod dans dist/
npm run preview  # preview du build
```

### Polices

Les polices `ITC Benguiat` (licence commerciale Monotype/ITC) sont exclues du repo.
Pour faire tourner le site en local, place les `.otf` dans `redrum-frontend/public/fonts/` :
- `ITCBenguiatStd-BoldCn.otf`
- `ITCBenguiatStd-MediumCn.otf`
- `ITCBenguiatStd-BookCn.otf`

Sans elles, le site charge mais retombe sur les fallbacks (Times New Roman).
