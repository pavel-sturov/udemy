window.addEventListener('DOMContentLoaded', function () {
    let tab = document.querySelectorAll('.info-header-tab');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    let info = document.querySelector('.info-header');

    function hideContent(a){
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

    info.addEventListener('click', function (e) {
        let trg = e.target;
        if (trg && trg.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (trg === tab[i]) {
                    hideContent(0);
                    showContent(i);
                    break;
                }
            }
        }
    })
});