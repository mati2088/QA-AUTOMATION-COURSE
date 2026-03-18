# QA Automation Course

Proyecto de automatización de pruebas E2E con **Playwright** y **TypeScript**, usando el patrón Page Object Model (POM). La aplicación bajo prueba es un homebanking demo.

## Requisitos previos

- [Node.js](https://nodejs.org/) (LTS recomendado, v18+)
- npm (incluido con Node.js)
- Git

## Instalación

### 1. Clonar el repositorio

```bash
git clone <https://github.com/mati2088/QA-AUTOMATION-COURSE.git>
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
│   ├── pages/          # Page Objects (selectores y acciones por página)
│   ├── steps/          # Steps (lógica de negocio reutilizable)
│   └── tests/          # Specs (casos de prueba)
├── playwright.config.ts
├── package.json
└── .env                # Variables de entorno (no versionado)
```

## Ejecutar los tests

### Todos los tests

```bash
npx playwright test
```

### Un archivo específico

```bash
npx playwright test src/tests/login.spec.ts
```

### Tests por tag

```bash
npx playwright test --grep "@pruebaTarjeta"
```

### Ver el reporte HTML tras la ejecución

```bash
npx playwright show-report
```

## Configuración

El archivo `playwright.config.ts` define:

| Opción | Valor |
|--------|-------|
| Directorio de tests | `./src/tests` |
| Navegador | Chromium (Desktop Chrome) |
| Modo headless | `false` (ventana visible) |
| Screenshots | Solo en fallos |
| Reintentos en CI | 2 |
| Reporter | HTML |

## CI/CD

El proyecto incluye un workflow de GitHub Actions en `.github/workflows/playwright.yml` que ejecuta los tests automáticamente en cada push o pull request a `main`/`master`. Los reportes se guardan como artefactos por 30 días.

## Aplicación bajo prueba

**URL:** https://homebanking-demo-tests.netlify.app/

| Credencial de prueba | Usuario | Contraseña |
|----------------------|---------|------------|
| Login exitoso        | Ver `.env` | Ver `.env` |
| Cuenta bloqueada     | `locked` | `locked` |
| Demo general         | `demo` | `demo123` |
