import { Application } from 'express';
import { join } from 'path';

export class ConfigView {
	public static mount(_express: Application): Application {
        console.log(join(__dirname, '..', '..', '..', 'views'));
        _express.set('views', join(__dirname, '..', '..', '..', 'views'));
        _express.set('view engine', 'pug');

        return _express;
	}
}
