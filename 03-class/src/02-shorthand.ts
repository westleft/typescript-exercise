class School {
  private schools: string[] = [];

  // private readonly schoolID: string
  // private schoolName: string

  // 將上面的值寫進建構子的參數
  constructor(private readonly schoolID: string, private schoolName: string) {
    // this.name = n;
  }

  printSchool(this: School) {
    console.log(`Hello ${this.schoolName}, your id is ${this.schoolID}`);
  }
}
