"option strict"

const URL = "http://localhost:3000"

$(document).ready(function () {
    const _lstCitta  =$("#lstCitta")
    const _lstGeneri = $("#lstGeneri")
    const _btnFiltro  = $("#btnFiltro")
    const _tbody = $("table tbody");
	const _divDettagli =$("#divDettagli")
    
    _divDettagli.hide();
    caricaComboCitta();
    caricaComboGeneri();

    /* ****************************** */
    function caricaComboCitta()
    {
        let li = $("<li>");
        li.appendTo(_lstCitta);
        li.text("Tutti");
        let request  = inviaRichiesta("get",URL+"/citta");
        request.fail(errore);
        request.done(function(citta){
            for (const item of citta) {
                li = $("<li>");
                li.appendTo(_lstCitta);
                li.text(item.citta);
                li.prop("citta",item);
            }
        })
    }

    function caricaComboGeneri()
    {
        let li = $("<li>");
        li.appendTo(_lstGeneri);
        li.text("Tutti");
        let request  = inviaRichiesta("get",URL+"/generi");
        request.fail(errore);
        request.done(function(generi){
            for (const genere of generi) {
                li = $("<li>");
                li.appendTo(_lstGeneri);
                li.text(genere.genere);
                li.prop("genere",genere);
            }
        })
    }



})