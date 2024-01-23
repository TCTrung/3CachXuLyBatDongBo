// Cach 3 :
function start() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Starting");
            resolve();
        }, 2000)
    } );

}
function doing() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Doing");
            resolve();
        }, 1500)
    } );
}
function done() {
    setTimeout(() => {
        setTimeout(() => {
            console.log("Done")
        })
    }, 500)
}

async function demo() {
    await start();
    await doing();
    await done();
}
demo();