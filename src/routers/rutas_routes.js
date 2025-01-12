import { Router } from 'express';
const router = Router();

import {
    listarRutas,
    detalleRuta,
    registrarRuta,
    actualizarRuta,
    eliminarRuta,
    listarRutasPorCorredor,
    listarParadasDeRuta,
} from "../controllers/ruta_controller.js";

import verificarAutenticacion from "../middlewares/autenticacion.js";
import { listarParadas } from '../controllers/parada_controller.js';


router.get("/rutas",  listarRutas);
router.get("/ruta/:id",  detalleRuta);
router.post("/ruta/registro",  registrarRuta);
router.put("/ruta/actualizar/:id",  actualizarRuta);
router.delete("/ruta/eliminar/:id",  eliminarRuta);
router.get("corredor/rutas/:corredorId", listarRutasPorCorredor);
router.get("/ruta/paradas/:id", listarParadasDeRuta);

export default router;
