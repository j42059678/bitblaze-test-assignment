import { ValidationPipe } from "@nestjs/common";

export class BootstrapValidation {
    static async bootstrap(app) {
        app.useGlobalPipes(new ValidationPipe({
            transform: true,
            whitelist: true,
            forbidNonWhitelisted: true
        }));
    }
}