import { User } from "./models/User";

const user = new User({ name: "John", age: 30 });

user.on("change", () => {
  console.log("User was changed");
});

user.on("change", () => {
  console.log("User was changed 2");
});

user.on("save", () => {
  console.log("User was saved");
});

user.on("save", () => {
  console.log("User was saved 2");
});

user.trigger("change");
user.trigger("save");