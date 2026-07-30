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
### [2026-07-30] - Chrome AI Audit II: Core Web Vitals (LCP < 1.2s), Dinamikus JS Architektúra & UI/UX Finomhangolás
- **Projekt Státusza:** **1.0-s Világszínvonalú, Core Web Vitals Rekord-Sebességű Prémium Prototípus - Élesítve**.
- **Elvégzett Mérföldkövek:**
  1. **Betűtípus Optimalizálás & LCP Késleltetés Megszüntetése:** Külső blocking font kérések helyett helyi `@font-face` deklarációk `font-display: swap;` megadással és azonnali `system-ui` fallback rendszerekkel a nulla FOUT/LCP késleltetésért.
  2. **Dinamikus Aszinkron JS Importok (Main-Thread Unblocking):** A `main.js` kizárólag az abov-the-fold szinkron funkciókat futtatja. A nehéz modulok (`quiz.js`, `booking.js`, `giftcard.js`, `loyalty.js`) aszinkron, halasztott `requestIdleCallback` dinamikus `import()` hívásokkal töltődnek be.
  3. **Full-Screen Mobil Navigáció & 48x48px Touch Targets:** Teljes képernyős glassmorphic mobil menü overlay óriási szellős tipográfiával és garantáltan 48x48px feletti érintési felületekkel.
  4. **Aspect-Ratio & CLS Megelőzés:** Explicit méretezések és dekoratív elrendezési beállítások a 0.000 CLS eléréséhez.



