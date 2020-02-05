export default async (req, res) => {
	const xForwardedForHeader =
		req.headers['X-Forwarded-For'] || req.headers['x-forwarded-for'];

	const clientIp = xForwardedForHeader && xForwardedForHeader.split(',')[0];

	const ip = clientIp || req.connection.remoteAddress;

	return {ip};
};
