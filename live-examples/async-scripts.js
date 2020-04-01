

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
    setTimeout(function () {
        callback(`Warm Buns ${cookedBeef}`);
    }, 5000);
    // End logic
}

const putBeefBetweenBuns = (beef, buns, callback) => {
    // Do some logic
    // End logic
    callback(`${beef} ${buns} burger is ready callback`);
}


const makeBurgerCallback = nextStep => {
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

//makeBurgerCallback((burger) => {
//    alert(`callback ${burger}`);
//})


// Promise example

function alonTest() {
    setTimeout(function () {
        alert("I went to the butcher");

    }, 300);
}

const getBeefP = (testParam) => {
    // Do some logic
    // End logic
    return new Promise((resolve, reject) => {
        if (testParam) {
            resolve('Great Beef');
        }
        else {
            reject("Error!");
        }
    })
}

const cookBeefP = (beef) => {
    // Do some logic
    // End logic
    return new Promise(resolve => {
        resolve(`Cooked ${beef}`);
    })
}

const cookBeefPAsync = async (beef) => {
    setTimeout(() => {
        console.log('hello');
        return 'Cooked';
    },3000);
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

const makeBurgerPromise = () => {
    getBeefP(false)
        .then(result => {
            return cookBeefP(result);
        })
        .catch(err => {
            alert(`Middle error ${err}`);
            return 'Haggai Testing!!!';
        })
        .then(result => {
            return getBunsP(result);
        })
        .then(result => {
            return putBeefBetweenBunsP(result)
        })
        .then(result => {
            alert(`Promise Burger!!! ${result}`);
        })
        .catch(err => {
            alert(`Final error: ${err}`);
        })
}

// makeBurgerPromise();

const makeBurgerAsyncAwait = async () => {
    try {
        const results = await Promise.all([getBeefP(true),cookBeefP('test')]);
        console.log(results);
        
        // const beef = await getBeefP();
        // const cookedBeef = await cookBeefP(beef);
        // const bunsWithBeef = await getBunsP(cookedBeef);
        // const readyBurder = await putBeefBetweenBunsP(bunsWithBeef);
        // console.log(`Async Await ${readyBurder}`);
    }
    catch (ex) {
        console.log(ex);
    }
}

makeBurgerAsyncAwait();


// fetch & axios example
const getUserDataAxios = async () => {
    let userData = await axios('./data/userData.json');
    console.log(userData.data);
}

const getUserDataFetch = async () => {
    fetch('./data/userData.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
}

// getUserDataAxios();
// getUserDataFetch();

// Live Example - event loop 
async function main(){
    console.log('A');
    setTimeout(() => { 
        console.log('B'); 
    },0);

    await promiseTest();

    doSomethingNSeconds(5);

    console.log('C');
  }
  main();
  
  function doSomethingNSeconds(seconds){
    let start = Date.now(), now = start;
    while (now - start < (seconds*1000)) {
      now = Date.now();
    }
  }
  
  function promiseTest(){
      return new Promise(resolve => {
    try{
        fetch('bla.json')
      .then(result => {
          console.log(result);
      });
        console.log('Promise');
        resolve();
    }
    catch(err){
        console.log('Promie with Error');
      resolve();  
    }
    })
  }

