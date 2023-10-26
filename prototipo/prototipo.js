// Definindo uma função construtora
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  // Adicionando um método ao protótipo da função construtora
  Car.prototype.start = function() {
    console.log(`Starting the ${this.make} ${this.model}`);
  };
  
  // Criando instâncias
  const myCar = new Car('Toyota', 'Camry');
  const anotherCar = new Car('Honda', 'Civic');
  
  // Chamando o método do protótipo
  myCar.start(); // Saída: Starting the Toyota Camry
  anotherCar.start(); // Saída: Starting the Honda Civic
  