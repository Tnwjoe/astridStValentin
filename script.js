function clickfunc() {
    window.location.href = "page.yes.html"
}
function increazsize() {
    const yesButton = document.querySelector(".yes");

    yesButton.style.width = (yesButton.offsetWidth + 70) + 'px';
    yesButton.style.height = (yesButton.offsetHeight + 70) + 'px';

    const currentFontSize = wimdow.getComputedStyle(yesButton).fontSize;
    const newFontSize = parseInt(currentFontSize) + 20 + 'px';
    yesButton.style.fontSize = newFontSize

}