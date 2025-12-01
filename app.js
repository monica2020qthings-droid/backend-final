// app.js
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba para verificar que la API responde
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API funcionando!' });
});

export default app;
