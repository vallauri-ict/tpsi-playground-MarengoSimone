<?php

    // step 1
    if(isset($_REQUEST["txtUser"]))
        $txtUser = $_REQUEST["txtUser"];
    else
        die("Parametro mancante: txtUser");

    if(isset($_FILES["txtFiles"]))
        $fileRicevuti = $_FILES["txtFiles"];
    else
        die("Parametro mancante: txtFiles");

    $overwrite = false;
    if(isset($_REQUEST["chkOverwrite"]))
        $overwrite = true;

        $fileRicevuti=$_FILES["txtFiles"];
        for ($i = 0; $i<count($fileRicevuti["name"]); $i++){
            $filename=basename($fileRicevuti["name"][$i]);
            $size=$fileRicevuti["size"][$i];
            if($size > 1000000)
            {
                echo("Il file $filename eccede le dimensioni massima di un MB e non può essere salvato sul server");
                continue; // forza all'inizio del ciclo, passa al prossimo file
            }
            $mimeType=$fileRicevuti["type"][$i];
            $ext = pathinfo($filename,PATHINFO_EXTENSION);
            $target_file = "uploads/$filename";
            if(file_exists($target_file))
            {
                if(!$overwrite)
                {
                    echo("Il file $filename esiste già e non può essere sovrascritto");
                    continue;
                }
            }
            if(move_uploaded_file($fileRicevuti["tmp_name"][$i],$target_file))
            {
                echo("File caricato correttamente </br>");
                echo("Name: $filename </br>");
                echo("Size: $size </br>");
                echo("Extension: $ext </br>");
                echo("mimeType: $mimeType </br>");
                echo("User: $txtUser </br> </br>");
            }
            else
            {
                http_response_code(500);
                echo("Errore nel caricamento del file $filename");
            }
        }
?>