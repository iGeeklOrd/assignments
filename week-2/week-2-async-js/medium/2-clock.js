setInterval(() => {
    const date = new Date()

    console.clear()
    console.log(
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
    );
}, 1 * 1000)