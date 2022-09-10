function Person() {}
Person.prototype.name = "zhangqiao";
let p1 = new Person();
console.log(p1.name);
p1.name = "shl";
console.log(p1.name);
p1.name = null;
console.log(p1.name);

delete p1.name;
console.log(p1.name);
