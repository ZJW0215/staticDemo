(function() {
    /* 获取ul的容器及ul */
    var banner = document.getElementById('images');
    var imgUl = banner.getElementsByTagName('ul')[0];
    /* 上一张 */
    var prev = document.querySelector('.prev');
    /* 下一张 */
    var next = document.querySelector('.next');

    /* 获取引导点的ul数组 */
    var dotsOl = document.getElementsByClassName('dots')[0];

    /* 设置引导点的索引为第一张图片 */
    var index = 1;
    /* 定义定时器 */
    var timer;

    /* 绑定prev的单击事件 */
    prev.onclick = function() {
        prev_pic();
    };
    /* 绑定next的单击事件 */
    next.onclick = function() {
        next_pic();
    };

    /* 上一张图片的事件函数 */
    function prev_pic() {
        /* 获取ul的左偏移量 */
        var prevLeft = parseInt(imgUl.offsetLeft) + 830;
        /* 当ul移动到最后一张时，跳转到倒数第二张 */
        if(prevLeft > 0) {
            prevLeft = -3320;
        }
        imgUl.style.left = prevLeft + 'px';

        /* 当图片索引小于1时，引导点跳转到最后一个 */
        if(index < 1) {
            index = 5;
        }

        index -= 1;
        dotShow(index);
    }

    /* 下一张图片的事件函数 */
    function next_pic() {
        /* 获取ul的左偏移量 */
        var nextLeft = parseInt(imgUl.offsetLeft) - 830;
        /* 当ul移动到第一张时，跳转到第二张 */
        if(nextLeft <= -5810){
            nextLeft = -1660;
        }
        imgUl.style.left = nextLeft + 'px';

        /* 当图片索引大于5时，引导点跳转到第一个 */
        if(index > 5) {
            index = 1;
        }

        index += 1;
        dotShow(index);
    }

    /* 图片与索引点对应 */
    function dotShow(cur_index) {
        var olLi = dotsOl.children;
        for(var i = 0; i < olLi.length; i++){
            olLi[i].className=' ';
        }
        /* 图片索引对应0时，说明要跳转到最后一个引导点*/
        if(cur_index === 0) {
            cur_index = 5;
        }
        /* 图片索引对应6时，说明要跳转到第一个引导点*/
        if(cur_index === 6) {
            cur_index = 1;
        }
        olLi[cur_index-1].className=" active";
    }

    /* 为每一个引导点绑定单击事件 */
    for(var i=0;i<dotsOl.children.length;i++){
        dotsOl.children[i].index=i;
        dotsOl.children[i].onclick=function(){
            index=this.index+1;
            initImages(this.index+1);
            dotShow(this.index+1);
        };

        /* 当鼠标进入时，停止自动轮播 */
        imgUl.onmouseover = function() {
            clearInterval(timer);
        };
        /* 当鼠标移出时，自动轮播开始 */
        imgUl.onmouseout = function() {
            animate();
        }
    }

    /* 点击引导点时，图片移动的距离 */
    function initImages(cur_index) {
        var off = cur_index * 830;
        imgUl.style.left=-off+"px";
    }

    /* 定义自动轮播函数 */
    function animate() {
        /* 在开始时，清除定时器 */
        if(timer) {
            clearInterval(timer);
        }
        /* 设置每2秒执行 */
        timer = setInterval(function() {
            next_pic();
        }, 2000)
    }
    animate();
})();