"use strict"

$(document).ready(function(){
    let _lampadina = $(".lampadina");
    let _btnAccendi = $("#btnAccendi");
    let _btnSpegni = $("#btnSpegni");
    let _descrizione = $("#descrizione");
    let _contenuto = $("#contenuto");

    _btnSpegni.hide(); // nasconde il bottone
    _lampadina.hide();

    _btnAccendi.on("click", function(){
        _lampadina.addClass("accesa"); // aggiunge una classe
        _lampadina.fadeIn(2000, function(){   // fadeIn effetto per visualizzare la lampadina
            _btnSpegni.show();
            _btnAccendi.hide();
        }); // 1^ param.  --> tempo  -----  2^ param. --> funzione di call back, eseguita quando termina la funzione
    });

    _btnSpegni.on("click", function(){
        _lampadina.fadeOut(2000, function(){   // fadeOut effetto per nascondere la lampadina
            _btnSpegni.hide();
            _btnAccendi.show();
            _lampadina.removeClass("accesa"); // rimuove una classe
        });
    });

    let descrizione = {
        "width": "160px",
        "height": "40px",
        "text-align":"center",
        "line-height":"40px",
        "background-color": "#aaa",
        "text-decoration": "underline",
        "font-size": "14pt",
        "cursor":"pointer",
        "border-radius":"10px",
        "margin-left":"10px"
    };

    _descrizione.css(descrizione); // assegno il vettore json di css a _descrizione
    _contenuto.hide();
    _descrizione.on("mouseover", function(){
        _contenuto.slideDown(1000);  // effetto per visualizzare il contenuto
    });

    _descrizione.on("mouseout", function(){
        _contenuto.slideUp(1000);  // effetto per nascondere il contenuto
    });
})