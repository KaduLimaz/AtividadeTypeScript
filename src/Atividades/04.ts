export class Produto {
  constructor(
    public id: number, 
    public name: string,
    public price: number) {}
}

export class ListProducts {
  constructor(public produtos: any) {
    this.produtos = [];
  }

  cadastrar(produto: Produto) {
    this.produtos.push(produto);
  }

  list() {
    console.log("Lista de produtos:");
    for (const produto of this.produtos) {
      console.log(`ID: ${produto.id}`);
      console.log(`Nome: ${produto.name}`);
      console.log(`Valor: ${produto.price}`);
    }
  }

  delete(id: number) {
    this.produtos = this.produtos.filter((p:any) => p.id !== id);
  }
}
