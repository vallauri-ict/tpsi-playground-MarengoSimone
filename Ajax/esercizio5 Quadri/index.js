"option strict"

const URL = "http://localhost:3000"

$(function () {
    let _head = $('.head');
    let _info = $('.info');
    let _img = $('.img');
    let _btnPrev = $('button').eq(0);
    let _btnNext = $('button').eq(1);
    _btnPrev.prop("disabled", true);
	
    let _wrapperAdd = $('.wrapper').eq(1);
    
    let url = URL + "/artisti";
    let request = inviaRichiesta("GET", url);
    request.fail(errore);
    request.done(function(artisti){
        for (const artista of artisti) {
            let lbl = $("<label>");
            lbl.appendTo(_head);
            lbl.text(artista.name);
            let rdb = $("<input type='radio'>");
            rdb.prop("artista",artista);
            rdb.appendTo(lbl);
        }
        let pos = generaNumero(0,artisti.length-1);
        console.log(pos);
        visualizzaDettagli(pos);
    })

    function visualizzaDettagli(pos)
    {
        _head.children("label").children().eq(pos).prop("checked",true);
        let gender = _head.children("label").children().eq(pos).prop("artista").gender;
        let url = URL + "/quadri/?artist=" + (pos+1);
        let request = inviaRichiesta("GET", url);
        request.fail(errore);
        request.done(function(quadri){
            console.log(quadri);

            // informazioni
            let label = $("<label>");
            label.appendTo(_info);
            label.text("ID = " + (pos+1));

            label = $("<label>");
            label.appendTo(_info);
            label.text("Titolo = " + quadri[0].title);

            label = $("<label>");
            label.appendTo(_info);
            label.text("Genere = " + gender);

            label = $("<label>");
            label.appendTo(_info);
            label.text("Like = " + quadri[0].nLike);
            let img = $("<img>");
            img.prop("src","like.jpg");
            img.addClass("like");
            img.appendTo(label);

            // foto
            let image = $("<img>");
            image.appendTo(_img);
            image.prop("src", "img/" + quadri[0].img);
        })
    }
})
