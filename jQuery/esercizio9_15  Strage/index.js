"use strict"

let cnt=0;

 $(document).ready(function(){
     let wrapper = $("#wrapper");
     let timer = $("#timer");
     let header = $("#header");
     let section = $("#mainSection");

     header.animate({"width":60*15,"height":6*15,"line-height":6*15,"font-size":2*15},1500,creaDomande);

     function creaDomande()
     {
          for (const item of elencoDomande)
          {
               // creazione fieldset 
               let fieldset = $("<fieldset>");
               fieldset.appendTo(section);

               // creazione legend
               let legend = $("<legend>");
               legend.css({"font-size":"12pt","color":"blue"});
               legend.text(item.argomento);
               legend.appendTo(fieldset);

               for (const domanda of item.domande)
               {
                    cnt++;
                    // creazione domande
                    let p = $("<p>");
                    p.text(domanda.domanda);
                    p.appendTo(fieldset);

                    // creazione radio button True
                    let rdbT = $("<input>");
                    rdbT.prop({"type":"radio","name":`opt${cnt}`,"value":"T","risposta":`${domanda.risposta}`});
                    rdbT.appendTo(p);
                    console.log(domanda.risposta);

                    let lblT = $("<label>");
                    lblT.text("T");
                    lblT.prop("id","lblT");
                    lblT.appendTo(p);

                    // creazione radio button False
                    let rdbF = $("<input>");
                    rdbF.prop({"type":"radio","name":`opt${cnt}`,"value":"F","risposta":`${domanda.risposta}`});
                    rdbF.appendTo(p);

                    let lblF = $("<label>");
                    lblF.text("F");
                    lblF.prop("id","lblF");
                    lblF.appendTo(p);
               }
          }

          // button invia
          let btnInvia = $("<button>");
          btnInvia.text("invia");
          btnInvia.addClass("invia");
          btnInvia.appendTo(section);

          btnInvia.on("click",calcolaVoti);

          let spanMin = $("<span>").appendTo(timer).text(pad(0))
          $("<span>").appendTo(timer).text(":")
          let spanSec = $("<span>").appendTo(timer).text(pad(0));

          let tempoAttuale = setInterval(function () {
          if (spanSec.text() == "60") {
                spanSec.text("-1");
                spanMin.text(pad(parseInt(spanMin.text()) + 1));
          }
           spanSec.text(pad(parseInt(spanSec.text()) + 1));
            if(spanMin.text() == "02") {
                calcolaVoti();
            }
        }, 1000)


          function calcolaVoti()
          {
               // disabilito bottone e cambio CSS
               $(this).prop("disabled", true);
               $(this).css({"background-color":"#CCC","color":"#999"});

               // bloccare il timer
               clearInterval(tempoAttuale);

               // calcolo punteggio
               let punteggio = 0;
               let radios = section.find("input[type=radio]");
               let labels = section.find("label")
               radios.each(function(i,ref){
                    if($(ref).prop("checked") && $(ref).prop("risposta") == $(ref).val())
                    {
                         punteggio++;
                    }
                    else if($(ref).prop("checked") && $(ref).prop("risposta") != $(ref).val())
                    {
                         punteggio = punteggio - 0.25;
                         labels.eq(i).css({"color":"red"}) 
                    }
               })        
               alert("Il tuo punteggio è: " + punteggio + "/30");
          }
     }

     
 });


 
// Una semplice funzione per aggiungere uno 0 davanti ad un numero < 10
function pad(number) {
     return (number < 10 ? '0' : '') + number;
}
