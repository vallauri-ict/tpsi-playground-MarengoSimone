"use strict"

const RIGHE = 6;
const COLONNE = 7;
const GIALLO="rgb(255, 255, 0)";
const ROSSO="rgb(255, 0, 0)";
const GRIGIO="rgb(187, 187, 187)";
let turno = GIALLO;

window.onload=function(){
	let wrapper = $("#wrapper");
	let header = $("#header");
	creaIntestazione();
	creaWrapper();

	function creaIntestazione()
	{
		// creazione pedine intestazione
		for(let i=0;i<COLONNE;i++)
		{
			let pedina = $("<div>");
			pedina.addClass("pedina");
			pedina.appendTo(header);
			// CORRETTO ma meglio utilizzare delegated events
			/*pedina.hover(
			function()
			{
				$(this).css({"background-color":turno});
			},
			function()
			{
				$(this).css({"background-color":GRIGIO});
			})*/
		}
	}

	function creaWrapper()
	{
		// creazione pedine wrapper
		for(let i=0;i<RIGHE;i++)
		{
			for(let j=0;j<COLONNE;j++)
			{
				let pedina = $("<div>");
				pedina.addClass("pedina");
				pedina.appendTo(wrapper);
				pedina.prop("id", `btn-${i}-${j}`);
			}
		}
	}

	// delegated events
	header.on("mouseenter","div",function(){$(this).css({"background-color":turno})});
	header.on("mouseleave","div",function(){$(this).css({"background-color":GRIGIO})});
	header.on("click","div",discesa);

	function discesa(){
		// index restituisce l'indice di $(this) all'interno del contenitore (header)
		let colonna = header.children("div").index($(this)); 
		// riga = posizione prima cella libera
		let riga = RIGHE-1;
		for(let i=0;i<RIGHE;i++)
		{
			let p = $(`#btn-${i}-${colonna}`);
			if(p.css("background-color")!=GRIGIO)
			{
				riga = i-1; // ultima pedina libera
				break;
			}
		}
		
		// se c'è una cella libera avvio l'animazione
		if(riga!=-1)
		{
			let pedina = $("<div>");
			pedina.appendTo(wrapper);
			pedina.addClass("pedina");
			pedina.css({"background-color":turno,"position":"absolute","left":colonna*60+5,"top":"-60px"});
			header.off("click");
			let _turno = turno;
			if(turno==GIALLO)
				turno=ROSSO;
			else
				turno=GIALLO;
			$(this).trigger("mouseenter");
			// animazione discesa:
			pedina.animate({"top":riga*60+5},200*(riga+1),
			function()
			{	header.on("click","div",discesa),
				$(`#btn-${riga}-${colonna}`).css({"background-color":_turno});
			});
		}
		else
		{
			alert("Cella non valida");
		}
	}
	
}

function generaNumero(min,max){
	let n= Math.floor((max-min+1)*Math.random()+min) /*x generare un numero tra min e max estremi inlcusi */
	return n;
}