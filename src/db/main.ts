import { ConstruirClient } from './Factory';
import { Client } from './Client';

const construirClient: ConstruirClient = new ConstruirClient();

const clientSqlServer: Client = construirClient.construirClient('sqlserver');
const clientMongoDb: Client = construirClient.construirClient('mongodb');


for (let index = 0; index < 5; index++) {
  clientMongoDb.inserir(index); 
}

for (let index = 0; index < 5; index++) {
  clientSqlServer.inserir(index); 
}

clientSqlServer.deletar(4);

clientMongoDb.atualizar(1, 8);

console.log("======== SQLSERVER =========")
clientSqlServer.imprimirTodos();

console.log("======== MONGODB =========")
clientMongoDb.imprimirTodos();

