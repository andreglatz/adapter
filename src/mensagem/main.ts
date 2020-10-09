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
    const mensagem = this.adaptee.dizerOla();
    return `Adapter: ${mensagem}`;
  }

  public mensagemReversa(): string {
    const mensagem = this.adaptee.dizerOla().split('').reverse().join('');
    return `Adapter: ${mensagem}`;
  }
  
}

class Client {
  private adapter: Target;

  constructor(adapter: Target) {
    this.adapter = adapter;
  }

  public imprimirMensage() {
    console.log(this.adapter.mensagem());
  }

  public imprimirMensageReversa() {
    console.log(this.adapter.mensagemReversa());
  }
}

const adaptee: Adaptee = new Adaptee()
const adapter: Target = new Adapter(adaptee); 
const client = new Client(adapter);

client.imprimirMensage();
client.imprimirMensageReversa();