import {Router} from 'express';
import routeHandler from '../middlewares/route-handler';
import apiOperations from '../handlers/api-operations';

export default (...routers) => {
	const router = Router();

	router.get('/api-operations', routeHandler(apiOperations(routers)));

	return router;
};
