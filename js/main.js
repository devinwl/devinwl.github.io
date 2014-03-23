(function($) {
    $(document).ready(function() {

        var kkeys = [];
        var seq = '38,38,40,40,37,39,37,39,66,65';

        var audio = document.createElement('audio');
        audio.setAttribute('src', '../resources/sounds/secret.mp3');
        //audio.setAttribute('autoplay', 'autoplay');

        $(document).keydown(function(e) {
            kkeys.push(e.keyCode);
            if(kkeys.toString().indexOf(seq) >= 0) {
                audio.play();
                $('.alert').css('opacity', '1.0');
                $('.alert').css('font-size', '36px');
                $(audio).bind('ended', function() {
                    $('.alert').css('opacity', '0.0');
                    $('.alert').css('font-size', '0px');
                });
                kkeys = [];
            }
        })
    });
})(jQuery);