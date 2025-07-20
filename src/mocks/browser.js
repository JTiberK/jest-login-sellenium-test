// src/mocks/browser.js
import { setupWorker } from 'msw/browser'; // Importa setupWorker desde 'msw/browser'
import { handlers } from './handlers';

export const worker = setupWorker(...handlers);

// Opcional: Iniciar el worker inmediatamente para desarrollo
// worker.start();
