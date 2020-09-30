"use strict"

window.onload=function(){
	let _button = this.document.getElementById("btnConverti");
	_button.addEventListener("click", converti);

	function converti()
	{
		let xml = localStorage.getItem("bookstore_xml");
		let parser = new DOMParser();
		let xmlDoc = parser.parseFromString(xml, "text/xml");
		let root = xmlDoc.documentElement;

		// dichiarazione di un vettore enumerativo in cui salveremo i libri in formato JSON
		let jsonVet = []; 

		// scansione dell'albero XML
		// root.children è un vettore enumerativo che contiene tutti i book figli di root
		for (let i = 0; i < root.children.length; i++) {
			let book = root.children[i];
			let category="";
			let title="";
			let authors= [];
			let lang="";
			let year="";
			let price="";
			if (book.hasAttribute("category"))
			{
				category= book.getAttribute("category");
			}
			for (let j = 0; j < book.children.length; j++) {
				let campo = book.children[j];
				switch(campo.nodeName){
					case "title":
						title = campo.textContent;
						if(campo.hasAttribute("lang"))
						{
							lang = campo.getAttribute("lang");
						}
						break;
					case "author":
						authors.push(campo.textContent); // aggiunge un elemento in coda al vettore
						break;
					case "year":
						year = campo.textContent
						break;
					case "price":
						price = campo.textContent;
						break;
					default:
						break;
				}
			}
			console.log("BOOK");
			console.log(category);
			console.log(title);
			console.log(authors);
			console.log(lang);
			console.log(year);
			console.log(price);

			// dihciarazione vettore associativo o JSON
			let jsonBook={};
			jsonBook.category = category;
			jsonBook.title = title;
			jsonBook.authors = authors;
			jsonBook.lang = lang;
			jsonBook["year "]= year;
			jsonBook["price"] = price;
			// inserisco jsonBook nel vettore
			jsonVet.push(jsonBook);
		}
		// prende l'object e lo trasforma in stringa
		//alert (JSON.stringify(jsonVet));
		alert("Dati convertiti e salvati correttamente");
		localStorage.setItem("bookstore_json", JSON.stringify(jsonVet))
	}
}

