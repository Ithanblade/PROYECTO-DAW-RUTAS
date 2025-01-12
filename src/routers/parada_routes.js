import express from 'express';
import {
  listarParadas,
  detalleParada,
  crearParada,
  actualizarParada,
  eliminarParada
} from '../controllers/parada_controller.js';

const router = express.Router();

router.get('/paradas', listarParadas);

router.get('/parada/:id', detalleParada);

router.post('/parada/registro', crearParada);

router.put('/parada/:id', actualizarParada);

router.delete('/parada/:id', eliminarParada);

export default router;
