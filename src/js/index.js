const blur = require('./moduls/blur.js');
const date = require('./moduls/date.js');
const ajaxRequests = require('./moduls/ajaxreq.js');
const weatherData = require('./moduls/weather-data.js');

window.onload = function(){
    blur();
    date();
    ajaxRequests();
    weatherData();

};



