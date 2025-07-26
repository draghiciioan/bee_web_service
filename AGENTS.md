# 🐝 BeeConect - Ghid pentru Agenți de Codare AI

<div class="animate-glow" style="background: linear-gradient(90deg, var(--color-primary), var(--color-secondary), var(--color-accent)); background-size: 200% 200%;">
  <blockquote style="border-left: 4px solid var(--color-primary); padding: 10px 20px; margin: 20px 0; background-color: rgba(0, 0, 0, 0.05);">
    <p><strong>Acest document</strong> definește standardele și cerințele pe care agenții AI de codare (precum Claude și Codex) trebuie să le respecte când lucrează la proiectul BeeConect.</p>
  </blockquote>
</div>

## 🌟 Principii Generale

Când lucrezi ca agent AI de codare pentru proiectul BeeConect, trebuie să respecți următoarele principii:

- **Consistență**: Menține un stil de cod consistent în tot proiectul
- **Modularitate**: Creează componente reutilizabile și independente
- **Performanță**: Optimizează codul pentru viteză și eficiență
- **Accesibilitate**: Asigură-te că interfața utilizator este accesibilă tuturor
- **Securitate**: Implementează cele mai bune practici de securitate
- **Documentare**: Documentează codul și funcționalitățile în mod clar in trei moduri pentru non-tehnici, dezvoltatori si agentii ai

## 🖌️ Stilul de Cod și Formatare

### TypeScript/JavaScript

```typescript
// ✅ Folosește funcții arrow pentru funcții simple
const formatPrice = (price) => {
  return `${price.toFixed(2)} RON`;
};

// ✅ Folosește async/await pentru operații asincrone
async function fetchUserData(userId) {
  // Comentarii în română pentru logica complexă
  // Obține datele utilizatorului de la API
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error("Eroare la obținerea datelor:", error);
    return null;
  }
}

// ✅ Folosește tipuri TypeScript
interface UserProfile {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user" | "guest";
}

// Exemplu de funcție cu tipuri
function getUserDisplayName(user: UserProfile): string {
  return user.name || user.email.split("@")[0];
}
```

### Reguli de Formatare

- Folosește **double quotes** (`"`) pentru string-uri
- Folosește **semicoloane** (`;`) la sfârșitul declarațiilor
- Folosește **2 spații** pentru indentare
- Folosește **PascalCase** pentru numele componentelor React
- Folosește **camelCase** pentru variabile, funcții și proprietăți
- Folosește **UPPER_CASE** pentru constante
- Scrie comentarii în **română** pentru a explica logica complexă
- Folosește emojis pentru a îmbunătăți lizibilitatea documentației

## 📁 Structura Proiectului și Organizare

Respectă următoarea structură de fișiere:

```
src/
├── api/              # Configurare și funcții pentru apeluri API
├── app/
│   ├── layouts/      # Componente de layout
│   ├── router.tsx    # Configurare router
│   └── themes/       # Fișiere CSS pentru teme
├── assets/           # Imagini, fonturi și alte resurse statice
├── components/       # Componente React reutilizabile
│   ├── ui/           # Componente UI de bază
│   └── features/     # Componente specifice funcționalităților
├── context/          # Context API și state management
├── hooks/            # Custom hooks
├── pages/            # Componente la nivel de pagină
├── types/            # Definiții TypeScript
└── utils/            # Funcții utilitare
```

### Convenții de Denumire

- **Fișiere componente**: `ComponentName.tsx`
- **Fișiere hooks**: `useHookName.ts`
- **Fișiere context**: `NameContext.tsx`
- **Fișiere utilitare**: `utilityName.ts`
- **Fișiere test**: `ComponentName.test.tsx`

## 🎨 Principii de Design

### Paletă de Culori

Folosește variabilele CSS definite în temă:

- **Culoare primară**: `var(--color-primary)` (#FFD500, galben)
- **Culoare secundară**: `var(--color-secondary)` (#FF00FF, magenta)
- **Culoare accent**: `var(--color-accent)` (#00AEEF, albastru deschis)
- **Fundal dark mode**: `bg-gray-950`
- **Text dark mode**: `text-white`

### Clase de Animație

Folosește clasele de animație predefinite:

- `animate-gradient`: Pentru gradienți animați
- `animate-glow`: Pentru efecte de strălucire pulsatorie
- `animate-float`: Pentru elemente plutitoare
- `animate-grid`: Pentru grile animate
- `animate-bee-flight`: Pentru animații specifice temei albinelor
- `animate-scan-line`: Pentru efecte futuriste de scanare

### Componente UI

- Folosește **TailwindCSS** pentru stilizare
- Folosește **DaisyUI** pentru componente predefinite
- Adaugă emoji-uri relevante pentru a îmbunătăți UX-ul (🐝, 🚀, etc.)
- Implementează design responsive pentru toate ecranele

## 🔒 Securitate și Performanță

### Securitate

- Validează toate datele de intrare de la utilizator
- Folosește React Query pentru gestionarea stării server
- Implementează autentificare JWT corect
- Nu expune informații sensibile în cod sau log-uri
- Folosește HTTPS pentru toate apelurile API

### Performanță

- Folosește React.memo pentru componente care nu se actualizează frecvent
- Implementează lazy loading pentru componente mari
- Optimizează re-renderizările folosind useMemo și useCallback
- Minimizează numărul de apeluri API
- Folosește imagini optimizate și comprimate

## 🧪 Testare și Documentare

### Testare

- Scrie teste unitare pentru componente și funcții
- Folosește React Testing Library pentru testarea componentelor
- Asigură-te că testele acoperă cazurile de bază și edge cases
- Menține o acoperire de cod de cel puțin 80%

### Documentare

- Adaugă JSDoc pentru funcții și componente importante
- Documentează API-urile și parametrii
- Menține README-urile actualizate
- Adaugă comentarii pentru logica complexă (în română)

## 🔄 Integrare cu Microservicii

Când integrezi cu microserviciile BeeConect:

- Folosește interceptoarele Axios configurate în `src/api`
- Gestionează erorile API în mod consistent
- Implementează retry logic pentru apeluri eșuate
- Folosește tipuri TypeScript pentru request/response

## 📱 Responsive Design

- Implementează design mobile-first
- Folosește breakpoint-urile Tailwind: sm, md, lg, xl, 2xl
- Testează pe multiple dispozitive și browsere
- Asigură-te că interfața este utilizabilă pe toate dimensiunile de ecran

---

<div align="center" class="animate-float">
  <p style="color: var(--color-primary); font-weight: bold;">BeeConect - Excelență în Dezvoltare</p>
  <p style="font-size: 0.8em; color: var(--color-base-content);">© 2025 BeeConect. Toate drepturile rezervate.</p>
</div>