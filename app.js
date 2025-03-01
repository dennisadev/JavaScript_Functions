console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count) {
    for (let i = 1; i <= count; i++) {
        if (i % 2 != 0) { 
            console.log(i);
        }
    }
}
//Test Call Exercise 1
printOdds(10);


// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${ userName }, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you are 16.`;

    if (age < 16) {
        console.log(belowSixteen);
    }
    else { 
        console.log(aboveSixteen);
    }
}
//Test Call Exercise 2
checkAge("Bill", 12);
checkAge("Dennis", 18);


// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
function checkQuadrant(x, y) { 
    switch (true) { 
        case x > 0 && y > 0:
            return "Quadrant 1";
        case x < 0 && y > 0:
            return "Quadrant 2";
        case x < 0 && y < 0:
            return "Quadrant 3";
        case x > 0 && y < 0:
            return "Quadrant 4";
        case x == 0 && y != 0:
            return "X Axis";
        case x != 0 && y == 0:
            return "Y Axis";
        default:
            return "Center";

    }
}
//Test Call Exercise 3
console.log(checkQuadrant(0, 2));
console.log(checkQuadrant(2, 0));
console.log(checkQuadrant(1, 2));
console.log(checkQuadrant(-6, 18));
console.log(checkQuadrant(-6, -6));
console.log(checkQuadrant(3, -6));
console.log(checkQuadrant(0, 0));

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function checkTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        if (a == b && b == c) {
            return "Equilateral";
        }
        else if (a == b || b == c || a == c) {
            return "Isosceles";
        }
        else { 
            return "Scalene"
        }
    }
    else {
            return "Not a triangle";
    }
}

// Test Call Exercise 4
console.log(checkTriangle(1, 2, 2));
console.log(checkTriangle(1, 1, 2));
console.log(checkTriangle(2, 2, 2));
console.log(checkTriangle(3, 5, 7));
