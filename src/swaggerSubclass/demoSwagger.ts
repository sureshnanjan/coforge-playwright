class Pett {
    constructor(public name: string) {}
  
    
    describe(): string {
      return `My name is ${this.name}.`;
    }
  }
  
  
  class Fishh extends Pett {
    constructor(name: string, public color: string) {
      super(name);
    }
  
    
    describe(): string {
      return `${super.describe()} I am a ${this.color} fishh.`;
    }
  }
  
  
  class Dogg extends Pett {
    constructor(name: string, public breed: string) {
      super(name);
    }
  
    
    describe(): string {
      return `${super.describe()} I am a ${this.breed} dogg.`;
    }
  }
  
  
  class Reptilee extends Pett {
    constructor(name: string, public species: string) {
      super(name);
    }
  
    
    describe(): string {
      return `${super.describe()} I am a ${this.species} reptilee.`;
    }
  }
  
  
  class Birdd extends Pett{
    constructor(name: string, public type: string) {
      super(name);
    }
  
    
    describe(): string {
      return `${super.describe()} I am a ${this.type} birdd.`;
    }
  }
  
  
  const goldfish = new Fishh("Nemo", "gold");
  console.log(goldfish.describe());
  
  const labrador = new Dogg("Buddy", "Labrador");
  console.log(labrador.describe());
  
  const turtle = new Reptilee("Jimmy", "turtle");
  console.log(turtle.describe());
  
  const parrot = new Birdd("zazzu", "parrot");
  console.log(parrot.describe());