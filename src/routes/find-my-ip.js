import {Router} from 'express';
import routeHandler from '../middlewares/route-handler';
import findMyIp from '../handlers/find-my-ip';

const router = Router();

router.get('/', routeHandler(findMyIp));

export default router;
