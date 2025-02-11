import 'dotenv/config';
import express from 'express';
import routesMascotas from './routes/mascotas.js';
import routesUsuarios from './routes/usuarios.js';
import bodyParser from 'body-parser';
import dbClient from './config/dbClient.js';

const app = express();

import swaggerUI from 'swagger-ui-express';
import swaggerDocumentation from './swagger.json';



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocumentation));

app.use('/pets', routesMascotas);
app.use('/users', routesUsuarios);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor activo en el puerto ' + PORT))
} catch (e) {
    console.log(e);
}

process.on('SIGINT', async () => {
    dbClient.cerrarConexion();
    process.exit(0);
});
