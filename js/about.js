/**
 * Created by zhangjianwen on 2017/5/14.
 */
$(function(){
    var j=0;
    var $p=$('<p class="mFont">欢迎来到Green-Go商城</p>');
    $('.top_mid').append($p);
//    (function(){
//        $('.mfont').get(0).innerHTML='111';
//    })();

    /*欢迎动画*/
    setInterval(function(ev){
        ev=ev || window.event;
        var r=Math.floor(Math.random()*255);
        if(r<65){
            r=Math.floor(Math.random()*255);
        }
        var g=Math.floor(Math.random()*255);
        if(r<65){
            r=Math.floor(Math.random()*255);
        }
        var b=Math.floor(Math.random()*255);
        if(b<65){
            b=Math.floor(Math.random()*255);
        }
        var tX=60*j;
        $('.mFont').css({
            'color':'rgba('+r+','+g+','+b+',0.85)',
            'transform':'translateX('+tX+'px)'
        });
        j++;
        if(tX>1024*2){
          j=0;
        }
    },150);
    /*表白爱心开始*/
    var divNum=36;
    for(var i=0;i<divNum;i++){
        var $div=$('<div class='+"heart"+(i+1)+'></div>');
        $('.heart').append($div);
    }
    (function(){
        for(var i=0;i<divNum;i++){
            $('.heart [class$='+(i+1)+']').css({
                'transform':'rotateY('+((i+1)*10)+'deg) rotateZ(45deg) translate(60px)'
            });
        }
        var $di=$('<div class="img"></div>');
        $('.heart').append($di);
        for(var j=0;j<6;j++){
            var $d=$('<div class="im"></div>');
            $('.img').append($d);
        }
    })();
    /*表白爱心结束*/
    $('ul.sidebarnav li').mousedown(function(){
        var i=$(this).index();
        $(this).click(function(){
            $('ol.liDetail li').hide();
            $('ol.liDetail li').eq(i).show();
        });

    });
});