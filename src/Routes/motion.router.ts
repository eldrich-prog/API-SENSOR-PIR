import router from "./router.instance";
import MotionHttpController from "../Controllers/motion.controller";

const HttpController = new MotionHttpController();


router.post('/motion/:str', HttpController.post);
router.get('/motion', HttpController.get);
router.get('/motion/ultimate', HttpController.getUltimate);
router.put('/motion/:id', HttpController.put);
router.delete('/motion/:id', HttpController.delete);



export default router;