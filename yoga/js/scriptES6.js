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

let getTimeToWedding = (wedDate) => {
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
};

let setClock = (id, endTime) => {
    let updClock = () => {
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
    };
    let timer = document.getElementById('timer'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds'),
        timeInterval = setInterval(updClock, 1000);
};

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

