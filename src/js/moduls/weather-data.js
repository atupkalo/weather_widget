/**
 * Created by Anatoliy Tupkalo on 2/5/2018.
 */


module.exports = function(){
    var btn = $('.header-searchcity-btn');

    btn.click(function(){
        var city = $('.header-input-city').val();
        var divError = $('.header-error');
        var selectVal = $('.header-system').val();
        var windDesc = $('.header-middle__wind');
        var degreeDesc = $('.header-right__degree');
        var sliderBg = $('.slider-blur__img');
        var formBg = $('.slider-blur__form-bg');
        var min = $('.header-right__min');
        var max = $('.header-right__max');


            if(selectVal == 'metric'){
                windDesc.html('wind m/s');
                degreeDesc.html('degree C &#176;');
                min.html('min C &#176;');
                max.html('max C &#176;');

            }else if(selectVal == 'imperial'){
                windDesc.text('wind m/h');
                degreeDesc.html('degree F &#176;');
                min.html('min F &#176;');
                max.html('max F &#176;');
            };


        if(!city == ''){
            $.ajax({
                url: 'http://api.openweathermap.org/data/2.5/weather?q='
                + city + '&units=' + selectVal + '&APPID=f50999261c38690e3547bd6f4fa1ab85',
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                    showData(data);

                    sliderBg.attr('src', 'img/' + data.weather[0].icon + '.jpg');
                    formBg.css('background', 'url(/img/'+ data.weather[0].icon + '.jpg');

                    divError.text('');
                }

            });
        }else{divError.html('city field cannot be empty' + '<br/>' + '(example: Lon, UK or Lon, GB or London, GB or Lon, England)')}

    });

    function showData(data){
        var name =     $('.output_city').text(data.name);
        var degree =   $('.output_degree').text(Math.round(data.main.temp));
        var pressure = $('.output_pressure').text(data.main.pressure);
        var coord =    $('.output_coord').text(data.coord.lat + ' ' + data.coord.lon);
        var country =  $('.output_country').text(data.sys.country);
        var weather =  $('.output_desc').text(data.weather[0].description);
        var wind =     $('.output_wind').text(data.wind.speed);
        var humid =    $('.output_humidity').text(data.main.humidity);
        var icon =     $('.header-icon').attr('src', 'img/' + data.weather[0].icon + '.png');
        var min =      $('.output_min').text(data.main.temp_min);
        var max =      $('.output_max').text(data.main.temp_max);

        return name + degree + pressure + coord + country + weather + wind + humid + min + max;

    };

};
