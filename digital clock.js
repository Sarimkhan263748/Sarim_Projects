function clock () {
    var monthnames = ["january","February","march","april","may","june","july","august","september","october","november","december"]
}var daynames = ["Sunday","Monday","tuessday","wednesday","thursday","friday","saturday"]

var today= new Date();
document.getElementById('Date').innerHTML =(daynames[today.getDay()]) + "" +
today.getDate() + '' + monthnames[today.getmonth()] + '' +today.getfullyear(
);

var h = today.getHours();
var m = today.getminutes();
var s = today.getseconds();
var day = h<11 ? 'AM': 'PM';

h = h<10? '0'+h :h;
m= m<10? '0'+m :m;
s= s<10? '0'+s :s;

document.getElementById('hours').innerHTML =h;
document.getElementById('minutes').innerHTML =m;
document.getElementById('second').innerHTML =s;
var inter = setInterval(clock,400) 