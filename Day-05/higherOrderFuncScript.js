function logger(func1, times) {
    for (let index = 0; index < times; index++) {
        func1();
    }
}
logger(() => { console.log("Hello world!!") }, 5);