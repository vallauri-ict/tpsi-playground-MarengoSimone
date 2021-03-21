"use strict";

const URL = "https://maps.googleapis.com/maps/api"
const key  = "" 

const params = {
	"key":key,
	"center": "via san michele 68, fossano",  // "44.5557763,7.7347183"
	"location": "via san michele 68, fossano",
	"zoom":17,
	"size":"800x600",	
	// maptype viene aggiunto dopo  manualmente
	"markers":"color:orange|size:big|label:V|via san michele 68, fossano",
	"heading":"-60",
	"pitch":"7",	
	"fov":"45"
}
const mapType = ['roadmap', 'satellite', 'hybrid', 'terrain', 'streetview'];



window.onload = function () {	
    let imgBox = $("#imgBox");
    let btnBox = $("#btnBox");
	for (const item of mapType) {
		let button = $("<button>");
		button.text(item);
		button.appendTo(btnBox);
		button.on("click",visualizzaMappa);
	}
	$("button").eq(0).trigger("click");

	/* ******************************** */
	function visualizzaMappa(){
		let url;
		if($(this).text()!="streetview")
		{
			url = URL + "/staticmap?" + setParameters($(this).text());

		}
		else
		{
			url = URL + "/streetview?" + setParameters("streetview");
		}
		console.log(url);
		imgBox.prop("src",url);

		$("button").removeClass("active");
		$(this).addClass("active");
	}

	function setParameters(mapType){
		let qString = "";
		for (const key in params) {
			qString += key + "=" + params[key] + "&";
		}
		qString += "maptype=" + mapType;
		return qString
	}
}