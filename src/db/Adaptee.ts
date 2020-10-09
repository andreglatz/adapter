export class MongoDB {
  private numeros: number[];

  constructor() {
    this.numeros = [];
  }

  public find(index: number): number {
    return this.numeros[index];
  }

  public findAll(): number[]{
    return this.numeros
  }

  public insert(numero: number): number[] {
    this.numeros.push(numero);
    return this.numeros;
  }

  public update(index: number, elemento: number): number[] {
    this.numeros[index] = elemento;
    return this.numeros;
  }

  public deleteOne(index: number): number[] {
    this.numeros.splice(index, 1);
    return this.numeros;
  }
}

export class SQLServer {
  private numeros: number[];

  constructor() {
    this.numeros = [];
  }

  public select(index: number): number {
    return this.numeros[index];
  }

  public selectAll(): number[] {
    return this.numeros;
  }

  public insert(numero: number): number[] {
    this.numeros.push(numero);
    return this.numeros;
  }

  public update(index: number, elemento: number): number[] {
    this.numeros[index] = elemento;
    return this.numeros;
  }

  public delete(index: number): number[] {
    this.numeros.splice(index, 1);
    return this.numeros;
  }
}