"use strict"

$(document).ready(function() {
    let _btnIndietro = $("#btnIndietro");
    let _btnAvanti = $("#btnAvanti");
    let _img = $("#img");
    let i=1;

    let style = {
        "width" : "140px",
        "height" : "40px",
        "font-weight" : "bold",
        "background-color" : "orange",
        "border-radius" : "50%",
        "align":"center"
    }

    _btnAvanti.css(style);
    _btnIndietro.css(style);
    _img.css({"width":"400px"});
    _btnIndietro.prop({"disabled" : true});
    _img.prop("src","img/img1.jpg");

    _btnAvanti.on("click", avanti);
    _btnIndietro.on("click", indietro);

    function avanti(){
        i++;
        if(i>1)
        {
            _btnIndietro.prop({"disabled" : false});
        }
        if(i==7)
          _btnAvanti.prop({"disabled" : true});
        _img.prop("src", "img/img"+ i + ".jpg");
    }

    function indietro(){
        i--;
        if(i==6)
        {
            _btnAvanti.prop({"disabled" : false});
        }
        if(i==1)
          _btnIndietro.prop({"disabled" : true});
        _img.prop("src", "img/img"+ i + ".jpg");
    }

});