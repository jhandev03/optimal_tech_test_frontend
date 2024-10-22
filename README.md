
---

### **README del Frontend (Markdown Completo)**

```markdown
# Optimal Tech - Frontend

Este es el frontend del proyecto **Optimal Tech**, desarrollado con **React** y **Vite**. La aplicación permite gestionar items a través de una interfaz de usuario minimalista que interactúa con la API RESTful.

## 📦 Características

- Operaciones CRUD para items.
- Integración con el backend mediante **Axios**.
- Estilos creados con **Styled Components**.
- Animaciones con **Framer Motion**.
- Desplegado en **Render**.
- Contenerizado con **Docker**.

## 🛠️ Instalación

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/optimal-tech-frontend.git

Navega al directorio del proyecto:
cd optimal-tech-frontend

Instala las dependencias:
npm install

Configura las variables de entorno (ver sección Variables de Entorno).

Inicia la aplicación en modo desarrollo:

npm run dev
El frontend estará corriendo en http://localhost:3000.

⚙️ Variables de Entorno
Crea un archivo .env en la raíz del proyecto y define la siguiente variable:

env
Copiar código
VITE_API_URL=https://optimal-test-backend.onrender.com
🐋 Uso con Docker
Este proyecto está contenerizado para facilitar su despliegue en cualquier entorno.

Construir y Ejecutar el Contenedor
Construir la imagen:
bash
Copiar código
docker build -t optimal-tech-frontend .
Ejecutar el contenedor:
bash
Copiar código
docker run -p 3000:80 optimal-tech-frontend
El frontend estará disponible en http://localhost:3000.

🚀 Despliegue
Despliegue en Render
El frontend está configurado para ser desplegado en Render:

Crea un nuevo servicio de Static Site en Render.
Conecta el repositorio y añade la variable de entorno VITE_API_URL.
Render se encargará del despliegue automático.
💻 Tecnologías Usadas
React
Vite
Styled Components
Framer Motion
Axios
Docker
Render
🤝 Contribución
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/feature-name).
Realiza tus cambios y haz commit (git commit -am 'Add new feature').
Haz push a la rama (git push origin feature/feature-name).
Abre un Pull Request.
💖 ¿Te gusta mi proyecto?
Para cualquier pregunta o sugerencia, no dudes en ponerte en contacto conmigo a través de jhandurango03@gmail.com.