// Promise = An object that manages async operations.
//           Wrap a promise object around async code.
//           "I promise to return a value"
//           PENDING --> RESOLVED or REJECTED
//           new Promise((resolve, reject) => { async code })
//           Promise object will have two parameters automatically resolve and reject.
//           If all goes fine, we call resolve(message)
//           If some issue occures, we call reject(message)

//           If resolve is called ie. Promise is resolved, we move to the then method and we get the value(object or string etc)
//           as an argument in then whatever is passed to the resolve as an arument.

//           If reject is called ie. Promise is rejected, we move to the catch method and we get the value(object or string etc)
//           as an argument in catch whatever is passed to the reject as an arument.

// Do these chores in order
// 1. Walk the dog
// 2. Clean the kitchen
// 3. Take out the trash

/*************** Callback hell ****************/

function walkDog(callback) {
    setTimeout(() => {
        console.log(`You walked the dog`);
        callback();
    }, 1500);
}

function cleanKitchen(callback) {
    setTimeout(() => {
        console.log(`You cleaned the kitchen`);
        callback();
    }, 2500);
}

function takeOutTrash(callback) {
    setTimeout(() => {
        console.log(`You took out the trash`);
        callback();
    }, 500);
}

walkDog(() => {
    cleanKitchen(() => {
        takeOutTrash(() => {
            console.log(`All chores are completed`);
        });
    });
});

/*************** Promises ****************/

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                // on success, we call the resolve method and pass a message.
                resolve(`You walked the dog`);
            } else {
                // on failure, we call the reject method and pass a message.
                reject(`You DID NOT walk the dog`);
            }
        }, 1500);
    });
}

function cleanKitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned) {
                // on success, we call the resolve method and pass a message.
                resolve(`You cleaned the kitchen`);
            } else {
                // on failure, we call the reject method and pass a message.
                reject(`You DID NOT clean the kitchen`);
            }
        }, 1500);
    });
}

function takeOutTrash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashOut = true;
            if (trashOut) {
                // on success, we call the resolve method and pass a message.
                resolve(`You took out the trash`);
            } else {
                // on failure, we call the reject method and pass a message.
                reject(`You DID NOT take out the trash`);
            }
        }, 1500);
    });
}

// We call walkDog() and in the then we get value = 'You walked the dog'
// This is because this is the string passed to the resolve method in walkDog()
// walkDog().then(value => console.log(value))
// Output:
// You walked the dog

walkDog()
    .then((value) => {
        // if resolve is called we move here.
        console.log(value);
        // 'You walked the dog' is logged.
        // Whatever is returned from here is passed as an argument to the next then.
        return cleanKitchen();
        // 'You cleaned the kitchen' is passed to next then.
    })
    .then((value) => {
        // if resolve is called we move here.
        console.log(value);
        // 'You cleaned the kitchen' is logged.
        return takeOutTrash();
        // 'You took out the trash' is passed to next then.
    })
    .then((value) => {
        // if resolve is called we move here.
        console.log(value);
        // 'You took out the trash' is logged.
        console.log(`All chores are completed`);
    })
    .catch((error) => {
        // if reject is called on any of the above promises we move here.
        // Once reject is called the chain is broken and further methods are not called.
        console.log(error);
    });

// Output:
// You walked the dog
// You cleaned the kitchen
// You took out the trash
