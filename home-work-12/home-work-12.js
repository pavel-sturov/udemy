let parent = document.querySelector('.app');
let btn = document.querySelector('button');

class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height + 'px';
        this.width = width + 'px';
        this.bg = '#' + bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
        this.createDiv = (text) => {
            let div = document.createElement('div');
            div.textContent = text;
            div.style.height = this.height;
            div.style.width = this.width;
            div.style.background = this.bg;
            div.style.fontSize = this.fontSize;
            div.style.textAlign = this.textAlign;
            div.classList.add('newDiv');
            parent.insertBefore(div, btn);
        }
    }
}

let text = prompt('Введите нужный текст');
let enterParam = prompt('(Через запятую) высота, ширина, цвет фона, размер шрифта, выравнивание шрифта.');
let param = enterParam.split(', ');

let div1 = new Options(...param);
div1.createDiv(text);

btn.addEventListener('click', function () {
    btn.style.width = div1.width;
    btn.style.height = div1.height;
    btn.style.background = div1.bg;
    btn.style.fontSize = div1.fontSize;
    btn.style.textAlign = div1.textAlign;
    btn.textContent = document.querySelector('.newDiv').textContent;
});