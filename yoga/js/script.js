function hideAndShowTabs(tabs, tabContent, tabsContainer) {
    window.addEventListener('DOMContentLoaded', function () {
        function hideContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideContent(1);

        function showContent(a) {
            if (tabContent[a].classList.contains('hide')) {
                tabContent[a].classList.remove('hide');
                tabContent[a].classList.add('show');
            }
        }

        tabsContainer.addEventListener('click', function (e) {
            let target = e.target;
            if (target && target.classList.contains('info-header-tab')) {
                for (let i = 0; i < tabs.length; i++) {
                    if (target === tabs[i]) {
                        hideContent(0);
                        showContent(i);
                        break;
                    }
                }
            }
        })
    })
}

let tab = document.querySelectorAll('.info-header-tab');
let tabContent = document.querySelectorAll('.info-tabcontent');
let info = document.querySelector('.info-header');

hideAndShowTabs(tab, tabContent, info);

let weddingDate = '2019-05-25';

function getTimeToWedding(wedDate) {
    let j = Date.parse(wedDate) - Date.parse(new Date()),
        seconds = Math.floor((j/1000) % 60),
        minutes = Math.floor((j/1000/60) % 60),
        hours = Math.floor((j/1000/60/60));

    return {
        'total' : j,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    }
}

function setClock(id, endTime) {
    let timer = document.getElementById('timer'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        timeInterval = setInterval(updClock, 1000);
    console.log(hours);

    function updClock() {
        let j = getTimeToWedding(endTime);
        if (j.total <= 0){
            hours.textContent = '00';
            minutes.textContent = '00';
            seconds.textContent = '00';
        } else {
            if (j.hours < 10){
                hours.textContent = '0' + j.hours;
            } else {
                hours.textContent = j.hours;
            }
            if (j.minutes < 10){
                minutes.textContent = '0' + j.minutes;
            } else {
                minutes.textContent = j.minutes;
            }
            if (j.seconds < 10){
                seconds.textContent = '0' + j.seconds;
            } else {
                seconds.textContent = j.seconds;
            }
        }
    }
}

setClock('timer', weddingDate);

let more = document.querySelector('.more');
let close = document.querySelector('.popup-close');
let overlay = document.querySelector('.overlay');

more.addEventListener('click', function () {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
});

let allInfo = document.querySelector('.info');

allInfo.addEventListener('click', function (e) {
    if (e.target && e.target.classList.contains('description-btn')) {
        overlay.style.display = 'block';
        more.classList.add('more-splash');
        document.body.style.overflow = 'hidden';
    }
});
    // Form

    let messange = {
        loading: 'Загрузка...',
        success: 'Спасибо, мы свяжемся с вами!',
        fail: 'Что-то пошло не так!'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');
        
        form.addEventListener('submit', function (event) {
            event.preventDefault();
            form.appendChild(statusMessage);

            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);
            request.send(formData);

            request.addEventListener('readystatechange', function () {
               if (request.readyState < 4) {
                   statusMessage.innerHTML = messange.loading;
               } else if (request.readyState === 4 && request.status == 200) {
                   statusMessage.innerHTML = messange.success;
               } else {
                   statusMessage.innerHTML = messange.fail;
               }
            });
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
                close.addEventListener('click', function () {
                    statusMessage.innerHTML = '';
                })
            }
        });

        //

let contactForm = document.getElementById('form'),
    contactInputs = contactForm.getElementsByTagName('input');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.appendChild(statusMessage);

    let req = new XMLHttpRequest();
    req.open('POST', 'server.php');
    req.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

    let fD = new FormData();
    req.send(fD);

    req.addEventListener('readystatechange', function () {
        if (req.readyState === 4 && req.status == 200) {
            statusMessage.innerHTML = messange.success;
            statusMessage.style.color = 'white';
        }
    })
});



