import { config } from 'dotenv';
import { db } from '@vercel/postgres';

// Cargar las variables de entorno desde el archivo .env
config();

// Conectar a la base de datos usando POSTGRES_URL
const client = await db.connect({
  connectionString: process.env.DATABASE_URL, // O usa DATABASE_URL si prefieres
});

export default client;