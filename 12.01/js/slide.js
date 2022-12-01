$(document).ready(function(){
    let current = 0;
    let setIntervalId;

    // 버튼에 의해 발생한 인덱스 값으로 애니메이션 작동
    $('.btns').click(function(){
        let i = $(this).index();
        movie(i);
    })

    //자동실행 함수 제어함수
    $('#slide').on({
        mouseover:function(){
            clearInterval(setIntervalId);
        },
        mouseout:function(){
            timer();
        }
    })

    //자동실행 함수
    timer();
    function timer(){
        setIntervalId = setInterval(function(){
            i = current + 1;
            if(i == 4){ i = 0; }
            movie(i);
        }, 2000)
    }

    //애니메이션 함수 
    function movie(n){
        if(current == n){ return; }

        currentEl = $('#viewer li').eq(current);
        nextEl = $('#viewer li').eq(n);

        // currentEl.css({left:'0'}).animate({left: '-100'});
        // nextEl.css({left:'100'}).animate(left: '0'});

        currentEl.css({opacity:'1'}).animate({opacity: '0'});
        nextEl.css({opacity:'0'}).animate({opacity: '1'});

        current = n;
        $('.btns li').removeClass('on');
        $('.btns li').eq(n).addClass('on');

    }

})