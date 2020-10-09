export interface IRepositorio {
  select(index: number): number;
  selectAll(): number[];
  insert(numero: number): number[];
  update(index: number, elemento: number): number[];
  delete(index: number): number[];
}
