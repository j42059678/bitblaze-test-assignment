import compression from '@fastify/compress';


export default async (app) => {
    await app.register(compression);
}