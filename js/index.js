// Iteration 1: Names and Input
console.log("I'm ready!");

let hacker1 = "Zeus";

console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Ana";

console.log(`The navigator's name is ${hacker2}`);
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters.`
  );
} else if (hacker1.length === hacker2.length) {
  console.log(
    `Wow, both have equally long names, ${hacker1.length} characters.`
  );
}

// Iteration 3: Loops

let hacker1Upper = hacker1.toUpperCase();
console.log(hacker1Upper);

let hacker131 = "";

for (let i = 0; i < hacker1Upper.length; i++) {
  hacker131 += " " + hacker1Upper[i];
}

console.log(hacker131);

let hacker2Inverted = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  hacker2Inverted += hacker2[i];
}

console.log(hacker2Inverted);

if (hacker1 === hacker2) {
  console.log("What?! You both have the same name?");
} else {
  for (let i = 0; i < Math.max(hacker1.length, hacker2.length); i++) {

    if (hacker1[i] < hacker2[i]) {
      console.log(`The driver's name goes first`);
      break;

    } else if (hacker1[i] === undefined || hacker2[i] === undefined) {

        if (hacker1.length < hacker2.length) {
            console.log("The driver's name goes first")
            break;
            
        } else if (hacker1.length > hacker2.length) {
            console.log("Yo, the navigator goes first definitively")
            break;
        } 
    
    } else {
      console.log("Yo, the navigator goes first definitively");

      break;
    }
  }
}

// no conseguimos que al comparar dos nombres que empiecen por los mismos caracteres como Ana y Anael tenga prioridad el mas corto.
