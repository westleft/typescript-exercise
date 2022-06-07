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
const accounting = new Depaement("9", "Accounting");
accounting.describe();
accounting.addEmployees("tim");
accounting.addEmployees("tina");
// const accounting2 = { name: "name", describe : accounting.describe }
// accounting2.describe()
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDEtYmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvMDEtYmFzaWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU0sU0FBUztJQUliLFlBQTZCLEVBQVUsRUFBVSxJQUFZO1FBQWhDLE9BQUUsR0FBRixFQUFFLENBQVE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBSDdELHdCQUF3QjtRQUNoQixjQUFTLEdBQWEsRUFBRSxDQUFDO1FBRy9CLGlCQUFpQjtJQUNuQixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxnQkFBZ0IsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVELFlBQVksQ0FBQyxRQUFnQjtRQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUU5QixDQUFDO0NBQ0Y7QUFFRCxNQUFNLFVBQVUsR0FBRyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEVBQUUsWUFBWSxDQUFDLENBQUM7QUFDcEQsVUFBVSxDQUFDLFFBQVEsRUFBRSxDQUFBO0FBQ3JCLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDOUIsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUcvQix1RUFBdUU7QUFDdkUseUJBQXlCIn0=