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

## 🛞 GitHub actions , CI/CD o WorkFlows

Suggested workflows<br>
Based on your tech stack

Flujos de trabajo sugeridos<br>
En función de su pila tecnológica

- **GitHub Actions**: Para automatizar pruebas, builds y despliegues.
- **CI/CD**: Para automatizar pruebas, builds y despliegues.
- **Workflows**: Para automatizar pruebas, builds y despliegues.


### Elegimos en nuestro caso

```
* Node.js *

* Build and test a Node.js project with npm.*
```

### Configuramos el archivo .github/workflows/node.js.yml

Por ahora , solo necesitamos configurar el archivo `.github/workflows/node.js.yml` para que se ejecute cada vez que se haga un push a la rama main. Luego no hacemos ningun cambio en el archivo.

### El primer test de GitHub Actions no lo pasa

Es necesario hacer un cambio en el archivo `package.json` para que el test de GitHub Actions pase.

```json
"scripts": {
  "test": "jest"
}
```

### El segundo test de GitHub Actions no lo pasa tampoco

El error indica que Jest no encontró ningún archivo de pruebas en tu proyecto.
Solución rápida y sencilla:

Agrega al menos un archivo de prueba.
Por ejemplo, crea un archivo llamado `App.test.js` en la raíz o dentro de una carpeta `__tests__`.

Ejemplo básico de archivo de prueba:


```javascript
// App.test.js
test('Ejemplo básico', () => {
  expect(1 + 1).toBe(2);
});
```

Ubicación recomendada:<br>
En la raíz del proyecto<br>
O dentro de una carpeta llamada `__tests__`<br>
Jest, por defecto, busca archivos que incluyan `.test.js`, `.spec.js`, o estén en carpetas `__tests__`.











Deploy to GitHub Pages  

