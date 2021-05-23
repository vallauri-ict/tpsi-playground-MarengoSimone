"use strict";

const PHP = true;
function inviaRichiesta(method, url, parameters={}) {
	let contentType;
	if(method.toUpperCase()=="GET" || PHP)
		contentType="application/x-www-form-urlencoded;charset=utf-8";
	else{
		contentType = "application/json; charset=utf-8"
        parameters = JSON.stringify(parameters);
	}
    return $.ajax({
        "url": url,
		"data": parameters,
		"type": method,   
		"contentType": contentType, 
        "dataType": "json",   // default      
        "timeout": 5000,      // default 
    });	
}

function errore(jqXHR, text_status, string_error) {
    if (jqXHR.status == 0)
        alert("Connection Refused or Server timeout");
	else if (jqXHR.status == 200)
        alert("Formato dei dati non corretto : " + jqXHR.responseText);
    else if (jqXHR.status == 403)
		window.location.href="login.html";
    else
        alert("Server Error: " + jqXHR.status + " - " + jqXHR.responseText);
}

function generaNumero(a, b){
	return Math.floor((b - a + 1) * Math.random()) + a;
}