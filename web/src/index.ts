import { User } from "./models/User";

const user = new User({ name: "John", age: 30 });

user.set({ name: "newname", age: 9999});

user.set({ name: "newname"});

user.set({ age: 9999});

user.set({ name: "Jane", age: 24});

console.log(user.get("name"));
console.log(user.get("age"));
