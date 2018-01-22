const slider = require('./moduls/slider.js');

window.onload = function(){
    // var map;
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: -34.397, lng: 150.644},
    //         zoom: 8
    //     });
    // }

    function initMap() {
        var uluru = {lat: 39.7315155507, lng: -104.96951340};
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 9,
            center: uluru
        });
        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
    }

    initMap();


};





