<!DOCTYPE html>
<html lang="it">
 <head>
 <meta charset="UTF-8"/>
 <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> PHP </title>
	<script> src="https://code.jqeury.com/jquery-3.6.0.js"
	integrity="sha256-H+K7U5CnX"
	crossorigin="anonymus"</script>
	<link rel="stylesheet" href="index.css"/>
	<script type="application/javascript" src="index.js"> </script>
</head>

	<body>
		<h1>Pagina 2!</h1>

		<?php
			// step 1: lettura e controllo parametri	
			if(isset($_REQUEST["txtNome"]))
				$nome = $_REQUEST["txtNome"];
			else
				die("Nome mancante");
			
			if(isset($_REQUEST["optIndirizzo"]))
				$indirizzo = $_REQUEST["optIndirizzo"];
			else
				die("Indirizzo mancante");
			
			if(isset($_REQUEST["chkHobbies"]))
			{
				$hobbies = $_REQUEST["chkHobbies"];
				$hobbies = implode(',',$hobbies);
			}
			else
				$hobbies = "";
			echo($hobbies);
		?>
	</body>
</html>