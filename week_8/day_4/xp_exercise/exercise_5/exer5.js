class Dog {
    constructor(name) {
      this.name = name;
    }
  };
  // 1
  class Labrador extends Dog {
    constructor(name, size) {
      this.size = size;
    }
  };
  
  
    // 2
  class Labrador extends Dog {
    constructor(name, size) {
      super(name);
      this.size = size;
    }
  };
  
  
    // 3
  class Labrador extends Dog {
    constructor(size) {
      super(name);
      this.size = size;
    }
  };
  
  
    // 4 // useless 
  class Labrador extends Dog {
    constructor(name, size) {
      this.name = name;
      this.size = size;
    }
  };