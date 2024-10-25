// switch = can be efficient replacement to many else if statements

let day = 5;
switch (day) {
    case 1:
        console.log("It is monday");
        //we add break so that we exit from switch, once we have a matching case.
        //otherwise we exeucte all cases after matching case.
        break;
    case 2:
        console.log("It is tuesday");
        break;
    case 3:
        console.log("It is wednesday");
        break;
    case 4:
        console.log("It is thursday");
        break;
    case 5:
        console.log("It is friday");
        break;
    case 6:
        console.log("It is saturday");
        break;
    case 7:
        console.log("It is sunday");
        break;
    //In case of no match
    default:
        console.log(`${day} is not a day`);
}
