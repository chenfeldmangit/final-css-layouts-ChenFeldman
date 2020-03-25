
const promiseExample = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            alert("First Promise");
            resolve("Done");
        });
    })
        .then(result => {
            alert(`Result is ${result}`);
            return "Third Promise";
        })
        .then(result => {
            alert(`Result is ${result}`);
            throw "Promise Error";
        })
        .then(result => {
            alert(`Success with result ${result}`);
        })
        .catch(error => {
            alert(`Sorry an error occured => ${error}`);
        })
}

// Callback

const getSalmonC = () => {
    console.log('callback Salmon');
}

const getSeaWeedC = (callback) => {
    console.log('callback Sea Weed');
    callback(getSalmonC);
}

const getRiceC = (callback) => {
    console.log('callback Rice');
    callback();
}


getSeaWeedC(getRiceC);

// Promise and async-await
const getSalmon = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Salmon");
        }, 2000);
    })
}

const getSeaWeed = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("SeaWeed");
        }, 2000);
    })
}

const getRice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Rice");
        }, 2000);
    })
}

const prepareSushiParallel = async () => {
    console.log(`Start ${new Date()}`);
    Promise.all([getRice(), getSalmon(), getSeaWeed()]).then(values => {
        console.log(`Result: ${values}`);
        console.log(`Finish ${new Date()}`);
    });
}

const prepareSushiOrdered = async () => {
    console.log(`Start ordered ${new Date()}`);
    let seaWeed = await getSeaWeed();
    let rice = await getRice();
    let salmon = await getSalmon();
    console.log(`Got stuff ${seaWeed} ${rice} ${salmon}`);
    console.log(`Finish ordered ${new Date()}`);
}

const prepareSushiOrderedPromise = async () => {
    console.log(`Start ordered ${new Date()}`);
    let seaWeed, rice, salmon;
    getSeaWeed()
        .then(result => {
            seaWeed = result;
            return getRice();
        })
        .then(result => {
            rice = result;
            return getSalmon();
        })
        .then(result => {
            salmon = result;
            console.log(`Got stuff ${seaWeed} ${rice} ${salmon}`);
            console.log(`Finish ordered promise ${new Date()}`);
        })
}

//promiseExample();
//prepareSushiParallel();
//prepareSushiOrdered();
//prepareSushiOrderedPromise();


const getBeef = (callback) => {
    // Do some logic
    // End logic
    callback('Great Beef');
}

const cookBeef = (beef, callback) => {
    // Do some logic
    // End logic
    callback(`Cooked ${beef}`);
}

const getBuns = (cookedBeef, callback) => {
    // Do some logic
    // End logic
    callback(`Warm Buns ${cookedBeef}`);
}

const putBeefBetweenBuns = (beef,buns, callback) => {
    // Do some logic
    // End logic
    callback(`${beef} ${buns} burger is ready callback`);
}

const makeBurger = nextStep => {
    getBeef(function (beef) {
        cookBeef(beef, function (cookedBeef) {
            getBuns(cookedBeef, function (buns) {
                putBeefBetweenBuns(buns, beef, function (burger) {
                    nextStep(burger)
                })
            })
        })
    })
}

makeBurger((burger) => {
    console.log(burger);
})

// Promise example

const getBeefP = () => {
    // Do some logic
    // End logic
    return new Promise(resolve => {
        resolve('Great Beef');
    })
}

const cookBeefP = (beef) => {
    // Do some logic
    // End logic
    return new Promise(resolve => {
        resolve(`Cooked ${beef}`);
    })
}

const getBunsP = (cookedBeef) => {
    // Do some logic
    // End logic
    return new Promise(resolve => {
        resolve(`Warm buns ${cookedBeef}`);
    })
}

const putBeefBetweenBunsP = (food) => {
    // Do some logic
    // End logic
    return new Promise(resolve => {
        resolve(`${food} burger is ready`);
    })
}

const makeBurgerP = () => {
    getBeefP()
        .then(result => {
            return cookBeefP(result);
        })
        .then(result => {
            return getBunsP(result);
        })
        .then(result => {
            return putBeefBetweenBunsP(result)
        })
        .then(result => {
            console.log(`Burger!!! ${result}`);
        })
        .catch(err => {
            console.log(`Error: ${err}`);
        })
}

makeBurgerP();


const makeBurgerAsyncAwait = async () => {
    try {
        const beef = await getBeefP();
        const cookedBeef = await cookBeefP(beef);
        const bunsWithBeef = await getBunsP(cookedBeef);
        const readyBurder = await putBeefBetweenBunsP(bunsWithBeef);
        console.log(`Async Await ${readyBurder}`);
    }
    catch (ex) {
        console.log(err);
    }
}

makeBurgerAsyncAwait();
