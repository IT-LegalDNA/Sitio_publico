<?php
include('./_globals_includes.php');
include_once './._encript.globals/procedures/activacion.php';
$register = false;
if(!isset($_REQUEST['alpha'])){
    header('Location: ./index.php');
}else{
    $activacion = new Activacion();
    $token = $activacion->activaUser($_REQUEST['alpha']);
}

?>
<!DOCTYPE html>
<html lang="es" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Article">
<head>
<?php
	include('./modules/head.php');
?>
<title>Legal DNA - Activación</title>
  </head>

<body class="rgstr">
    <?php
      include('./modules/header.php');
    ?>
    <div class="container" >
      <div class="mdBnr <?= $token?'activacion':'reactivacion'?>">
        <div class="lmts">  
        <? if($token):?>
            <div class="caption">  
                <h1>¡Activación exitosa!</h1>
                <p class="intro">La activación de tu cuenta ha sido exitosa, ya puedes iniciar sesión y comenzar a gestsionar y firmar tus documentos.</p>
                <a class="btn" href="https://app.legaldna.com.mx/">INICAR SESIÓN</a>
            </div>
        <? else: ?>
            <div class="caption exp">
                <h1>El Token ha caducado</h1>
                <p class="intro">El tiempo para activar tu cuenta ha concluido.<br/> Por tu seguridad hemos enviado un nuevo correo. Revisa tu bandeja de entrada o si fuera necesario en la carpeta de spam.</p>
                
            </div>
        <? endif ?>
          
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