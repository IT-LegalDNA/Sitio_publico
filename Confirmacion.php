<?php
include('./_globals_includes.php');
$register = false;

?>
<!DOCTYPE html>
<html lang="es" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Article">
<head>
<?php
	include('./modules/head.php');
?>
<title>Legal DNA - Confirmación</title>
  </head>

<body class="rgstr">
    <?php
      include('./modules/header.php');
    ?>
    <div class="container" >
      <div class="mdBnr confirmacion">
        <div class="lmts">  
            <div class="caption">  
                <h1>¡Revisa tu bandeja de entrada!</h1>
                <p class="intro">Hemos enviado al correo que acabas de registrar un enlace para confirmar tu registro. Por favor sigue las instrucciones del correo para activar tu cuenta.</p>
                <a class="btn" href="https://app.legaldna.com.mx/">INICAR SESIÓN</a>
                
            </div>
        </div>
      </div>
      


      <?php
      include('./modules/foot.php');
      ?>

    </div> 
</body>
<script type="text/javascript" src="./js/jq/jquery.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/jq/r.ui.xd.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/ux.selector.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/ux.main.js<? echo  $ver;?>"></script>
</html>