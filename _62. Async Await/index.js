// async/await = async = makes a function return a promise
//               await = makes an async function wait for a promise to resolve or reject

//               Allows you to write async code in sync manner.
//               Everything after await is placed in an event queue.

function walkDog() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if (dogWalked) {
                resolve(`You walked the dog`);
            } else {
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
                resolve(`You cleaned the kitchen`);
            } else {
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
                resolve(`You took out the trash`);
            } else {
                reject(`You DID NOT take out the trash`);
            }
        }, 1500);
    });
}

async function doChores() {
    try {
        const walkDogResult = await walkDog();
        // With await keyword, we will wait for walkDog() to either resolve or reject
        // If it resolves, whatever is passed to resolve is returned from walkDog() and captured in walkDogResult
        // In case of reject, exception is thrown, which we capture in catch method.
        // whatever is passed to reject is captured in error argument of catch.
        console.log(walkDogResult);

        const cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        const takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

    } catch (error) {
        // In case if any promises in the try are rejected, we move here. 
        console.error(error);
    }
}

doChores();

// Output:
// You walked the dog
// You cleaned the kitchen
// You took out the trash