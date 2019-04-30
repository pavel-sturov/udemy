function game() {
    let x = Math.floor(Math.random() * 10);
    return x;
}
function win() {
    console.log('Вы выбили больше пяти! Вы победили!');
}

function loose() {
    console.log('Вы выбили меньше пяти! Вы проиграли!');
}
function fullLoose() {
    console.log('Вы гребаный неудачник, выбили 0!');
}

let btn = document.querySelector('input');
btn.addEventListener('click', function () {
    let result = game();
    console.log(result);
    let promise = new Promise((resolve, reject) => {
        if (result > 5) {
            resolve();
        } else if (result === 1){
            reject();
        } else
        return promise;
    });
    promise.then(win)
        .catch(loose);
});