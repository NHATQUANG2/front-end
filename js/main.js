
var index = 1;
changeImage = function () {
    var imgs = ["./images/slider1.jpg", "./images/slider2.jpg", "./images/slider1.jpg"];
    document.getElementById('img').src = imgs[index];
    index++;
    if (index === 3) {
        index = 0;
    }
}
setInterval(changeImage, 10000);
