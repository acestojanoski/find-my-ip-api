import {Router} from 'express';
import routeHandler from '../middlewares/route-handler';
import ping from '../handlers/ping';

const router = Router();

router.get('/ping', routeHandler(ping));

export default router;
