"use strict";
class Depaement {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // private name: string;
        this.employees = [];
        // this.name = n;
    }
    describe() {
        console.log(`Hello ${this.name}, your id is ${this.id}`);
    }
    addEmployees(employee) {
        this.employees.push(employee);
        console.log(this.employees);
    }
}
// 使用 extends 關鍵字實現繼承，
// 子類別中使用 super 關鍵字來呼叫父類別的建構函式和方法。
class ITDepaement extends Depaement {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
        this.firstEmployee = admins[0];
    }
    get getFirstEmployee() {
        return this.firstEmployee;
    }
    // private employees 會噴錯
    // 需寫成 protected employees: string[] = [];
    addEmployees(employee) {
        this.employees.push(employee);
    }
}
const itDepaement = new ITDepaement("1", ["Max"]);
itDepaement.addEmployees("Tim");
// getter
console.log(itDepaement.getFirstEmployee);
// const accounting2 = { name: "name", describe : accounting.describe }
// accounting2.describe()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDEtYmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMDEtYmFzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sU0FBUztJQUliLFlBQTZCLEVBQVUsRUFBVSxJQUFZO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBSDdELHdCQUF3QjtRQUNkLGNBQVMsR0FBYSxFQUFFLENBQUM7UUFHakMsaUJBQWlCO0lBQ25CLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLElBQUksQ0FBQyxJQUFJLGdCQUFnQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFFBQWdCO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRjtBQUVELHNCQUFzQjtBQUN0QixrQ0FBa0M7QUFDbEMsTUFBTSxXQUFZLFNBQVEsU0FBUztJQU9qQyxZQUFZLEVBQVUsRUFBUyxNQUFpQjtRQUM5QyxLQUFLLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRGMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUU5QyxJQUFJLENBQUMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNoQyxDQUFDO0lBUEQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFBO0lBQzNCLENBQUM7SUFPRCx3QkFBd0I7SUFDeEIsMENBQTBDO0lBQzFDLFlBQVksQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUMvQixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFdBQVcsR0FBRyxJQUFJLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO0FBQ2pELFdBQVcsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7QUFFL0IsU0FBUztBQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7QUFJMUMsdUVBQXVFO0FBQ3ZFLHlCQUF5QiJ9