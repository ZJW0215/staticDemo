/**
 * Created by zhangjianwen on 2017/11/2.
 */

window.onload=function(){
    var ulEle=document.getElementById("top");
    var timer;

    function animate(index) {
        var newLeft = parseInt(ulEle.style.left) + index;
        ulEle.style.left = newLeft + 'px';
        if (newLeft < -5970) {
            ulEle.style.left = -1990 + 'px';
        }
        if (newLeft > -1990) {
            ulEle.style.left = -5970 + 'px';
        }
    }

    function play() {
        timer = setInterval(function () {
            animate(1990);
        }, 1000)
    }

    play();
};