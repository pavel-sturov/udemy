$(document).ready(function () {
    //show modal
    function showModal() {
        $('.modal').animate(
            {
                opacity: 'toggle',
                height: 'toggle'
            }, "slow"
        );
    }

    //overlay
    function showOverlay() {
        $('.overlay').animate(
            {
                opacity: 'toggle'
            }, "slow"
        );
    }

    // close
    function close() {
        showModal();
        showOverlay();
    }
    //work space

    $('.close').on('click', () => {
        close();
    });

    $('nav>ul>li:eq(1)').on('click', function () {
    showModal();
    showOverlay();
    });

    $('.row').on('click', (element) => {
        let x = element.target;
        if(x.classList.contains('main_btn') || x.classList.contains('main_btna')){
            showModal();
            showOverlay();
        }
    })
});