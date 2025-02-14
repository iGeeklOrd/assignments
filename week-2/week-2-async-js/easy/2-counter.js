let i = 0

function counter(){
    console.clear()
    console.log(i)
    i++

    setTimeout(counter, 1 * 1000)
}

counter()