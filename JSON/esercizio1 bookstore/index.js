"use strict"

function crea(){
	localStorage.setItem("bookstore_xml", bookstore);
	alert("Dati salvati correttamente all'interno del localStorage");
}

function visualizza(){
	// lettura della stringa dal localStorage
	let xml = localStorage.getItem("bookstore_xml");
	
	/* ***************   INIZIO ELABORAZIONE ************* */
	// istanzio un DOM Parser
	let parser = new DOMParser();
	// tramite il DOM Parser, parsifico la stringa xml
	let xmlDoc = parser.parseFromString(xml,"text/xml");
	
	// accedo alla radice dell'albero
	let root = xmlDoc.documentElement;
	let nLibri = root.children.length;
	alert("Dati letti correttamente dal localStorage. N. di record letti = " + nLibri );

	let _tBody = document.getElementById("tabLibri");
	// ripulisco il body
	_tBody.innerHTML = "";

	// carico i nuovi dati dentro body
	for(let i=0;i< nLibri;i++)
	{
		let titolo="", categoria="", lingua="", autori="", anno="", prezzo="";


		let libro = root.children[i];
		if(libro.hasAttribute("category"))
			categoria = libro.getAttribute("category");

		
		
		for (let j = 0; j < libro.children.length; j++) {
			let campo = libro.children[j];
			switch(campo.nodeName){
				case 'title':
					titolo = campo.textContent;
					if(campo.hasAttribute("lang"))
						lingua = campo.getAttribute("lang");
					break;
				case 'year':
					anno = campo.textContent;
					break;
				case 'price':
					prezzo = campo.textContent;
					break;
				case 'author':
					if(autori=="")
						autori += campo.textContent;
						else
						autori += " - " + campo.textContent;
					break;
			}
			
		}
		
		// creo la riga e la appendo al DOM
		let tr = document.createElement("tr");
		_tBody.appendChild(tr);

		// creo le celle e le appendo alla riga
		let td;
		td = document.createElement("td");
		td.innerHTML = titolo;
		tr.appendChild(td);

		td = document.createElement("td");
		td.innerHTML = categoria;
		tr.appendChild(td);

	    td = document.createElement("td");
		td.innerHTML = lingua;
		tr.appendChild(td);

	    td = document.createElement("td");
		td.innerHTML = autori;
		tr.appendChild(td);

		td = document.createElement("td");
		td.innerHTML = anno;
		tr.appendChild(td);

		td = document.createElement("td");
		td.innerHTML = prezzo;
		tr.appendChild(td);
		

	}
}