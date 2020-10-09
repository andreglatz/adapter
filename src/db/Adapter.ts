import { IRepositorio } from './Target';
import { MongoDB, SQLServer } from './Adaptee';

export class SQLServerAdapter implements IRepositorio {

  private sqlServer: SQLServer;

  constructor(sqlServer: SQLServer) {
    this.sqlServer = sqlServer;
  }
  selectAll(): number[] {
    return this.sqlServer.selectAll();
  }
  select(index: number): number {
    return this.sqlServer.select(index);
  }
  insert(numero: number): number[] {
    return this.sqlServer.insert(numero);
  }
  update(index: number, elemento: number): number[] {
    return this.sqlServer.update(index, elemento);
  }
  delete(index: number): number[] {
    return this.sqlServer.delete(index);
  }
}

export class MongoDBAdapter implements IRepositorio {

  private mongoDB: MongoDB;

  constructor(mongoDB: MongoDB) {
    this.mongoDB = mongoDB;
  }
  selectAll(): number[] {
    return this.mongoDB.findAll();
  }
  select(index: number): number {
    return this.mongoDB.find(index);
  }
  insert(numero: number): number[] {
    return this.mongoDB.insert(numero);
  }
  update(index: number, elemento: number): number[] {
    return this.mongoDB.update(index, elemento);
  }
  delete(index: number): number[] {
    return this.mongoDB.deleteOne(index);
  }
}