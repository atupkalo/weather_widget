const blur = require('./moduls/blur.js');
const date = require('./moduls/date.js');
const ajaxRequests = require('./moduls/ajaxreq.js');
const weatherData = require('./moduls/weather-data.js');

window.onload = function(){
    date();
    blur();
    ajaxRequests();
    weatherData();

    function initMap(){
        var coord = {lat: 39.74, lng: -104.98}
        var elem = document.getElementById('map');
        var options = {
            zoom: 9,
            center: coord
        };
        var myMap = new google.maps.Map(elem, options);
        var marker = new google.maps.Marker({
            position: coord,
            map: myMap,
            icon: 'img/marker-d.png'
        });

    };
    initMap();

    // var pic = document.getElementById('slider-pic');
    // var sm = 'small-';
    // var xs = 'x-small-';
    // var xxs = 'xx-small-'
    //
    // function changeImg(){
    //     if(screen.width < 1200 && screen.width > 760){
    //         pic.src = 'http://localhost:3000/img/' + sm + '01d.jpg';
    //     }else if(screen.width < 760 && screen.width > 460){
    //         pic.src = 'http://localhost:3000/img/' + xs + '01d.jpg';
    //     }else if(screen.width < 460){
    //         pic.src = 'http://localhost:3000/img/' + xxs + '01d.jpg';
    //     }
    // };
    // changeImg();
    //
    // console.log(screen.width);




};

