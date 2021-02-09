// loops exercise :-)

const food = ["sushi", "pizza", "kebab"];

// for loop
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}

console.log(' ');

// for of loop
for (const element of food) {
  console.log(element);
}

console.log(' ');

// while loop
    let i = 0;
    while (i < food.length) {
      console.log(food[i++]);
    }
  