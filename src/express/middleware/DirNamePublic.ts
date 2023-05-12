import { Application } from 'express';
import express from 'express';
import { join } from 'path';

export class DirnamePublic {
	public static mount(_express: Application): Application {
        _express.use(express.static(join(__dirname, '..', 'public'), { maxAge: 86400000 }));

        return _express;
	}
}
