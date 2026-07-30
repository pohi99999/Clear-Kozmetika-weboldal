# AGENT.md - Clear Kozmetika (Kelemen Anikó) Projekt Dokumentáció & Munkamenetek

## 1. Projekt Alapadatok
- **Projekt Célja:** A Clear Kozmetika (Kelemen Anikó) prémium, konverzió-optimalizált weboldalának és funkcionális moduljainak (24/7 online időpontfoglaló, VIP hűségpont rendszer, digitális névreszóló ajándékutalvány modul, interaktív bőrápolási kérdőív) elkészítése.
- **Helyi munkakörnyezet:** `Z:\001_Workspace\Clear Kozmetika (Kelemen Anikó)`
- **GitHub tároló:** `https://github.com/pohi99999/Clear-Kozmetika-weboldal.git`
- **Referencia projekt:** `Z:\001_Workspace\Hetenyi_Reni\`

---

## 2. Referencia Projekt Elemzés (Hetényi Reni Projekt)

A `Z:\001_Workspace\Hetenyi_Reni\` kozmetikai weboldal átfogó elemzése alapján az alábbi architekturális, technológiai és stílusbéli megoldásokat különítettük el adaptációra:

### Technológia & Architekturális Szerkezet
- **Tech Stack:** Vanilla HTML5 + CSS3 (Modular CSS) + Modern JavaScript (ES6+), Serverless Node.js backend (Vercel Functions), Firebase (Firestore & Auth) az adattároláshoz és felhasználói állapotok kezeléséhez.
- **Backend Serverless API:** `api/` struktúra (pl. `voucher.js`, `voucher-approve.js`, `loyalty.js`, `booking-webhook.js`, `chat.js`), Resend e-mail integrációval és `pdf-lib` automatizált PDF-generálással.
- **Moduláris Stílusarchitektúra:** `src/css/variables.css` (design tokenek), `base.css`, `style.css` és `src/css/components/` (különálló komponens CSS fájlok: `hero.css`, `cards.css`, `buttons.css`, `header.css`, `footer.css`, `vip.css`, stb.).

### UI/UX & Stíluselemek
- **Tipográfia:** Elegáns szerif címsorok ('Playfair Display') és jól olvasható sans-serif törzsszövegek ('Montserrat').
- **Vizuális Esztétika:** Glassmorphism felületek (`--bg-glass`), letisztult élek (éles / finom lekerekítések), prémium hangulatot árasztó micro-interakciók.
- **Interaktív Komponensek:**
  1. *Digitális Ajándékutalvány Generáló Modul:* Automatizált PDF ajándékkártya kiállítás, egyedi kódolás, Resend e-mail elküldés.
  2. *VIP Törzsvendég Hűségpont Rendszer:* Firebase kezelt fiókok, vásárlások/kezelések utáni pontjóváírás, kedvezményre/termékekre bevátható pontok.
  3. *Bőrápolási / Bőrdiagnosztika Kérdőív:* Interaktív döntési fa, amely személyre szabott kezelés- és termékajánlást ad a vendég válaszai alapján.
  4. *24/7 Online Időpontfoglaló:* Beágyazható és szinkronizálható naptár automatikus SMS/e-mail emlékeztetőkkel.

### Adaptációs Stratégia a Clear Kozmetika (Kelemen Anikó) Arculatára
- **Kettős Márkaidentitás Integrálása:** Míg a referencia oldal egy klasszikus kozmetikai szalonra fókuszál, a Clear Kozmetika kettős profilú: *Bio & Holisztikus manuálterápiák* (bio/Demeter alapanyagok, strukturált rézkancsós víz, fasciális arcterápia) + *Orvos-esztétikai & Csúcstechnológiás gépi kezelések* (HIEMT, Monosculpt RF, EndoTight, Carbon Peeling).
- **Színvilág & Arculat Finomhangolása:** A champagne/arany árnyalatokat kiegészítjük természetes bio-zöld és természetes föld/agyag tónusokkal, fenntartva a luxus és az organikus tisztaság egyensúlyát.
- **Termék & Szolgáltatás Szekcionálás:** Navigációs szétválasztás a pécsi fizikai szalon szolgáltatásai és a Clear Cosmetic natúrkozmetikumok webáruháza között.

---

## 3. Munkamenet-zárási Protokoll
1. **Haladás Rögzítése:** Minden munkamenet végén kötelező frissíteni az `AGENT.md` "Projekt állapota & Munkamenetek naplója" szekcióját az elvégzett feladatokkal, módosított fájlokkal és a következő lépésekkel.
2. **Git Commit & Push:** A munkamenet lezárásaként végre kell hajtani az alábbi git műveleteket:
   ```bash
   git add .
   git commit -m "<típus>: <részletes leírás magyarul vagy angolul>"
   git push origin main
   ```

---

## 4. Projekt Állapota & Munkamenetek Naplója

### [2026-07-30] - 4. Fázis: Interaktív JS Modulok & Gazdag HTML Tartalom
- **Elvégzett feladatok:**
  - **JavaScript modulok kódolása (`src/js/modules/`):**
    - `quiz.js`: Interaktív Bőrápolási Rutin Kérdőív és Szolgáltatás-választó logika személyre szabott kezelés- és natúr termékajánlással.
    - `giftcard.js`: Névreszóló Digitális Ajándékutalvány testreszabó élő kártyaelőnézet frissítéssel (összeg, címzett, feladó, üzenet).
    - `booking.js`: 24/7 Online Időpontfoglaló modal felugró ablak logika, időpontválasztó, űrlapkezelés és automatikus emlékeztető szimuláció.
    - `loyalty.js`: VIP Törzsvendég Hűségpont Rendszer pontkalkulátor és szintbeváltó előnézet (Bronz, Ezüst, Arany, Gyémánt szint).
    - `main.js`: Modulok inicializálása, reszponzív menü toggle, scrolled header hatás és szolgáltatás-mátrix tabos váltólogika.
  - **HTML Tartalom Teljes Expaniója (`index.html`):**
    - Kelemen Anikó szakmai portréjának és a szalon 4 fős szakértői ökoszisztémájának beépítése (Kelemen Anikó, Vilmos Krisztina, Vilmos Nóra, Minakhom Vatsana).
    - Teljes Szolgáltatási Mátrix és Árlista integrálása 4 tabos bontásban (Arckezelések, Gépi & Elektro-Esztétika, Fasciális Terápiák, Tartós Smink).
    - Interaktív modulok HTML konténereinek és a felugró `#booking-modal` ablaknak a teljes beépítése.
### [2026-07-30] - Chrome AI Audit IV: Teljesítmény, TTFB, LCP & Mobil Layout Prémium Finomhangolás
- **Projekt Státusza:** **Szigorúan Finomhangolt, Ultrafoglalás-Kész Prémium Mobiltipográfiájú & Edge Network Cachinggel Ellátott Weboldal**.
- **Elvégzett Optimalizálások:**
  1. **TTFB & Critical CSS Optimalizálás:**
     - `vercel.json` statikus Edge Network caching beállítása (`Cache-Control: public, max-age=31536000, immutable` a `/src/` és médiatípusok számára, instant frissítés az `index.html`-re).
     - DNS preconnect és dns-prefetch beállítások a Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`), FontAwesome cdnjs és Unsplash erőforrásokhoz.
     - `font-display: swap;` ellenőrzése és rögzítése minden helyi és beágyazott betűtípusnál (`Playfair Display`, `Montserrat`).
     - Script betöltés nem-blokkolóvá tétele (`defer` attribútum az ES modul fő belépési pontján).
  2. **Mobilnézet & Premium Layout Zárolása:**
     - Explicit `overflow-x: hidden;` és `max-width: 100%;` beállítása a `body`, `html`, `.site-header`, `.hero-section` és minden fő konténer elemre a vízszintes görgetés kizárására.
     - Mobileszközökön (max-width: 768px) a hero szekció címsorméretének arányosítása (`font-size: 2.1rem`, `line-height: 1.25`) és a sorközök kristálytiszta harmonizációja (`line-height: 1.6`).
     - Érintési felületek garanciája (min. 44x44px touch targets) az összes gombnál, navigációs hivatkozásnál és hamburger menü gombnál, finom `box-shadow` mélységérzettel ellátva.
     - Explicit `aspect-ratio` rögzítés a hero szekciónál, a kártyaelőnézeteknél, az ikon jelvényeknél és az avatároknál a layout shift (CLS) teljes nullázására.

### [2026-07-30] - Galaxy S25 Ultra Mobil Menü Z-Index, Backdrop & Hero Layout Fix
- **Elvégzett javítások:**
  1. **Mobil Hamburger Menü Overlay & Backdrop Fix (`src/css/components/header.css` és `index.html` inline CSS):**
     - Mobil navigáció overlay (`.main-nav`, `.nav-menu`) `z-index` értéke `9999`-re állítva, hogy garantáltan minden elem felett jelenjen meg.
     - Megnyitott mobil menü háttere 100%-os szilárd sötét áttetszőségre frissítve: `background: rgba(26, 26, 26, 0.98);` és `backdrop-filter: blur(15px);` (`-webkit-backdrop-filter: blur(15px);`), megelőzve a mögötte lévő Hero elemek átlátszódását és egybecsúszását.
     - `.mobile-menu-btn` `z-index: 10000;` beállítása a menügomb folyamatos elérhetőségéhez, továbbá a mobil menüpontok szövegszínének kontrasztosítása (`#FFFFFF`).
     - `top: 0; left: 0; width: 100vw; height: 100vh; position: fixed;` lefedettség biztosítása.
  2. **Hero Szekció & Jobb Szél Elcsúszás Fix (`src/css/components/hero.css`, `style.css` és `index.html` inline CSS):**
     - A `.hero-section`, `.hero-content` és `.hero-title` elemeknél biztonsági margó rögzítve: `padding-left: 1.25rem; padding-right: 1.25rem; box-sizing: border-box; max-width: 100%;`.
     - Jobb szélen túllógó szövegek és törések megelőzése: `word-break: break-word; overflow-wrap: break-word;` Galaxy S25 Ultra és nagy felbontású mobil kijelzőkön.

### [2026-07-30] - Radikális Mobilmenü Full-Screen Overlay & Hero Vízszintes Scroll Fix
- **Elvégzett radikális gyökérok-szintű layout javítások:**
  1. **Mobilmenü Teljes Átalakítása (`src/css/components/header.css`, `src/js/main.js` & `index.html` inline CSS):**
     - Megszüntetve a `.site-header` 70px-es magassági korlátozása általi menü-levágás: megnyitáskor a `.site-header` explicit `overflow: visible !important;` és `backdrop-filter: none !important;` beállítást kap.
     - Törzs szintű (body-wide) kiterjedésű full-screen fixed overlay rögzítve a `.main-nav.active` / `.main-nav.is-active` / `.nav-menu.is-active` osztályokon: `position: fixed !important; top: 0 !important; left: 0 !important; width: 100vw !important; height: 100vh !important; background: #1A1A1A !important; z-index: 99999 !important; display: flex !important; flex-direction: column !important; justify-content: center !important; align-items: center !important; overflow-y: auto !important;`.
     - `.mobile-menu-btn` `z-index: 100000 !important;` kiemelése a bezáró ikon folyamatos és akadálytalan eléréséhez.
  2. **Hero Szekció & Horizontális Scroll Kilógás Fix (`src/css/components/hero.css`, `src/css/style.css` & `index.html` inline CSS):**
     - `.hero-badge` (Holisztikus Bio & Orvos-Esztétikai Szalon jelvény) szövegénél engedélyezve a tetszőleges törés mobilon: `white-space: normal !important; text-align: center !important; max-width: 90vw !important; box-sizing: border-box !important; word-break: break-word;`.
     - Hero szekció minden elemére rögzítve: `max-width: 100% !important; box-sizing: border-box !important;`.
     - Szigorú globális elrendezés zárolása a `html, body` elemeken: `width: 100% !important; max-width: 100vw !important; overflow-x: hidden !important; position: relative;`.
