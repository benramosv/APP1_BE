// src/models/db.js
import { config } from 'dotenv';
import { createPool } from '@vercel/postgres';

// Cargar las variables de entorno desde el archivo .env
config();

let client;

// Función para conectar a la base de datos
export async function connect() {
  if (!client) {
    const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL;
    if (!connectionString) {
      throw new Error("No connection string found. Please set DATABASE_URL or POSTGRES_URL in your environment variables.");
    }
    client = createPool({
      connectionString: connectionString, // Usa DATABASE_URL o POSTGRES_URL
    });
  }
}

// Función para desconectar de la base de datos
export async function disconnect() {
  if (client) {
    await client.end();
    client = null; // Limpiar la referencia del cliente
  }
}

// Exportar el cliente para su uso en otras partes de la aplicación
export { client };