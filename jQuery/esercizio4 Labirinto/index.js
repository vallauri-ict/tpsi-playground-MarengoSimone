$(document).ready(function() {

    var _btnAvvia = $("#btnAvvia");
	_btnAvvia.on("click", eseguiAnimazione);

	_btnAvvia.css("opacitiy", 0);  // 1 = solido = default   0 = trasparente
	let lampeggio = true;
	lamp();
 
	function eseguiAnimazione(){ 
		lampeggio = false;  // nascondo graficamente il pulsante
		_btnAvvia.off("click");  // rimuovo l'evento click dal bottone
		_btnAvvia.css("cursor","default"); // cambio la forma del cursore
		$("#pedina")
		.css({left:"10px",top:"260px", width:"15px", height:"15px"})
		.animate({left:'+=60px', width:"8px", height:"8px"},1300)
		.animate({top:'+=38px',  width:"15px", height:"15px"},1300)
		.animate({left:'+=116px',width:"8px", height:"8px"},1300)
		.animate({top:'+=77px',  width:"15px", height:"15px"}, 1300)
		.animate({left:'+=250px',width:"8px", height:"8px"},1300,
		function(){
			// sulla funzione di call back dell'ultima animazione vengono reimpostati i dati iniziali
			lamp();  // torna a lampeggiare
			_btnAvvia.on("click", eseguiAnimazione);  // rimetto il click del pulsante
			lampeggio = true;   // faccio si che torni a lampeggiare AVVIA
			_btnAvvia.css("cursor","pointer");  // imposto il cursore nuovamente a pointer
		})
	}

	function lamp(){
		// animazioni successive sullo stesso oggetto vengono eseguite una dopo l'altra
		_btnAvvia.animate({"opacity":1}, 450, function(){
			_btnAvvia.animate({"opacity":0}, 450, function(){})
			if(lampeggio) lamp();
		})
		
	}
	
});
