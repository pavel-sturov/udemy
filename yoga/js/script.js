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

// timer

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
    // form

    let message = {
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
        return new Promise(function (resolve, reject) {
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

            let formData = new FormData(form);

            request.onreadystatechange = () => {
                if (request.readyState < 4 && request.status === 200) {
                    resolve(statusMessage.innerHTML = message.loading);
                } else if (request.readyState === 4 && request.status === 200) {
                    resolve(statusMessage.innerHTML = message.success);
                } else if(request.status !== 200){
                    reject();
                }
            };
            request.send(formData);
            close.addEventListener('click', function () {
                statusMessage.innerHTML = '';
            })
        })

            .then()
            .then()
            .catch(() =>  statusMessage.innerHTML = message.fail)
            .then(() => {
                for (let i = 0; i < input.length; i++) {
                    input[i].value = '';
                }
            });
        });

        //down form

let contactForm = document.getElementById('form'),
    contactInputs = contactForm.getElementsByTagName('input');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactForm.appendChild(statusMessage);

    return new Promise(function (resolve, reject) {
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'server.php');
    xhr.setRequestHeader ('Content-Type', 'application/x-www-form-urlencoded');

    let fD = new FormData(contactForm);

        xhr.onreadystatechange = () => {
            if (xhr.readyState !== 4) {
                return;
            }
            xhr.status === 200 ? resolve() : reject();
        };
        xhr.send(fD);
        })

    .then(() => {
        statusMessage.innerHTML = message.success;
        statusMessage.style.color = 'white';
        for (let i = 0; i < contactInputs.length; i++) {
            contactInputs[i].value = '';
        }
    })
        .catch(() => alert('error'));
});

// slider

let slideIndex = 1,
    slides = document.querySelectorAll('.slider-item'),
    prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function showSlides (n) {
    if (slideIndex > slides.length){
        slideIndex = 1;
    }
    if (slideIndex < 1){
        slideIndex = slides.length;
    }
    slides.forEach((e) => e.style.display = 'none');
    dots.forEach((e) => e.classList.remove('dot-active'));
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

next.addEventListener('click', () => {
    showSlides(slideIndex++)
});
prev.addEventListener('click', () => {
    showSlides(slideIndex--)
});

function currentSlide (n) {
    showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', (element) => {
    for (let i = 0; i <= dots.length; i ++){
        if (element.target.classList.contains('dot') && element.target === dots[i - 1]){
            currentSlide(i);
        }
    }
});

// calculator

let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;

totalValue.innerHTML = 0;

persons.addEventListener('change', function () {
    personsSum = +this.value;
    calc();

});
console.log(personsSum);
restDays.addEventListener('change', function () {
    daysSum = +this.value;
    calc();
});

function calc () {
    if (persons.value <= 0 || restDays.value <= 0){
        totalValue.innerHTML = '0';
    } else {
        total = (daysSum + personsSum) * 4000;
        totalValue.innerHTML = total;
        return total;
    }
}

place.addEventListener('change', function () {
    let temp = calc();
        totalValue.innerHTML = temp * this.options[this.selectedIndex].value;
});