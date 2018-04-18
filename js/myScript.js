// Main call
$(main);

// Global Ids
var driverNameId = "#driverName";
var coDriverNameId = "#coDriverName";
var truckNumId = "#truckNum";
var trailerNumId = "#trailerNum";
var startMilesId = "#startMiles";
var finishMilesId = "#finishMiles";
var totalMilesId = "#totalMiles";


// Main Declaration
function main(){
	var myTrip = new Trip();
	
	// Change Driver's Name
	//$(driverNameId).keyup(myTrip.setCoDriverName);
	//$(driverNameId).blur(myTrip.setCoDriverName);

	// Configuring GitHub
	
	
	// Int Prevent Bind
	$(".int").keydown(function(e){
		if(intprevent(e)) {
			event.preventDefault();
		}
	});
	
	// Test
	$("#myTest").click(function(){
		alert(myTrip.totalMiles);
	});
}

class Trip {
	constructor(){
		this.driverName = "";
		this.startMiles = 0;
		this.finishMiles = 0;
	}
	
	get totalMiles(){
		return this.calcTotalMiles();
	}
	calcTotalMiles(){
		return this.finishMiles - this.startMiles;
	}
	
}

function normPosInt(num){
	var regex = /\d+/;
	return regex.exec(num) == null ? "" : regex.exec(num);
}

function intprevent(e) {
	var except = [8, 9, 37, 38, 39, 40, 46, 91, 92, 93];
	var off = true;
	
	if((e.which > 47 && e.which < 58) || (e.which > 95 && e.which < 106)) {
		off = false;
	}
	// ctrl + xcv copy paste
	if(e.ctrlKey && (e.which == 67 || e.which == 86 || e.which == 88)) {
		off = false;
	}
	for(i = 0; i < except.length && off; i++) {
		if(e.which == except[i]) {
			off = false;
		}
	}
	return off;
}
function numprevent(e) {
	var except = [8, 9, 37, 38, 39, 40, 46, 91, 92, 93, 110, 190];
	var off = true;
	
	if((e.which > 47 && e.which < 58) || (e.which > 95 && e.which < 106)) {
		off = false;
	}
	// ctrl + xcv copy paste
	if(e.ctrlKey && (e.which == 67 || e.which == 86 || e.which == 88)) {
		off = false;
	}
	for(i = 0; i < except.length && off; i++) {
		if(e.which == except[i]) {
			off = false;
		}
	}
	return off;
}



