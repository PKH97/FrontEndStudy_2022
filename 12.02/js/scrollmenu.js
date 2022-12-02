$(document).ready(function () {
    let menu = $("#top_menu > ul > li");
    let contents = $("#contents > div");

    menu.click(function () {
        let tg = $(this);
        let i = tg.index();

        let section = contents.eq(i);
        let tt = section
            .offset()
            .top;

        $("html,body")
            .stop()
            .animate({scrollTop: tt});
    });

    //스크롤위치에 의해서 버튼에 스타일 효과 적용

    $(window).scroll(function () {
        let sct = $(window).scrollTop();

        contents.each(function () {
            let tg = $(this); // -> 현재 each문에 의해 선택된 div
            let i = tg.index(); // -> 선택된 div의 인덱스값
            if (tg.offset().top <= sct) {
                //현재 선택된 div의 top부분에 스크롤탑이랑 비교해서 크거나 같은 경우
                menu.removeClass("on");
                menu
                    .eq(i)
                    .addClass("on");
            }
        });
    });
});
