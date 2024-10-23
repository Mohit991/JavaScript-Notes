// Arithmatic Operators = operands (values, variables, etc.)
//                        operators (+, -, *, /)

let students = 30;

students = students + 1; //or students++ or students += 1
students = students - 1; //or students-- or students -= 1
students = students * 1; //or students *= 1
students = students / 1; //or students /= 1
students = students ** 2; //student to the power of 2. Also student **= 2
students = students % 2; //students mod 2. Also student %= 2

console.log(students);

/*
    Operator Precedence
    1. Parenthesis ()
    2. Exponents **
    3. Multipication and division or modulo
    4. Addition and subtraction
*/

let result = 1 + 2 * 3 + 4 ** 2
console.log(result); //result is 23