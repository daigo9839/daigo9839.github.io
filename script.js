$(function() {
    
    // ------------見出しのフェードイン ------------------------
    $(function(){
        $(window).on('load scroll',function (){
            $('.fadein').each(function(){
                //ターゲットの位置を取得
                var target = $(this).offset().top;
                //スクロール量を取得
                var scroll = $(window).scrollTop();
                //ウィンドウの高さを取得
                var height = $(window).height();
                //ターゲットまでスクロールするとフェードインする
                if (scroll > target - height){
                    //クラスを付与
                    $(this).addClass('active');
                }
            });
        });
    });

    //------------メイン画像のロゴのフェードイン------------
    $('#image').fadeIn(2000);

    //------------よくある質問をクリックした時------------
    $(".qa-list dd").hide();
    $(".qa-list dl").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
    });

    //------------aタグがクリックされた時------------
    $('a[href^=#]').click(function(){
        // 移動先を0px調整する。0を30にすると30px下にずらすことができる。
        var adjust = -80;
        // スクロールの速度（ミリ秒）
        var speed = 500;
        // アンカーの値取得 リンク先（href）を取得して、hrefという変数に代入
        var href= $(this).attr("href");
        // 移動先を取得 リンク先(href）のidがある要素を探して、targetに代入
        var target = $(href == "#contact" || href == "#contact" ? 'html' : href);
        // 移動先を調整 idの要素の位置をoffset()で取得して、positionに代入
        var position = target.offset().top + adjust;
        // スムーススクロール linear（等速） or swing（変速）
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        return false;
    });

});
