$(document).ready(function () {

var DateMode = 1; // 1 - EST | 2 - UTC
var TimeON = 1; // 1 - Enable | 2 - Off

var datey = new Date(Date.now());

var dateForUTC = new Date(Date.now());

var dateyx = datey.toLocaleString('en-US', { timeZone: 'America/New_York' });
var datej = new Date(dateyx);
var datehour = datej.getHours();
var dateday = datej.getDate();

var datehourUTC = dateForUTC.getUTCHours();
var datedayUTC = dateForUTC.getUTCDate();

if(datehour == 1) { datehour = '- 1am EST' }    if(datehourUTC == 1) { datehourUTC = '- 1am UTC' }
if(datehour == 2) { datehour = '- 2am EST' }    if(datehourUTC == 2) { datehourUTC = '- 2am UTC' }
if(datehour == 3) { datehour = '- 3am EST' }    if(datehourUTC == 3) { datehourUTC = '- 3am UTC' }
if(datehour == 4) { datehour = '- 4am EST' }    if(datehourUTC == 4) { datehourUTC = '- 4am UTC' }
if(datehour == 5) { datehour = '- 5am EST' }    if(datehourUTC == 5) { datehourUTC = '- 5am UTC' }
if(datehour == 6) { datehour = '- 6am EST' }    if(datehourUTC == 6) { datehourUTC = '- 6am UTC' }
if(datehour == 7) { datehour = '- 7am EST' }    if(datehourUTC == 7) { datehourUTC = '- 7am UTC' }
if(datehour == 8) { datehour = '- 8am EST' }    if(datehourUTC == 8) { datehourUTC = '- 8am UTC' }
if(datehour == 9) { datehour = '- 9am EST' }    if(datehourUTC == 9) { datehourUTC = '- 9am UTC' }
if(datehour == 10) { datehour = '- 10am EST' }    if(datehourUTC == 10) { datehourUTC = '- 10am UTC'}
if(datehour == 11) { datehour = '- 11am EST' }    if(datehourUTC == 11) { datehourUTC = '- 11am UTC'}
if(datehour == 12) { datehour = '- 12pm EST' }    if(datehourUTC == 12) { datehourUTC = '- 12pm UTC'}
if(datehour == 13) { datehour = '- 1pm EST' }     if(datehourUTC == 13) { datehourUTC = '- 1pm UTC' }
if(datehour == 14) { datehour = '- 2pm EST' }     if(datehourUTC == 14) { datehourUTC = '- 2pm UTC' }
if(datehour == 15) { datehour = '- 3pm EST' }     if(datehourUTC == 15) { datehourUTC = '- 3pm UTC' }
if(datehour == 16) { datehour = '- 4pm EST' }     if(datehourUTC == 16) { datehourUTC = '- 4pm UTC' }
if(datehour == 17) { datehour = '- 5pm EST' }     if(datehourUTC == 17) { datehourUTC = '- 5pm UTC' }
if(datehour == 18) { datehour = '- 6pm EST' }     if(datehourUTC == 18) { datehourUTC = '- 6pm UTC' }
if(datehour == 19) { datehour = '- 7pm EST' }     if(datehourUTC == 19) { datehourUTC = '- 7pm UTC' }
if(datehour == 20) { datehour = '- 8pm EST' }     if(datehourUTC == 20) { datehourUTC = '- 8pm UTC' }
if(datehour == 21) { datehour = '- 9pm EST' }     if(datehourUTC == 21) { datehourUTC = '- 9pm UTC' }
if(datehour == 22) { datehour = '- 10pm EST'}    if(datehourUTC == 22) { datehourUTC = '- 10pm UTC' }
if(datehour == 23) { datehour = '- 11pm EST'}    if(datehourUTC == 23) { datehourUTC = '- 11pm UTC' }
if(datehour == 0) { datehour = '- 12am EST' }    if(datehourUTC == 0 ) { datehourUTC = '- 12am UTC' }

if(DateMode == 1) {
  document.getElementById("dateday2").innerHTML = dateday;
  let month = new Date().toDateString().split(" ")[1];
  document.getElementById("dateday3").innerHTML = month;
  if(TimeON == 1) {
  document.getElementById("datehour1").innerHTML = datehour;
  }
} else if(DateMode == 2) {
  document.getElementById("dateday2").innerHTML = datedayUTC;
  let month = new Date().toDateString().split(" ")[1];
  document.getElementById("dateday3").innerHTML = month;
  if(TimeON == 1) {
  document.getElementById("datehour1").innerHTML = datehourUTC;
  }
}



    function appInit(){
		var ethMaxSupply = 100;
		var ethLeftSupply = 45;
        window.sessionStorage;
        let funds = sessionStorage.getItem('funds');
		if (funds == null){
			funds = ethLeftSupply + funds + Math.floor((Math.random()*2)+1)
		}
        $('.Loading span').text('MINTED: ' + (funds)+ ' / ' + ethMaxSupply);
        function lastMintTimeout(){
            let randTimeout = Math.floor((Math.random()*5000)+2000);
            setTimeout(function(){
                funds = parseInt(funds) + Math.floor((Math.random()*2)+1);
                mintFunc(funds);
            }, randTimeout);
        }
        function mintFunc(funds){
			if (funds>= 95){ funds = 95 }
            sessionStorage.setItem('funds', funds);
            $('.Loading span').text('MINTED: ' + (funds)+ ' / ' + ethMaxSupply);
			if (funds>= 95){
			}else{
				lastMintTimeout();
			}
            
        }
        lastMintTimeout();
    }
    appInit();



});

