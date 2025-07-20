<h1 align="center">JEST LOGIN SELLENIUM TEST</h1>

## 🛠️ Pasos para ejecutar el proyecto localmente

### Clona el repositorio

```powershell
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

### Instala las dependencias

```powershell
npm install
```

### (Importante) Inicializa MSW (Mock Service Worker)

Este paso es necesario para poder simular las peticiones del backend en modo desarrollo.

```powershell
npx msw init public/ --save
```

🔁 Este comando debe ejecutarse al menos una vez después de clonar el proyecto, para generar el archivo public/mockServiceWorker.js.

### Inicia el servidor de desarrollo

```poweshell
npm run dev
```

### Abre la app en tu navegador

```cp
http://localhost:5173
```

## 🛞 GitHub actions 