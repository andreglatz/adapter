interface Target {
  mensagem(): string;
  mensagemReversa(): string;
}

class Adaptee {
  public dizerOla(): string {
    return 'Adaptee: Olá, galerinha!';
  }
}

class Adapter implements Target {
  
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  
  public mensagem(): string {
    const mensagem: string = this.adaptee.dizerOla();
    return `Adapter: ${mensagem}`;
  }

  public mensagemReversa(): string {
    const mensagem: string = this.adaptee.dizerOla().split('').reverse().join('');
    return `Adapter: ${mensagem}`;
  }
  
}

class Client {
  private adapter: Target;

  constructor(adapter: Target) {
    this.adapter = adapter;
  }

  public imprimirMensage() {
    const mensagem: string = this.adapter.mensagem();
    console.log(mensagem);
  }

  public imprimirMensageReversa() {
    const mensagem: string = this.adapter.mensagemReversa();
    console.log(mensagem);
  }
}

const adaptee: Adaptee = new Adaptee()
const adapter: Target = new Adapter(adaptee); 
const client: Client = new Client(adapter);

client.imprimirMensage();
client.imprimirMensageReversa();