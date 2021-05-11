"use strict"

$(document).ready(function(){
    let _table =$("#table>div");
    let request = inviaRichiesta("GET", "server/elencoDischi.php");
    request.fail(errore);
    request.done(function(data){
        console.log(data);
        for (const item of data) {
            let txt = $("<input [type=text]>");
            txt.val(item.id);
            txt.appendTo(_table);
            txt = $("<input [type=text]>");
            txt.val(item.autore);
            txt.appendTo(_table);
            txt = $("<input [type=text]>");
            txt.val(item.titolo);
            txt.appendTo(_table);
            txt = $("<input [type=text]>");
            txt.val(item.anno);
            txt.appendTo(_table);
            let button = $("<button>");
            button.appendTo(_table);
            button.html("Salva");
            button = $("<button>");
            button.appendTo(_table);
            button.html("Cancella");
        }
    })
})