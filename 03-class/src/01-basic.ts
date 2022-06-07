class Depaement {
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  describe(this: Depaement) {
    console.log(`Hello ${this.name}, your id is ${this.id}`);
  }

  addEmployees(employee: string){
    this.employees.push(employee)
    console.log(this.employees);
    
  }
}

const accounting = new Depaement("9", "Accounting");
accounting.describe()
accounting.addEmployees("tim")
accounting.addEmployees("tina")


// const accounting2 = { name: "name", describe : accounting.describe }
// accounting2.describe()