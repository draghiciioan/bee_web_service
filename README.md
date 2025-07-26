# BeeConect - Serviciu Web

## Descriere Generală

Serviciul Web BeeConect este interfața frontend a platformei BeeConect, oferind o experiență de utilizare modernă și intuitivă pentru clienți și administratori de afaceri. Acest serviciu este construit folosind React, TypeScript și Vite, și se integrează cu microserviciile backend prin API-uri REST.

## Tehnologii Utilizate

- **React 19**: Bibliotecă JavaScript pentru construirea interfețelor utilizator
- **TypeScript**: Superset JavaScript cu tipare statică
- **Vite**: Instrument de build rapid pentru dezvoltare modernă web
- **TailwindCSS**: Framework CSS pentru design rapid și responsiv
- **DaisyUI**: Componente UI bazate pe TailwindCSS
- **Axios**: Client HTTP pentru efectuarea cererilor API
- **React Router**: Bibliotecă pentru rutare în aplicații React

## Structura Proiectului

- **src/services/apiClient.ts**: Configurare Axios pentru comunicarea cu serviciile backend
- **src/components/**: Componente React reutilizabile
- **src/context/**: Contexte React pentru gestionarea stării globale
- **src/hooks/**: Hook-uri personalizate React
- **src/pages/**: Componente de pagină pentru diferite rute
- **src/routes/**: Configurare rutare pentru aplicație

## Configurare și Rulare

### Cerințe Preliminare

- Node.js 18+ 
- npm sau yarn

### Instalare Dependențe

```bash
npm install
# sau
yarn install
```

### Variabile de Mediu

Creați un fișier `.env` în directorul rădăcină cu următoarele variabile:

```
VITE_AUTH_API_URL=https://localhost:8001
VITE_CUSTOMERS_API_URL=https://localhost:8016
```

Aceste adrese sunt folosite de fișierul `src/services/apiClient.ts` pentru a crea
instanța Axios care trimite cereri către microserviciile de autentificare și clienți.

```ts
import apiClient from "@/services/apiClient";

apiClient.get("/status");
```

> **Notă**: Toate apelurile API folosesc HTTPS pentru securitate, chiar și în mediul de dezvoltare local.

### Rulare în Modul Dezvoltare

```bash
npm run dev
# sau
yarn dev
```

Aplicația va fi disponibilă la adresa http://localhost:3000.

### Construire pentru Producție

```bash
npm run build
# sau
yarn build
```

Fișierele optimizate pentru producție vor fi generate în directorul `dist`.

## Integrare cu Microservicii

Serviciul web se integrează cu următoarele microservicii:

- **Serviciul de Autentificare**: Gestionează autentificarea utilizatorilor, înregistrarea și gestionarea sesiunilor
- **Serviciul de Clienți**: Gestionează datele clienților, etichetele și notițele

## Funcționalități Principale

- **Autentificare**: Login, înregistrare, recuperare parolă
- **Gestionare Clienți**: Vizualizare, adăugare, editare și ștergere clienți
- **Profil Utilizator**: Gestionarea informațiilor personale și preferințelor

## Depanare

### Probleme Comune

1. **Erori de Compilare TypeScript**:
   - Verificați că toate dependențele sunt instalate corect
   - Asigurați-vă că sintaxa de import respectă configurația `verbatimModuleSyntax` din tsconfig

2. **Erori de Conectare la API**:
   - Verificați că serviciile backend rulează
   - Asigurați-vă că variabilele de mediu sunt configurate corect

3. **Probleme de Autentificare**:
   - Verificați că token-urile JWT sunt gestionate corect
   - Asigurați-vă că cererile includ anteturile de autorizare corecte

## Contribuție

Pentru a contribui la acest proiect:

1. Creați un branch nou pentru funcționalitatea dorită
2. Implementați modificările respectând standardele de cod
3. Rulați `npm install` pentru a activa scripturile Husky
4. Orice commit va porni automat `npm run lint` și `npm test` prin hook-ul *pre-commit*
5. Testați modificările local
6. Creați un pull request către branch-ul principal

> **Info**: Workflow-ul GitHub Actions rulează aceleași comenzi la fiecare pull request.

## Licență

Acest proiect este proprietar și confidențial. Toate drepturile rezervate.