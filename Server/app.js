import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from '@apollo/server/express4';
import cors from 'cors';
import http from 'http';

export async function startApolloServer( typeDefs, resolvers) {
    const app = express();
    const httpServer = http.createServer(app);
    //si queremos agregar mas modulos o tener red API tenemos que agregar mas modulos
    //de esta forma o pasarlos como parametros en la funcion de conexion de graphql
    app.get('/', (req, res) => res.send('Binvenido a tu GraphQl API!'))

    const server = new ApolloServer({
        typeDefs: typeDefs,
        resolvers: resolvers
    })
    await server.start();

    app.use('/graphql', cors(), express.json(), expressMiddleware(server));
    await new Promise(resolve => httpServer.listen({
        port: 4000
    }, resolve));
    console.log(`Server ejecutandose en http://localhost:4000/graphql`);
}