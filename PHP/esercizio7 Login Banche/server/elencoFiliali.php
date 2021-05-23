<?php
    header("content-type:application/json; charset=utf-8");
    require("php-mysqli.php");

    // step 0 controllo sessione
    _checkSession("cCorrentista");

    // step 1
    $cCorrentista = $_SESSION["cCorrentista"];

    //step 2
    $con = _connection();
    //step 3
    $sql = "SELECT filiali.nome,filiali.cFiliale FROM conti,filiali WHERE conti.cFiliale = filiali.cFiliale and conti.cCorrentista = $cCorrentista";
    $rs = _execute($con,$sql);
    // step 4
    if($rs)
    {
        echo(json_encode($rs)); // serializza $rs
    }
    else
    {
        http_response_code(500);
        $con->close();
        die("Errore nell'esecuzione della query");
    }
    // step 5
    $con->close();

?>