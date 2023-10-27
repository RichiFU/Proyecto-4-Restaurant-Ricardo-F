# Proyecto Restaurant: Restobar Arcade

Este proyecto es un sitio web para el Restobar Arcade Taste, un lugar temático que combina deliciosa comida con videojuegos retro. Está construido en React y utiliza Bootstrap y CSS para la maquetación y estilos. A continuación, se describen los componentes y funcionalidades clave que componen este proyecto.

## Componentes Principales

### Sobre Nosotros

Este componente muestra información sobre el Restobar Arcade Taste, incluyendo su historia, ubicación y horarios de funcionamiento. Además, muestra una imagen relacionada con el lugar. Este componente se encuentra en el archivo `about.jsx`.

### Admin

El componente Admin permite gestionar las reservas de clientes. Puedes agregar, editar y eliminar reservas. Los datos se almacenan en Firebase Firestore. Este componente se encuentra en el archivo `admin.jsx`.

### Contacto

El componente Contacto proporciona un formulario de contacto donde los usuarios pueden enviar mensajes al restaurante. Los mensajes se almacenan en Firebase Firestore. Este componente se encuentra en el archivo `contacto.jsx`.

### Home

Este componente muestra la página de inicio con información sobre el restaurante y una presentación de imagenes (carousel). Se encuentra en el archivo `home.jsx`.

### Menu

El componente Menu muestra el menú del restaurante con una lista de tarjetas de distintos platos con sus valores y sus detalles. Los datos se obtienen de Firebase Firestore. Este componente se encuentra en el archivo `menu.jsx`.

### NotFoundPage

Cuando un usuario intenta acceder a una ruta no válida, se muestra el componente NotFoundPage, que proporciona una página de error 404 y un botón para volver a la página de inicio. Este componente se encuentra en el archivo `notfoundpage.jsx`.

### Reservas

Este componente permite a los usuarios realizar reservas para visitar el restaurante. Los datos de reserva se almacenan en Firebase Firestore. Este componente se encuentra en el archivo `reservas.jsx` Y también pueden visualizarse en `admin.jsx` para gestionarlos.

### Otros Componentes

- `InputReserva`: Componente reutilizable que muestra un formulario para introducir los datos de reserva. Se encuentra en el archivo `inputreserva.jsx`.

- `TablaReserva`: Componente que muestra una tabla con las reservas de los clientes, permitiendo editar y borrar reservas. Se encuentra en el archivo `tablareserva.jsx`.

- `Footer`: Componente que muestra el pie de página del sitio web con información de contacto y enlaces a redes sociales. Se encuentra en el archivo `footer.jsx`.

- `Navigate`: Componente que muestra la barra de navegación superior con enlaces a las diferentes secciones del sitio web. Se encuentra en el archivo `navigate.jsx`.

## Configuración de Firebase

El proyecto utiliza Firebase Firestore para almacenar datos de reservas y mensajes de contacto. La configuración de Firebase se encuentra en el archivo `firebase.js`.

## Enrutamiento

El enrutamiento se gestiona con React Router. Las rutas y la estructura de la aplicación se definen en el archivo `approutes.jsx`.

## Instalación

1. Clona el repositorio desde GitHub.
2. Abre una terminal y navega hasta la carpeta del proyecto.
3. Ejecuta `npm install` para instalar las dependencias.
4. Ejecuta `npm run dev` para iniciar la aplicación en modo de desarrollo.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript
- React
- React Router
- Firebase
- React Bootstrap
- React Icons
- Font Awesome

## Licencia

Este proyecto fue desarrollado por Ricardo Fuentes, Alias (RichiFu)
