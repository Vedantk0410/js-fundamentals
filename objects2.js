//Javascripts Objects (very Important)

//1) Singleton(koi bhi constructor se banate he )
const mysym = Symbol("foo");
//2)// object Literals
Object.create;
const jsuser = {
  name: "Hitesh",
  fullname: "Hitesh Choudhary",
  [mysym]: "mykey1",
  age: 18,
  location: "Jaipur",
  email: "Hites@neilsoft.com",
  isloggedin: false,
  lastlogin: ["Monday", "Saturday"],
};
console.log(jsuser.email);
console.log(jsuser["email"]);
console.log(jsuser["fullname"]);
console.log(jsuser[mysym]);

// Some Methods in Javascript objects

jsuser.email = "hitesh@chatgpt.com";
Object.freeze(jsuser);

jsuser.greeting = function () {
  console.log("hello js user");
};

jsuser.greetingtwo = function () {
  console.log("hello again js user, ${this.name}");
};
console.log(jsuser);
