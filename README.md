# API REST para Adopción de Mascotas con Node.js, Express, MongoDB y Mongoose

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)](https://mongoosejs.com/)

## Descripción

Este repositorio contiene el código fuente de una **API REST** construida para una aplicación de **adopción de mascotas** utilizando **Node.js**, **Express**, **MongoDB** y **Mongoose**. La API permite gestionar información sobre mascotas disponibles para adopción, con el uso de **schemas**, **modelos**, y la aplicación de **validaciones** a los datos para asegurar su integridad.

## Características

- **CRUD completo** para gestionar las mascotas (Crear, Leer, Actualizar y Eliminar).
- Uso de **Mongoose** para manejar la base de datos **MongoDB**.
- **Validaciones** en los datos de las mascotas, como la edad, nombre y descripción.
- **Arquitectura MVC** (Modelo-Vista-Controlador) para organizar el código.
- Optimización y buenas prácticas en el desarrollo de APIs.

## Requisitos

- [Node.js](https://nodejs.org/) (v14+)
- [MongoDB](https://www.mongodb.com/)
- [NPM](https://www.npmjs.com/)

## Instalación

1. Clona este repositorio:

    ```bash
    git clone https://github.com/ljcl79/adopcion-mascotas-api.git
    ```

2. Accede al directorio del proyecto:

    ```bash
    cd adopcion-mascotas-api
    ```

3. Instala las dependencias:

    ```bash
    npm install
    ```

4. Configura las variables de entorno en un archivo `.env` con tu conexión de MongoDB:

    ```bash
    MONGODB_URI=mongodb://localhost:27017/adopcion-mascotas
    ```

5. Inicia el servidor:

    ```bash
    npm start
    ```

## Uso

Una vez iniciado el servidor, puedes acceder a los siguientes endpoints para gestionar las mascotas:

- **GET** `/mascotas`: Listar todas las mascotas disponibles.
- **POST** `/mascotas`: Crear una nueva mascota.
- **GET** `/mascotas/:id`: Obtener información de una mascota por su ID.
- **PUT** `/mascotas/:id`: Actualizar la información de una mascota.
- **DELETE** `/mascotas/:id`: Eliminar una mascota.

## Tecnologías

Este proyecto fue desarrollado utilizando las siguientes tecnologías:

- **[Node.js](https://nodejs.org/)**: Entorno de ejecución para JavaScript en el servidor.
- **[Express](https://expressjs.com/)**: Framework minimalista para Node.js.
- **[MongoDB](https://www.mongodb.com/)**: Base de datos NoSQL orientada a documentos.
- **[Mongoose](https://mongoosejs.com/)**: Librería de modelado de objetos para MongoDB y Node.js.

## Contribuciones

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork, crear una rama y realizar un pull request con tus mejoras.

## Licencia

Este proyecto está bajo la [Licencia MIT](LICENSE).

