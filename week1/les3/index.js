/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
/* module.exports = function (hours, minutes, interval) {
   hours = (hours>= 0 && hours<=23) ? hours: false;
   minutes = (minutes>=0 && minutes<=59) ? minutes: false;
   add_hours = Math.floor((minutes + interval)/60);
   expected_minutes = (minutes + interval - add_hours*60).toString();
   expected_hours = ((hours + add_hours)>23) ? ((hours + add_hours)-24).toString() : (hours + add_hours).toString();
   expected_hours = (expected_hours.length>1) ? expected_hours : '0'+expected_hours;
   expected_minutes = (expected_minutes.length>1) ? expected_minutes : '0'+expected_minutes;
   return expected_hours+':'+expected_minutes
}; */

module.exports = function (hours, minutes, interval) {
   hours = (hours>= 0 && hours<=23) ? hours: false;
   minutes = (minutes>=0 && minutes<=59) ? minutes: false;
   all_minutes = hours*60 + minutes + interval;
   ex_hours = Math.floor(all_minutes/60);
   hours = (ex_hours<24) ? ex_hours.toString() : (ex_hours-24*Math.floor(ex_hours/24)).toString();
   minutes = (all_minutes - 60*ex_hours).toString();
   expected_hours = (hours.length>1) ? hours : '0'+hours;
   expected_minutes = (minutes.length>1) ? minutes : '0'+minutes;   
   return expected_hours+':'+expected_minutes
}
