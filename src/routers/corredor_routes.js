import { Router } from 'express';
import { listarCorredores, detalleCorredor, listarParadasDeCorredor, crearCorredor, actualizarCorredor, eliminarCorredor } from "../controllers/corredor_controller.js";

const router = Router();


router.get("/corredores", listarCorredores);
router.get("/corredor/:id", detalleCorredor);
router.get("/corredor/paradas/:id", listarParadasDeCorredor);
router.post("/corredor/registro", crearCorredor);
router.put("/corredor/actualizar/:id", actualizarCorredor);
router.delete("/corredor/eliminar/:id", eliminarCorredor);

export default router;
