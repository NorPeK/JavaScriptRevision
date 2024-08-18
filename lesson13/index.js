function walkDog(callback) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve("You walk the dog");
            //callback();
        }, 1500);
    });
    
}

function cleanKitchen(callback) {


    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve("You kitchen clean");
            //callback();
        }, 2500);
    }) ;
}


function takeOutTrash(callback) {


    return new Promise((resolve , reject) => {
        setTimeout( () => {
            resolve("You trash take out");
            //callback();
        }, 500);    
    })
}


//callback hell
/*
walkDog(() => {
    cleanKitchen( () => {
        takeOutTrash( () => console.log("You are finished."));
    });
});

*/

walkDog().then(value => {console.log(value); return cleanKitchen()})
.then(value => {console.log(value); return takeOutTrash()})
.then(value => {console.log(value); console.log("You are finished")});