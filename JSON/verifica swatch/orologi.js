let swatches = [      // vettore enumerativo di JSON, scorro con il forof --> contiene 2 elementi (men e women)
    { "gender" : "Men",
	  "models" : [  {      // models è enumerativo, scorro di nuovo con il forof
					 "code"   : "QWZ5671",
					 "price"  : 39.95,
					 // swatches è enumerativo, scorro di nuovo con il forof
				     "swatches"  : [{ "color" : "Red",       "image" : "red_cardigan.jpg"},
					                { "color" : "Burgundy",  "image" : "burgundy_cardigan.jpg"}]
				   },
				   {
					 "code"   : "QWZ5672",
					 "price"  : 45.95,
				     "swatches"  : [{ "color" : "Blue",      "image" : "blue_cardigan.jpg"},
					                { "color" : "Burgundy",  "image" : "burgundy_cardigan.jpg"},
									{ "color" : "Black",     "image" : "black_cardigan.jpg"}]
				   },
				   {
					 "code"   : "QWZ5673",
					 "price"  : 60.95,
				     "swatches"  : [{ "color" : "Blue",      "image" : "blue_cardigan.jpg"},
					                { "color" : "Burgundy",  "image" : "burgundy_cardigan.jpg"}]
				   }
				]
	},
    { "gender" : "Women",
	  "models" : [  {
					 "code"   : "RRX9856",
					 "price"  : 42.50,
				     "swatches"  : [{ "color" : "Red",       "image" : "red_cardigan.jpg"},
					                { "color" : "Blue",      "image" : "blue_cardigan.jpg"},
					                { "color" : "Burgundy",  "image" : "burgundy_cardigan.jpg"}]
				   },
				   {
					 "code"   : "RRX9857",
					 "price"  : 46.50,
				     "swatches"  : [{ "color" : "Red",       "image" : "red_cardigan.jpg"},
					                { "color" : "Blue",      "image" : "blue_cardigan.jpg"},
								    { "color" : "Burgundy",  "image" : "burgundy_cardigan.jpg"},
								    { "color" : "Black",     "image" : "black_cardigan.jpg"}]
				   },
				   {
					 "code"   : "RRX9858",
					 "price"  : 48.50,
				     "swatches"  : [ {"color" : "Blue",      "image" : "blue_cardigan.jpg"},
					                { "color" : "Black",     "image" : "black_cardigan.jpg"}]
				   },
				   {
					 "code"   : "RRX9859",
					 "price"  : 55.50,
				     "swatches"  : [{ "color" : "Burgundy",  "image" : "burgundy_cardigan.jpg"},
					                { "color" : "Black",     "image" : "black_cardigan.jpg"}]
				   }
				]				   
	}
]

   
