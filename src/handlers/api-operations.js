export default routers => {
	return async (req, res) => {
		const operations = [];

		if (routers && routers.length > 0) {
			routers.forEach(router => {
				router.stack.forEach(layer => {
					const route = layer.route;

					if (route) {
						operations.push(
							`${route.path} - ${Object.keys(
								route.methods
							).toString()}`
						);
					}
				});
			});
		}

		return operations;
	};
};
