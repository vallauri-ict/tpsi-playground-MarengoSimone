"use strict"

let _wrapper;

// richiamata dall'html quindi va scritta fuori
function evidenzia(selector){
    _wrapper.children().css({"backgroundColor":""});
    _wrapper.children(selector).css({"backgroundColor":"#FF0"});
}


$(document).ready( function(){
    _wrapper = $("#wrapper");
    
    $("#btn1").on("click", function(){
        alert($("#wrapper li").length);
        alert($("#wrapper").children().length);
    })

    $("#btn2").on("click", function(){
        let list = $("#wrapper").children(); // accedo a tutte le voci di menù
        let msg = "";

        // soluzione 1
        for(let i=0;i<list.length;i++)
        {
            // msg += list[i].innerHTML
            // msg += $(list[i]).html();
            // msg += list.eq(i).html();
        }

        // soluzione 2
        for (let item of list) {      // list è una lista di javascript
            //msg += $(item).html();
        }

        // soluzione 3
        list.each(function(i, ref){  // i puntatore dell'elemento mentre ref puntatore javascript
           // msg += $(list.eq(i).html());
           // msg += $(this).html();  nel caso non scrivessimo i,ref
            msg += $(ref).html();
        })
        alert(msg);

    })

    $("#btn3").on("click", function(){
        // $("#wrapper li:nth-of-type(even)").css({"backgroundColor":"#FF0"});
        // $("#wrapper").children.filter(":nth-of-type(even)").css({"backgroundColor":"#FF0"});
        _wrapper.children().css({"backgroundColor":""});
        $("#wrapper").children(":nth-of-type(even)").css({"backgroundColor":"#FF0"});
    })

    $("#btn4").on("click", function(){
        let _dispari = _wrapper.children(":nth-of-type(odd)");
        _dispari.each(function(i, ref){
            let colore = 50 * (i+1);
            $(ref).css({"backgroundColor": `rgb(0, ${colore}, 0)`});
        }) 
    })
})