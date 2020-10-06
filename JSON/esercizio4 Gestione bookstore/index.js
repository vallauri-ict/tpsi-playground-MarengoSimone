"use strict"


window.onload=function(){
	let json = localStorage.getItem("bookstore_json");
	this.console.log(json);
	let jsonVet = JSON.parse(json); // vettore caricato
	let _table = this.document.createElement("table");
	let _body = this.document.getElementsByTagName("body")[0]
	_body.appendChild(_table);

	creaIntestazioni();
	caricaDati();
	// creazione dei dettagli
	let _divDettagli = document.createElement("div");
	_body.appendChild(_divDettagli);
	_divDettagli.setAttribute("class", "dettagli");
	let indiceLibroCorrente = 0;
	visualizzaDettagli();
	creaPulsanti();


	function creaIntestazioni()
	{
		// creazione dell'intestazione
		let _tr = document.createElement("tr");
	    _table.appendChild(_tr);
		let intestazioni = ["Title","Authors","Category","Price",""];
		for (let i = 0; i < intestazioni.length; i++) {
			let _th = document.createElement("th");
			_th.innerHTML = intestazioni[i];
			_tr.appendChild(_th);
		}
	}


	function caricaDati(){
		// leggo e carico in tabella i dati
		for (let i=0;i<jsonVet.length;i++) {
			let item = jsonVet[i];
			// creo la riga e replico le celle td
			let _tr = document.createElement("tr");
			_table.appendChild(_tr);
			let _td;
	
			_td = document.createElement("td");
			_td.innerHTML = item["title"];
			_tr.appendChild(_td);
	
			_td = document.createElement("td");
			// authors è un vettore enumerativo. Il metodo join resistuisce una stringa contenente tutte le voci del vettore separate dalla virgola
			_td.innerHTML = item.authors//.join(",");
			_tr.appendChild(_td);
	
			_td = document.createElement("td");
			_td.innerHTML = item["category"];
			_tr.appendChild(_td);
	
			_td = document.createElement("td");
			_td.innerHTML = item["price"];
			_tr.appendChild(_td);

			// creazione pulsante elimina
			_td = document.createElement("td");
			let _button = document.createElement("button");
			_button.innerHTML = "ELIMINA";
			_td.appendChild(_button);
			_tr.appendChild(_td);
			_button.addEventListener("click",eliminaRecord);
			_button.recordDaEliminare = i;
		}
	}

	function eliminaRecord(){
		let pos = this.recordDaEliminare;
		jsonVet.splice(pos,1);
		localStorage.setItem("bookstore_json", JSON.stringify(jsonVet));
		window.location.reload(); // ricarica la pagina
	}
	

		
	

		

		// creo un tag p per scrivere i campi e lo metto nel div
		function visualizzaDettagli()
		{
			
			_divDettagli.innerHTML = "";
			let libroCorrente = jsonVet[indiceLibroCorrente];
			for (const key in libroCorrente) {
				// creo l'intestazione e la appendo
				let _p1 = document.createElement("p");
				_p1.innerHTML = key + ": ";
				_p1.style.textAlign = "right";
				_p1.style.fontWeight = "bold";
				_divDettagli.appendChild(_p1);

				// creo il contenuto e lo appendo
				let _p2 = document.createElement("p");
				_p2.innerHTML = libroCorrente[key];
				_divDettagli.appendChild(_p2);
			}
		}

		function creaPulsanti()
		{
			let _divPulsantiNavigazione = document.createElement("div");
			_divPulsantiNavigazione.setAttribute("class","contenitorePulsantiNavigazione");
			_body.appendChild(_divPulsantiNavigazione);
			let nomiPulsanti=["primo","indietro","avanti","ultimo","Aggiungi","Elimina per categoria",];
			for (const item of nomiPulsanti) {
				let button = document.createElement("button");
				button.id = item;
				button.setAttribute("class", "pulsantiNavigazione");
				button.addEventListener("click", gestionePulsanti);
				button.innerHTML = item;
				_divPulsantiNavigazione.appendChild(button);
			}
			document.getElementById("indietro").disabled=true;


		}

		function gestionePulsanti(){
			let indietro = document.getElementById("indietro");
			let avanti = document.getElementById("avanti");
			switch(this.innerHTML)
			{
				case "primo":
					indiceLibroCorrente=0;
					indietro.disabled=true;
					avanti.disabled=false;
					break;
				case "indietro":
					indiceLibroCorrente--;
					if(indiceLibroCorrente==0)
						indietro.disabled=true;
						avanti.disabled=false;
					break;
				case "avanti":
					indiceLibroCorrente++;
					if(indiceLibroCorrente==jsonVet.length-1)
						avanti.disabled=true;
					indietro.disabled=false;
					break;
				case "ultimo":
					indiceLibroCorrente=jsonVet.length-1;
					avanti.disabled=true;
					indietro.disabled=false;
					break;
				case "Aggiungi":
						//window.location.href="pagina2.html"
						window.open("pagina2.html");
						break;
				case "Elimina per categoria":
					let qta = 0;
						let categoria = prompt("Inserisci una categoria da cancellare:");
						for(let i=jsonVet.length-1;i>=0;i--)
						{
							if(jsonVet[i].category == categoria)
							{
								jsonVet.splice(i,1);
								qta++;
							}
						}
						if(qta > 0)
						{
							alert("Cancellati: " + qta + " record");
							localStorage.setItem("bookstore_json", JSON.stringify(jsonVet));
							window.location.reload(); // ricarica la pagina
						}
						else
						{
							alert("Nessun record trovato");
						}
						break;
				default:
					break;
			}
			visualizzaDettagli();
		}

};
