$(function(){
    //1단계 메뉴에 마우스가 올라가면 depth2 class = 'on'
    //마우스가 나가면 dapth2 class = "" on제거 
    $('#gnb > ul > li').hover(
        function(){
            $(this)
            .children()
            .addClass('on');
            // console.log('over')
        },
        function(){
            $(this)
            .children()
            .removeClass('on');
        }
    );

        $.stellar({
            horizontalScrolling: false,
            verticalScrolling: true,
            verticalOffset: 50,
        });
});