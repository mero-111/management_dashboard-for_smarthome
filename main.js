const contents = document.querySelectorAll(".content");
const btn = document.querySelectorAll(".btnFrombtns");
const important = document.querySelector(".imortant");
const tempinput = document.querySelector(".temperatureINPUT");
const bar = document.querySelector(".sliderForbar");

function updateHeight() {
    let maxHeight = 0;

    contents.forEach(item => {
        if (item.offsetHeight > maxHeight) {
            maxHeight = item.offsetHeight;
        }
    });

    important.style.height = maxHeight + "px";
}

updateHeight();

const observer = new ResizeObserver(updateHeight);

contents.forEach(item => {
    observer.observe(item);
});

function aorone(x) {
    let num = Number(tempinput.value);
    let newNum = num + x;
    let widthForbar = newNum * 7.5

    if (newNum >= 16 && newNum <= 32) {
        tempinput.value = newNum;
        bar.style.width = widthForbar + "px";
    }
}

