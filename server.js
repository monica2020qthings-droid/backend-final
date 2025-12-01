// server.js
import 'dotenv/config';
import app from './app.js';
import { connectDB } from './src/config/db.js';

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB(); // aquí usas tu db.js
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
  });
};

startServer();
