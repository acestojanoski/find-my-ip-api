import {Router} from 'express';
import swaggerUiExpress from 'swagger-ui-express';
import loadSwaggerTemplate from '../utils/load-swagger-template';

const router = Router();

router.use('/api-specs', swaggerUiExpress.serve);
router.get('/api-specs', swaggerUiExpress.setup(loadSwaggerTemplate()));

export default router;
