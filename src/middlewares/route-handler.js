export default handler => {
	return async (req, res) => {
		console.info(
			'REQUEST: ',
			JSON.stringify(
				{
					body: req.body,
					params: req.params,
					query: req.query,
					headers: req.headers,
					connection: {
						remoteAddress: req.connection.remoteAddress,
					},
				},
				null,
				'\t'
			)
		);

		try {
			const result = await handler(req, res);

			console.info('RESPONSE: ', JSON.stringify(result, null, '\t'));

			const statusCode = result && result.statusCode;

			let cleanResult = result;

			if (statusCode) {
				delete cleanResult.statusCode;
			}

			return res.status(statusCode || 200).json(cleanResult);
		} catch (error) {
			console.error('ERROR: ', error);
			return res
				.status(error.statusCode || 500)
				.json({message: error.message});
		}
	};
};
