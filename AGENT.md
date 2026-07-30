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

### [2026-07-30] - 3. Fázis: Vizuális Arculat & CSS Komponensek Teljes Kidolgozása
- **Elvégzett feladatok:**
  - Design tokens és globális keyframe animációk (`floatAnimation`, `pulseGlow`, `fadeIn`) finomítása a `variables.css`-ben.
  - Komponens stílusok teljes kidolgozása a `src/css/components/` könyvtárban:
    - `header.css`: Áttetsző glassmorphism navigáció, ragyogó champagne-arany CTA, hover mikro-interakciók és reszponzív menü.
    - `hero.css`: Impozáns vizuális szakasz gradient háttérrel, Playfair Display tipográfiával, lebegő statisztikai kártyákkal (`floatAnimation`).
    - `brand-split.css`: Kétoszlopos interaktív kártyadizájn a Bio Holisztika (zöld/terrakotta) és az Orvos-Esztétika (champagne/charcoal) pillérek megkülönböztetésére.
    - `services.css`: Szolgáltatás kártyák reszponzív grid elrendezésben, árazás és bérlet jelvények kiemelésével.
    - `calculator.css`, `giftcard.css`, `appointment.css`: Elegáns moduláris kártyák és CTA blokkok a 4 fő funkcióhoz.
    - `footer.css`: Sötét tónusú elegáns lábléc a Pécs-Donátus lokációval, nyitvatartással és elérhetőségekkel.
  - Fő stíluslap (`src/css/style.css`) konszolidálása az összes komponens importjával és globális reset-ekkel.
- **Következő lépések:**
  - A funkcionális JavaScript modulok (`quiz.js`, `booking.js`, `giftcard.js`, `loyalty.js`) megírása és interaktív bekötése.
  - Serverless API funkciók felállítása a Vercel/Node.js háttérhez.
