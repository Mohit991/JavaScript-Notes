// For loop = repeat some code as long as condition is true

//0, 1, 2, 3, 4, 5, ...
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//0, 2, 4, 6, ...
for (let i = 0; i < 10; i += 2) {
    console.log(i);
}

//10, 9, 8, 7, ...
for (let i = 10; i > 0; i--) {
    console.log(i);
}

//10, 8, 6, ...
for (let i = 10; i > 0; i -= 2) {
    console.log(i);
}

/********************************/
// break = break out of the loop
// loop stops at 10. When break is met, loop is broken. 
for(let i = 1; i <= 20; i++){
    if(i == 10){
        break; 
    }
    console.log(i);
}

// continue = skip the iteration of the loop
// 10 is not logged. When continue is met, we directely go to the increment/decrement statement in for loop. 
for(let i = 1; i <= 20; i++){
    if(i == 10){
        break; 
    }
    console.log(i);
}

