function wait1(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000)
    })
}

function wait2(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000)
    })
}

function wait3(t) {
    return new Promise((resolve) => {
        setTimeout(resolve, t * 1000)
    })
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();

    return wait1(t1).then(() => {
        console.log("First wait")
        return wait2(t2).then(()=> {
            console.log("Second wait")
            return wait3(t3).then(() => {
                console.log("Third second")

                const endTime = Date.now()

                const timeTake = endTime - startTime;
                return timeTake
            })
        })
    })
}

module.exports = calculateTime;
