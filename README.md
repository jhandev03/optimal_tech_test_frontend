<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Optimal Tech - Frontend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            color: #333;
        }

        h1 {
            text-align: center;
            color: #2c3e50;
        }

        h2 {
            color: #e74c3c;
        }

        ul {
            padding-left: 20px;
        }

        pre {
            background-color: #f3f3f3;
            padding: 10px;
            border-radius: 5px;
        }

        code {
            font-family: "Courier New", Courier, monospace;
            background-color: #f3f3f3;
            padding: 2px 5px;
            border-radius: 3px;
        }

        a {
            color: #3498db;
            text-decoration: none;
        }

        a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>

    <h1 id="title">Optimal Tech - Frontend</h1>

    <h2>📦 Características</h2>
    <ul>
        <li>Operaciones CRUD para items.</li>
        <li>Integración con el backend mediante <strong>Axios</strong>.</li>
        <li>Estilos con <strong>Styled Components</strong>.</li>
        <li>Animaciones con <strong>Framer Motion</strong>.</li>
        <li>Desplegado en <strong>Render</strong>.</li>
        <li>Contenerizado con <strong>Docker</strong>.</li>
    </ul>

    <h2>🛠️ Instalación</h2>
    <ol>
        <li>Clona el repositorio:</li>
        <pre><code>git clone https://github.com/jhandev03/optimal-tech-frontend.git</code></pre>
        <li>Navega al directorio del proyecto:</li>
        <pre><code>cd optimal-tech-frontend</code></pre>
        <li>Instala las dependencias:</li>
        <pre><code>npm install</code></pre>
        <li>Configura las variables de entorno.</li>
        <li>Inicia la aplicación en modo desarrollo:</li>
        <pre><code>npm run dev</code></pre>
    </ol>

    <h2>⚙️ Variables de Entorno</h2>
    <p>Crea un archivo <code>.env</code> en la raíz del proyecto y define la siguiente variable:</p>
    <pre><code>VITE_API_URL=https://optimal-tech-test-backend.onrender.com</code></pre>

    <h2>🚀 Despliegue en Vercel</h2>
    <p>Este frontend está configurado para ser desplegado en <strong>Vercel</strong>.</p>
    <ol>
        <li>Crea un nuevo servicio de <strong>Static Site</strong> en <a href="https://vercel.com">Vercel</a>.</li>
        <li>Conecta el repositorio y añade las variables de entorno necesarias que estan en el .env.template.</li>
        <li>Render se encargará del despliegue automático.</li>
    </ol>

    <h2>🐋 Uso con Docker</h2>
    <p>Este proyecto está contenerizado para facilitar su despliegue en cualquier entorno.</p>
    <ol>
        <li>Construir la imagen:</li>
        <pre><code>docker build -t optimal-tech-frontend .</code></pre>
        <li>Ejecutar el contenedor:</li>
        <pre><code>docker run -p 3000:80 optimal-tech-frontend</code></pre>
    </ol>

    <h2>💻 Tecnologías Utilizadas</h2>
    <ul>
        <li><strong>React</strong></li>
        <li><strong>Vite</strong></li>
        <li><strong>Styled Components</strong></li>
        <li><strong>Framer Motion</strong></li>
        <li><strong>Axios</strong></li>
        <li><strong>Docker</strong></li>
        <li><strong>Render</strong></li>
    </ul>

    <h2>🤝 Contribución</h2>
    <p>Si deseas contribuir a este proyecto, sigue estos pasos:</p>
    <ul>
        <li>1. Haz un fork del repositorio.</li>
        <li>2. Crea una nueva rama (<code>git checkout -b feature/feature-name</code>).</li>
        <li>3. Realiza tus cambios y haz commit (<code>git commit -am 'Add new feature'</code>).</li>
        <li>4. Haz push a la rama (<code>git push origin feature/feature-name</code>).</li>
        <li>5. Abre un Pull Request.</li>
    </ul>

    <h2>💖 ¿Te gusta mi proyecto?</h2>
    <p>Para cualquier pregunta o sugerencia, no dudes en ponerte en contacto conmigo a través de <a href="mailto:jhandurango03@gmail.com">jhandurango03@gmail.com</a>.</p>

</body>

</html>
