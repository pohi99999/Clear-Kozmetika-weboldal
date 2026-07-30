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

### [2026-07-30] - 2. Fázis: Mappaszerkezet, Design System & HTML Alapváz
- **Elvégzett feladatok:**
  - Moduláris könyvtárstruktúra felállítása (`src/css/`, `src/css/components/`, `src/js/`, `src/js/modules/`, `src/assets/`, `api/`).
  - Clear Kozmetika egyedi Design System és CSS változók kódolása (`src/css/variables.css`: Champagne Gold, Soft Beige, Bio Leaf Green, Terracotta, Deep Charcoal tónusok, glassmorphic effektusok, Playfair Display & Montserrat tipográfia).
  - Moduláris CSS komponensek elkészítése (`header.css`, `hero.css`, `brand-split.css`, `services.css`, `calculator.css`, `giftcard.css`, `appointment.css`, `footer.css`).
  - Fő stíluslap (`src/css/style.css`) és JavaScript modulok belépési pontjainak (`main.js`, `quiz.js`, `booking.js`, `giftcard.js`, `loyalty.js`) elkészítése.
  - Szemantikus, SEO-re és helyi Pécs-Donátus lokációra optimalizált `index.html` váz elkészítése OpenGraph és Google Fonts beágyazással.
- **Következő lépések:**
  - Az interaktív bőrápolási kérdőív és szolgáltatás-választó modul működési logikájának kidolgozása.
  - Digitális ajándékutalvány rendelő és VIP hűségpont backend/frontend modulok megvalósítása.
