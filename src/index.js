import express from 'express';
import cors from 'cors';

import pingRoute from './routes/ping';
import apiOperationsRoute from './routes/api-operations';
import findMyIpRoute from './routes/find-my-ip';
import apiSpecsRoute from './routes/api-specs';

const server = express();

// middlewares
server.use(cors());
server.use(express.json());

// register routes
server.use(apiSpecsRoute);
server.use(pingRoute);
server.use(findMyIpRoute);
server.use(
	apiOperationsRoute(
		apiOperationsRoute(),
		pingRoute,
		findMyIpRoute,
		apiSpecsRoute
	)
);

const port = process.env.PORT || 3001;

server.listen(port, () => {
	console.log('API is listening on port ', port);
});
