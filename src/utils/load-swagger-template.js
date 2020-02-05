import fs from 'fs';
import yaml from 'js-yaml';

export default () => {
	try {
		const swaggerTemplate = yaml.safeLoad(
			fs.readFileSync('docs/swagger-template.yaml', 'utf8')
		);

		return swaggerTemplate;
	} catch (error) {
		console.error('ERROR: ', error);
		return null;
	}
};
