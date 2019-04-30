let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

function httpRequest(path) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', path);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.onreadystatechange = () => {
            const { response, readyState , status } = xhr;

            if (readyState !== 4) return;

            status === 200 ? resolve(response) : reject('error');
        };
        xhr.send();
    });
}

const inputChangeHandler = () => httpRequest('js/current.json')
    .then(response => {
        let usd = JSON.parse(response).usd;
        inputUsd.value = (inputRub.value / usd).toFixed(3);
        return JSON.parse(response);
    })
    .then(({ usd }) => {
        console.log('USD: ', usd);
    })
    .catch((e) => {
        console.log('i got an error', e)
    });

inputRub.addEventListener('input', inputChangeHandler);


