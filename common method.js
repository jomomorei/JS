
 // array empty or does not exist
(array === undefined || array.length == 0) {
   
}

// timeseries compare
var time1 = new Date(yyyy, mm, d, h, m, s);
var time2 = new Date(yyyy, mm+1, d, h, m, s);
Date.parse(time1)) < Date.parse(time2)

// get days of this month
var d = new Date(yr, mon + 1, 0);
var days = d.getDate();　　　　

// array unique 
function unique(array){ 
var arr = [array[0]]; // output array
for(var i = 1; i < array.length; i++) { 
  if (array.indexOf(array[i]) == i) arr.push(array[i]); 
} 
return arr; 
}
