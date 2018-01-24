const slider = require('./moduls/slider.js');

window.onload = function(){

};

$(document).ready(function(){
    var btn = $('.get-city');
    var defCoord1 = 39.74;
    var defCoord2 = -104.98;

    // function initMap(coordLat, coordLon) {
    //     var uluru = {lat: coordLat, lng: coordLon};
    //     var map = new google.maps.Map(document.getElementById('map'), {
    //         zoom: 9,
    //         center: uluru
    //     });
    //     var marker = new google.maps.Marker({
    //         position: uluru,
    //         map: map
    //     });
    // };
    // initMap(defCoord1, defCoord2);





     btn.click(function(){
         var city = $('.header-input-city').val();
         var divError = $('.header-error');
         var cellDate = $('.output-date');
         var selectVal = $('.header-system').val();




         if(!city == ''){
                   $.ajax({
                       url: 'http://api.openweathermap.org/data/2.5/weather?q='
                       + city + '&units=' + selectVal + '&APPID=f50999261c38690e3547bd6f4fa1ab85',
                       type: "GET",
                       dataType: "jsonp",
                       success: function(data){

                            showData(data);
                           var defCoord1 = data.coord.lat;
                           var defCoord2 = data.coord.lon;


                           console.log(defCoord1, defCoord2);
                            // initMap(35.6, -89.7);
                       }

                   });
               }else{divError.text('this field cannot be empty');}

     });

    function showData(data){
        var name =     $('.output_city').text(data.name);
        var degree =   $('.output_degree').text(Math.round(data.main.temp));
        var pressure = $('.output_pressure').text(data.main.pressure);
        var coord =    $('.output_coord').text(data.coord.lat + ' ' + data.coord.lon);
        var country =  $('.output_country').text(data.sys.country);
        var weather =   $('.header-right__desc').text(data.weather[0].description);
        var wind =     $('.output_wind').text(data.wind.speed);
        var humid =     $('.output_humidity').text(data.main.humidity);
        var icon =      $('.header-icon').attr('src', 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png');
        return name + degree + pressure + coord + country + weather + wind + humid;

    };

});

