<?php
 $register = false;
include('./_globals_includes.php');

?>
<!DOCTYPE html>
<html lang="es" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Article">
<head>
<?php
	include('./modules/head.php');
?>
<title>Legal DNA - Home</title>
  </head>
  <body>
      
    <?php
      include('./modules/header.php');
    ?>
    <div class="container" >

      <!-- Banner normal

      <div class="mdBnr home sf2021">
        <div class="lmts">
          <div class="flex-container">
              <div class="caption-hero">
                <h1>Soluciones LegalTech a tu medida </h1>
                <p class="intro">Somos una Startup Legaltech Mexicana,  brindamos una soluci&oacute;n tecnol&oacute;gica a tus necesidades legales</p>
                <a class="btn" href="registro.php">CREAR CUENTA</a>
              </div>
            <div class="caption-piramide flex-item">
              <video width="100%" height="100%" autoplay="" loop="">
                <source src="./media/Comp_1.mp4"  type="video/mp4">
              </video>
            </div>
          </div>    
        </div>
      </div>

      -->

      <!-- Banner Buen Fin -->

      <div class="mdBnr home bf2021">
        <div class="lmts">  
          <div class="caption">
            <h1>Soluciones LegalTech a tu medida</h1>
            <p class="intro">Somos una Startup Legaltech Mexicana, brindamos una soluci&oacute;n tecnol&oacute;gica a tus necesidades legales</p>
            <a class="btn" href="registro.php">CREAR CUENTA</a>
          </div>
        </div>
      </div>


      <div class="mdSlg">
        <div class="lmts aCenter">  
          <h2 class="dntBrdr">Se parte de la Transformación Digital en el Sector Legal</h2>
          <button class="btn">CREAR</button>
        </div>
      </div>

      <div class="mdDts bdDwn">
        <div class="lmts"> 
          <div class="thumb">
            <video width="75%" height="75%" controls>
                <source src="./media/versus.mp4"  type="video/mp4">
                <source src="./media/versus.webm"  type="video/webm">
                <source src="./media/versus.ogg"  type="video/ogg">
              </video>
          </div>
          <div class="nfrmtv">
            <h5>¿Qu&eacute; es LegalTech?</h5>
            <p>El uso de la tecnolog&iacute;a aplicada a la prestaci&oacute;n de servicios legales que pueden ser estandarizables con la finalidad de aumentar la rentabilidad, reduciendo tiempos y costos.
            </p>
            <h4>¿Cómo migrar a un entorno digital ?</h4>
            <p>Nuestra Plataforma ofrece un Sistema de Firma Electr&oacute;nica Avanzada con la cual obtendr&aacute;s mayor agilidad y  eficacia probatoria ya que las partes podrán firmar desde cualquier lugar en el que se encuentren y tendr&aacute;n los mismos efectos legales con mayor certeza jur&iacute;dica sobre dichos documentos.
            </p>
            <button class="btn">CONOCER M&Aacute;S</button>
          </div>
        </div>
      </div>

      <div class="mdSlg">
        <div class="lmts"> 
          <h2>Digitaliza todos tus documentos legales<br/>Selecciona, configura y descarga</h2>
          <p>Contamos con documentos para cubrir con tus necesidades.<br>
            Puedes consultar nuestro cat&aacute;logo y crear los documentos que requieran tales como, Contratos, Convenios, Pagar&eacute;s y mas 
          </p>
          <div class="aCenter">
            <a class="btn jstTxt" href="./documentos.php">Conocer catálogo completo</a>
          </div>
        </div>
      </div>

      <div class="mdSlg">
        <div class="lmts"> 
          <h2>Nuestros clientes opinan</h2>
        </div>
      </div>

      <div class="mdPsts">
        <div class="lmts">
          <ul>
            <li class="pstItm">
              <div class="crdPst">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div class="prfl">
                  Alonso Raya
                  <label>CEO, Company</label>
                </div>
              </div>
            </li>
            <li class="pstItm">
              <div class="crdPst">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div class="prfl">
                  Alonso Raya
                  <label>CEO, Company</label>
                </div>
              </div>
            </li>
          </ul>
          <div class="sldCtrl">
            <button class="btn rwrd">&nbsp;</button>
            <button class="btn fwrd">&nbsp;</button>
          </div>
        </div>
      </div>

      <?php
      include('./modules/foot.php');
      ?>

    </div> <!--End to container-->

    
<script type="text/javascript" src="./js/jq/jquery.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/jq/h.ui.xd.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/ux.selector.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/ux.main.js<? echo  $ver;?>"></script>

  </body>
</html>
