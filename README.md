# QA Automation Course

Proyecto de automatización de pruebas E2E con **Playwright** y **TypeScript**, usando el patrón **Page Object Model (POM)**. La aplicación bajo prueba es un homebanking demo.

## Requisitos previos

- [Node.js](https://nodejs.org/) (LTS recomendado, v18+)
- npm (incluido con Node.js)
- [Allure Commandline](https://docs.qameta.io/allure/) instalado globalmente para generar reportes
- Git

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/mati2088/QA-AUTOMATION-COURSE.git
cd QA-AUTOMATION-COURSE
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Instalar los navegadores de Playwright

```bash
npx playwright install
```

> Para instalar también las dependencias del sistema operativo (necesario en Linux/CI):
> ```bash
> npx playwright install --with-deps
> ```

### 4. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```env
USUARIO=tu_usuario
PASSWORD=tu_contraseña
```

> Estas credenciales son utilizadas por el test de login exitoso.

## Estructura del proyecto

```
QA-AUTOMATION-COURSE/
├── src/
│   ├── data/           # Datos de prueba en formato JSON
│   ├── pages/          # Page Objects (selectores y acciones por página)
│   ├── steps/          # Steps (lógica de negocio reutilizable)
│   └── tests/          # Specs (casos de prueba)
├── allure-results/     # Resultados raw generados por allure-playwright
├── allure-report/      # Reporte HTML generado por Allure
├── playwright.config.ts
├── package.json
└── .env                # Variables de entorno (no versionado)
```

## Datos de prueba (JSON)

Los datos de prueba se manejan desde archivos JSON ubicados en `src/data/`. Esto permite centralizar y mantener los datos sin tocar el código de los tests.

Ejemplo: `src/data/loginData.json`

## Ejecutar los tests

### Todos los tests

```bash
npm test
```

### Con interfaz visual (modo UI)

```bash
npm run test:ui
```

### Un archivo específico

```bash
npx playwright test src/tests/login.spec.ts
```

### Tests por tag

```bash
npx playwright test --grep "@pruebaTarjeta"
```

## Reportes con Allure

Este proyecto usa **allure-playwright** como reporter. Los resultados raw se generan automáticamente en `allure-results/` al correr los tests.

### Generar y abrir el reporte

```bash
npm run reporte
```

> Este comando genera el reporte HTML en `allure-report/` y lo abre en el navegador automáticamente.

## Configuración

El archivo `playwright.config.ts` define:

| Opción | Valor |
|--------|-------|
| Directorio de tests | `./src/tests` |
| Navegador | Chromium (Desktop Chrome) |
| Modo headless | `false` (ventana visible) |
| Screenshots | Solo en fallos |
| Reintentos en CI | 2 |
| Reporter | allure-playwright |

## CI/CD

El proyecto incluye un workflow de GitHub Actions en `.github/workflows/playwright.yml` que ejecuta los tests automáticamente en cada push o pull request a `main`/`master`. Los reportes se guardan como artefactos por 30 días.

## Aplicación bajo prueba

**URL:** https://homebanking-demo-tests.netlify.app/

| Credencial de prueba | Usuario | Contraseña |
|----------------------|---------|------------|
| Login exitoso        | Ver `.env` | Ver `.env` |
| Cuenta bloqueada     | `locked` | `locked` |
| Demo general         | `demo` | `demo123` |
