"use strict"

let category;
let title;
let author;
let lang;
let year;
let price;
let jsonVet;

    window.onload=function(){
        category = document.getElementById("txtCategoria");
        title = document.getElementById("txtTitolo");
        author = document.getElementById("txtAutore");
        lang = document.getElementById("txtLingua");
        year = document.getElementById("txtAnno");
        price = document.getElementById("txtPrezzo");
        let json = localStorage.getItem("bookstore_json");
        jsonVet = JSON.parse(json);
    }

    function salva(){
        let jsonBook={};
        jsonBook.category = category.value;
		jsonBook.authors = author.value;
		jsonBook.lang = lang.value;
		jsonBook.title = title.value;
		jsonBook["year "]= year.value;
        jsonBook["price"] = price.value;
        jsonVet.push(jsonBook);
        alert("Dati salvati corretamente");
        localStorage.setItem("bookstore_json", JSON.stringify(jsonVet));
        window.location.href="index.html";
    }

    function ritorna(){
        window.location.href="index.html";
    }