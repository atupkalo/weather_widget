module.exports = function(){

    var blur = $('.slider-blur__form-wrap');
    var blurSection = $('.slider-blur');
    var  blurBg = $('.slider-blur__form-bg');

    function blurSet () {
        var imgWidth = $('.slider-blur__img').width(),
            imgHeight = $('.slider-blur__img').height(),
            positionLeft = $(blurSection).offset().left - $(blur).offset().left,
            positionTop = $(blurSection).offset().top - $(blur).offset().top;
        blurBg.css({
            'background-size' : imgWidth + 'px' + ' ' + imgHeight + 'px',
            'background-position' : positionLeft + 'px' + ' ' + positionTop + 'px'
        });
    }

    blurSet();

};