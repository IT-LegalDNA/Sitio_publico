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

      <div class="mdBnr home sf2021">
        <div class="lmts">
          <div class="flex-container">
              <div class="caption-hero">
                <h1>Soluciones LegalTech a tu medida </h1>
                <p class="intro">Somos una Startup Legaltech Mexicana, brindamos una soluci&oacute;n tecnol&oacute;gica a tus necesidades legales</p>
                <a class="btn" href="registro.php">CREAR CUENTA</a>
                <img class="banner_fin" src="./imgs/banner_buen_fin_2021.svg" alt="">
              </div>
            <div class="caption-piramide flex-item">
              <video autoplay width="90%" height="90%" playsinline="" controlslist="nodownload" muted loop preload="auto">
                <source src="./media/Comp_1.mp4"  type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
              </video>
              
            </div>
          </div>    
        </div>
      </div>

      <!-- Banner Buen Fin 

      <div class="mdBnr home bf2021">
        <div class="lmts">  
          <div class="caption">
            <h1>Soluciones LegalTech a tu medida</h1>
            <p class="intro">Somos una Startup Legaltech Mexicana, brindamos una soluci&oacute;n tecnol&oacute;gica a tus necesidades legales</p>
            <a class="btn" href="registro.php">CREAR CUENTA</a>
          </div>
        </div>
      </div>
  		-->


      <div class="mdSlg">
        <div class="lmts aCenter">  
          <h2 class="dntBrdr">Se parte de la Transformaci&oacute;n Digital en el Sector Legal</h2>
          <button class="btn">CREAR</button>
        </div>
      </div>

      <div class="mdDts bdDwn">
        <div class="lmts"> 
          <div class="thumb">
            <video class="versus" width="75%" height="75%" controls>
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
            <p>Nuestra Plataforma ofrece un Sistema de Firma Electr&oacute;nica Avanzada con la cual obtendr&aacute;s mayor agilidad y eficacia probatoria ya que las partes podr&aacute;n firmar desde cualquier lugar en el que se encuentren y tendr&aacute;n los mismos efectos legales con mayor certeza jur&iacute;dica sobre dichos documentos.
            </p>
            <button class="btn">CONOCER M&Aacute;S</button>
          </div>
        </div>
      </div>

      <div class="mdSlg">
        <div class="lmts"> 
          <h2>Digitaliza todos tus documentos legales<br/>Selecciona, configura y descarga</h2>
          <p>Contamos con documentos para cubrir con tus necesidades.<br>
            Puedes consultar nuestro cat&aacute;logo y crear los documentos que requieran tales como, Contratos, Convenios, Pagar&eacute;s y m&aacute;s 
          </p>
          <div class="aCenter">
            <a class="btn jstTxt" href="./documentos.php">Conocer cat&aacute;logo completo</a>
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
                <p><span>Legal DNA</span>, es una herramienta muy &uacute;til, sin duda ayud&oacute; a mejorar nuestros procesos ya que para nosotros es importante mantener la seguridad de la informaci&oacute;n.</p>
                <div class="prfl espacio">
                  <p class="directivo">3er espacio</p>
                  <!-- <label>CEO, Company</label> -->
                </div>
              </div>
            </li>
            <li class="pstItm">
              <div class="crdPst">
                <p><span>Legal DNA</span> es una soluci&oacute;n, pr&aacute;ctica, innovadora y funcional que ayuda simplificar tu vida legal tomando como base las necesidades legales de hoy en d&iacute;a y cumpliendo con la normatividad actual; Optimiza tus recursos y te da accesibilidad en cualquier parte del mundo! Herramientas como estas no solo son un plus sino una necesidad a las actuales demandas del mercado y diferentes autoridades.</p>
                <div class="prfl nc">
                  <p class="directivo">C&N Consulting</p>
                  <!-- <label>CEO, Company</label> -->
                </div>
              </div>
            </li>
          </ul>
          <!--
          <div class="sldCtrl">
            <button class="btn rwrd">&nbsp;</button>
            <button class="btn fwrd">&nbsp;</button>
          </div>
        -->
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
