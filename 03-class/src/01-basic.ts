class Depaement {
  // private name: string;
  static year: number = 2020
  protected employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
    // this.name = n;
  }

  describe(this: Depaement) {
    console.log(`Hello ${this.name}, your id is ${this.id}`);
  }

  addEmployees(employee: string) {
    this.employees.push(employee);
    console.log(this.employees);
  }

  staticFunction(){
    // static method 只存在 class 中，不能被 instance 所提取
    // 下面會噴錯，因為是 static
    // console.log(this.year);
    // 改為以下
    console.log(Depaement.year);
  }
}

// 使用 extends 關鍵字實現繼承，
// 子類別中使用 super 關鍵字來呼叫父類別的建構函式和方法。
class ITDepaement extends Depaement {
  private firstEmployee: string;

  get getFirstEmployee() {
    return this.firstEmployee;
  }

  set setFirstEmployee(etEmployee: string) {
    this.firstEmployee = etEmployee;
  }

  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.firstEmployee = admins[0];
  }

  // private employees 會噴錯
  // 需寫成 protected employees: string[] = [];
  addEmployees(employee: string) {
    this.employees.push(employee);
  }
}

const itDepaement = new ITDepaement("1", ["Max"]);
itDepaement.addEmployees("Tim");

// getter
console.log(itDepaement.getFirstEmployee);
// setter
itDepaement.setFirstEmployee = "Momo";
// static
console.log(Depaement.year);



// const accounting2 = { name: "name", describe : accounting.describe }
// accounting2.describe()
