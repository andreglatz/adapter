import { MongoDB, SQLServer } from './Adaptee';
import { MongoDBAdapter, SQLServerAdapter } from './Adapter';
import { Client } from './Client';

export class ConstruirClient {
 
  private construirClientMongoDB(): Client {
    const sqlServer: SQLServer = new SQLServer();
    const adapter: SQLServerAdapter = new SQLServerAdapter(sqlServer);
    return new Client(adapter);
  }

  private construirClientSQLServer(): Client {
    const mongoDB: MongoDB = new MongoDB();
    const adapter: MongoDBAdapter = new MongoDBAdapter(mongoDB);
    return new Client(adapter);
  }

  public construirClient(bancoDeDados: string): Client {

    switch (bancoDeDados) {
      case 'sqlserver':
        return this.construirClientSQLServer();
      case 'mongodb':
        return this.construirClientMongoDB();
      default:
        return null;
    }

  }

}