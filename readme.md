# Pruebas de Automatización - Módulo Recruitment

Este directorio contiene el conjunto completo de casos de prueba automatizados para el módulo **Recruitment** de la aplicación OrangeHRM.

## 📋 Descripción

Las pruebas incluyen:
- Navegación por el módulo de recruitment
- Búsqueda de candidatos
- Creación, edición y eliminación de candidatos
- Validación de campos requeridos
- Cambio de pestañas
- Pruebas de cobertura funcional completa

## 🛠️ Instalación

### 1. Instalar dependencias

```bash
npm install
```

### 2. Instalar Playwright y navegadores si fuera necesario

```bash
npx playwright install
```

### 3. Instalar Allure CLI

Si no está instalado:

```bash
npm install -g allure
```

Verificar instalación:

```bash
allure --version
```

## 🚀 Ejecutar pruebas

### Ejecutar todas las pruebas del módulo Recruitment

```bash
npx playwright test tests/recruitment
```

Las pruebas se ejecutarán en Chrome visible.

### Ejecutar pruebas con opciones específicas

**Ejecutar un archivo de prueba específico:**

```bash
npx playwright test tests/recruitment/search-test.spec.js
```

**Ejecutar en modo debug:**

```bash
npx playwright test --debug
```

**Ejecutar con reporte detallado:**

```bash
npx playwright test --reporter=html
```

## 📊 Ver Reportes

### Ver reporte HTML de Playwright

```bash
npx playwright show-report
```

### Generar reporte Allure

```bash
allure generate ./allure-results --clean -o ./allure-report
```

### Abrir reporte Allure

```bash
allure open ./allure-report
```

## 📁 Estructura de archivos

```
tests/recruitment/
├── add-candidate-negative-required-field-test.spec.js    # Validación de campos requeridos
├── complete-candidate-registr.spec.js                    # Registro completo de candidato
├── data-driven-test.spec.js                              # Pruebas data-driven
├── delete-candidate-test.spec.js                         # Eliminación de candidatos
├── keyword-search-test.spec.js                           # Búsqueda por palabras clave
├── navegation-recruiment-test.spec.js                    # Navegación del módulo
├── search-test.spec.js                                   # Búsqueda de candidatos
├── tab-switch-test.spec.js                               # Cambio de pestañas
├── cobertura-pruebas.md                                  # Documentación de cobertura
```

## ⚙️ Requisitos Previos

- **Node.js** v14 o superior
- **npm** v6 o superior
- **Playwright** (se instala con npm install)
- **Allure CLI** (se instala con npm install -g allure)

## 🔧 Configuración

La configuración de Playwright se encuentra en:

```
playwright.config.js
```

Las configuraciones principales incluyen:
- Navegadores: Chrome
- Tiempo de espera: 30 segundos
- Modo headless: deshabilitado (para ver la ejecución)

## 📝 Notas

- Las pruebas utilizan la estructura **AAA (Arrange/Act/Assert)**
- Se reutilizan funciones helper para acciones comunes
- Los datos de prueba están centralizados en `data/`
- Los reportes se generan automáticamente en cada ejecución

## 🤝 Contacto

Para dudas o reportar problemas con las pruebas, consulta con el equipo de QA.

---

**Última actualización:** Mayo 2026
