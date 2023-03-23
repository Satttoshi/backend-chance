import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

console.log(chance.name());
console.log(chance.age());
console.log(chance.profession());

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.end(
      `Hello, my name is ${chance.name()} and I am ${chance.age()} years old. I am a ${chance.profession()}.`
    );
  } else {
    response.statusCode = 404;
    response.end("Not found");
  }
});
