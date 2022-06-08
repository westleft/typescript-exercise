"use strict";
class School {
    // private readonly schoolID: string;
    // private schoolName: string;
    // 將上面的值寫進建構子的參數
    constructor(schoolID, schoolName) {
        this.schoolID = schoolID;
        this.schoolName = schoolName;
        this.schools = [];
        // this.name = n;
    }
    printSchool() {
        console.log(`Hello ${this.schoolName}, your id is ${this.schoolID}`);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMDItc2hvcnRoYW5kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjLzAyLXNob3J0aGFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsTUFBTSxNQUFNO0lBR1YscUNBQXFDO0lBQ3JDLDhCQUE4QjtJQUU5QixnQkFBZ0I7SUFDaEIsWUFBNkIsUUFBZ0IsRUFBVSxVQUFrQjtRQUE1QyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBUTtRQU5qRSxZQUFPLEdBQWEsRUFBRSxDQUFDO1FBTzdCLGlCQUFpQjtJQUNuQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxJQUFJLENBQUMsVUFBVSxnQkFBZ0IsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQztDQUNGIn0=