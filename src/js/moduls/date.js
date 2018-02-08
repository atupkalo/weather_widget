/**
 * Created by Anatoliy Tupkalo on 1/12/2018.
 */
module.exports = function(){
    var fullDate = new Date();
    var outputDate = $('.output_date');
    var myDate = fullDate.getDate();
    var myMonth = fullDate.getUTCMonth();
    var myYear = fullDate.getFullYear();
    var rightMonth = '';

    switch (myMonth){
        case 0: rightMonth = 'Jan';
            break;
        case 1: rightMonth = 'Feb';
            break;
        case 2: rightMonth = 'Mar';
            break;
        case 3: rightMonth = 'Apr';
            break;
        case 4: rightMonth = 'May';
            break;
        case 5: rightMonth = 'Jun';
            break;
        case 6: rightMonth = 'Jul';
            break;
        case 7: rightMonth = 'Aug';
            break;
        case 8: rightMonth = 'Sep';
            break;
        case 9: rightMonth = 'Oct';
            break;
        case 10: rightMonth = 'Nov';
            break;
        case 11: rightMonth = 'Dec';
            break;
    }

    outputDate.text(rightMonth + '. ' +  myDate + '. ' + myYear);

};
