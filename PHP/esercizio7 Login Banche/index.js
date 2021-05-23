"use strict";

$(function () {
	let _wrapper=$("#wrapper");
	let _divTitolo = $("#divTitolo");
    let _divFiliali = $("#divFiliali");
    let _divMovimenti = $("#divMovimenti");
	let _btnLogOut = $("#btnLogout");
	_wrapper.hide();
	
	_btnLogOut.on("click",function(){
		let request = inviaRichiesta("POST","server/logOut.php");
		request.fail(errore);
		request.done(function(data){
			alert("Sei stato disconnesso correttamente");
			window.location.href = "login.html";
		})
	})


	let _richiestaFiliali = inviaRichiesta("get", "server/elencoFiliali.php");
	
	_richiestaFiliali.fail(errore);
	
	_richiestaFiliali.done(function (data) {
		console.log(data)
		_wrapper.show();
		_divMovimenti.hide();
		_divFiliali.css("text-align","center");
		for (const filiale of data) {
			let opt = $("<input type='radio' name='optFiliali'>");
			opt.appendTo(_divFiliali);
			opt.val(filiale.cFiliale);
			let span = $("<span>");
			span.text(filiale.nome);
			span.appendTo(_divFiliali);
			let br = $("<br>");
			br.appendTo(_divFiliali);
		}
		let button = $("<button class='btn btn-primary'>");
		button.appendTo(_divFiliali);
		button.css({"margin":"15px"});
		button.text("Visualizza movimenti");
		
    });
	
		
	
});
