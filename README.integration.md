# Integrarea BeeConect Web Service cu Auth și Customers Services

## Modificări Efectuate

Pentru a asigura funcționarea corectă a serviciului web cu serviciile de autentificare și clienți, au fost efectuate următoarele modificări:

1. **Creare fișier .env în directorul bee_web_service**:
   - A fost creat un fișier `.env` cu următoarele variabile de mediu:
     ```
     VITE_AUTH_API_URL=https://localhost:8001
     VITE_CUSTOMERS_API_URL=https://localhost:8016
     ```

     > **Notă**: Toate apelurile API folosesc HTTPS pentru securitate, chiar și în mediul de dezvoltare local.
   - Aceste variabile sunt utilizate în `src/services/apiClient.ts` pentru a configura clientul Axios care comunică cu serviciile backend.

2. **Actualizare variabile de mediu în docker-compose.yml**:
   - Au fost actualizate variabilele de mediu pentru serviciul web:
     ```yaml
    environment:
      - NODE_ENV=development
      - VITE_AUTH_API_URL=https://localhost:8001
      - VITE_CUSTOMERS_API_URL=https://localhost:8016
    ```
   - Aceasta asigură că serviciul web primește variabilele de mediu corecte când este pornit cu Docker Compose.

3. **Actualizare configurație CORS**:
   - A fost adăugat `https://localhost:3001` la variabila `CORS_ORIGINS` pentru serviciile de autentificare și clienți:
     ```yaml
     CORS_ORIGINS=https://localhost:3000,https://localhost:8080,https://localhost:3001
     ```
   - Aceasta permite serviciului web să facă cereri cross-origin către serviciile backend.

## Instrucțiuni de Rulare

Pentru a testa integrarea serviciilor, urmați acești pași:

1. **Pornirea tuturor serviciilor**:
   ```bash
   cd C:/Users/jhony/Desktop/BeeConect/beeconect-dev
   make dev
   ```
   Aceasta va porni toate serviciile în modul de dezvoltare.

2. **Verificarea serviciilor**:
   - Serviciul de autentificare: https://localhost:8001
   - Serviciul de clienți: https://localhost:8016
   - Serviciul web: https://localhost:3001

3. **Testarea funcționalităților**:
   - Înregistrare cont nou: Accesați https://localhost:3001/register
   - Autentificare: Accesați https://localhost:3001/login
   - Gestionare clienți: Accesați https://localhost:3001/customers după autentificare

4. **Vizualizarea logurilor**:
   ```bash
   # Pentru toate serviciile
   make logs
   
   # Pentru serviciul de autentificare
   make logs-auth
   
   # Pentru serviciul de clienți
   make logs-customers
   
   # Pentru serviciul web
   make logs-web
   ```

5. **Oprirea serviciilor**:
   ```bash
   make stop-dev
   ```

## Depanare

Dacă întâmpinați probleme:

1. **Verificați că toate serviciile rulează**:
   ```bash
   make status
   ```

2. **Verificați logurile pentru erori**:
   ```bash
   make logs
   ```

3. **Reporniți serviciile**:
   ```bash
   make restart-dev
   ```

4. **Verificați configurația CORS**:
   - Asigurați-vă că `CORS_ORIGINS` include `https://localhost:3001` în configurația serviciilor backend.

5. **Verificați variabilele de mediu**:
   - Asigurați-vă că fișierul `.env` din directorul `bee_web_service` conține variabilele corecte.
   - Asigurați-vă că `docker-compose.yml` conține variabilele de mediu corecte pentru serviciul web.

## Concluzie

Aceste modificări asigură că serviciul web poate comunica corect cu serviciile de autentificare și clienți, permițând funcționalități precum înregistrarea conturilor, autentificarea și gestionarea clienților.