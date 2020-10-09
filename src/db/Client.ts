import { IRepositorio } from "./Target";

export class Client {
  
  private adapter: IRepositorio;

  constructor(adapter: IRepositorio) {
    this.adapter = adapter;
  }

  public selecionar(index: number): number {
    return this.adapter.select(index);
  }

  public selecionarTodos(): number[] {
    return this.adapter.selectAll();
  }

  public inserir(numero: number): number[] {
    return this.adapter.insert(numero);
  }

  public atualizar(index: number, numero: number): number[] {
    return this.adapter.update(index, numero);
  }

  public deletar(index: number): number[] {
    return this.adapter.delete(index);
  }

  public imprimirTodos(): void {
    const elementos: number[] = this.selecionarTodos();
    
    for (let index = 0; index < elementos.length; index++) {
      const element: number = elementos[index];
      console.log(element);
    }
    
  }
}