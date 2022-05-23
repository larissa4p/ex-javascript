let timeout;

window.addEventListener("mousemove", function(e) {
    this.clearTimeout(timeout)
    let timeOut =  setTimeout(() => {
        console.log(e.x)
    }, 500);
})

