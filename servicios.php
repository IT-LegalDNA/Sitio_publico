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
<title>Legal DNA - Servicios</title>
  </head>
  <body>
    <?php
      include('./modules/header.php');
    ?>
    <div class="container" >
      <div class="mdBnr srvcs">
        <div class="lmts">
          <div class="flex-container">
            <div class="caption-hero">
              <h1>Soluciones LegalTech para tu Empresa o Negocio</h1>
              <p class="intro">Brinda Agilidad y mayor certeza Jur&iacute;dica a tu Empresa</p>
              <a class="btn" href="registro.php">CREAR CUENTA</a>
            </div>
            <div class="caption-anima flex-item">
              <video width="100%" height="100%" autoplay="" loop="">
                <source src="./media/gente.mp4"  type="video/mp4" codecs="avc1.42E01E, mp4a.40.2">
                <source src="./media/gente.ogg"  type="video/ogg">
                <source src="./media/gente.webm"  type="video/webm">
              </video>
            </div>
          </div>
        </div>
      </div>
      <div class="mdSlg">
        <div class="lmts"> 
          <h2>¡Los servicios legales nunca fueron tan accesibles!</h2>
        </div>
      </div>

      <div class="mdBnr srvcs">
        <div class="lmts">
          <div class="flex-container">
            <div class="caption-piramide">
              <div class="mdDts bdUp ltl ajuste">
                <div class="lmts"> 
                  <div class="nfrmtv lft texto-piramide">
                    <h4>¿C&Oacute;MO PODEMOS AYUDARTE?</h4>
                    <h5>Soluciones a tu medida disponible en todo momento</h5>
                    <p>Con nuestra plataforma obtendrás:
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="caption-piramide flex-item">
              <video width="100%" height="100%" autoplay="" loop="">
                <source src="./media/piramide.mp4"  type="video/mp4">
                <source src="./media/piramide.ogg"  type="video/ogg">
                <source src="./media/piramide.webm"  type="video/webm">
              </video>
            </div>
          </div>
        </div>
      </div>

      <!-- Seccion anterior

      <div class="mdDts">
        <div class="lmts"> 
          <div class="thumb" >
            <img src="./imgs/thumb_documental_network.svg" alt="Red documental"/>
          </div>
          <div class="nfrmtv smH">
            <h4>¿C&Oacute;MO PODEMOS AYUDAR A TU EMPRESA?</h4>
            <h5>Su red documental accesible en todo momento</h5>
            <p>Acercamos con ayuda de la tecnología, una solución que suma varias funcionalidades para personas y empresas que en su vida cotidiana pueden necesitar algún tipo de documento legal.
            <br/><br/>
            También ofrecemos en paralelo asesorías legales a través de abogados certificados que pueden apoyarlo simplificando términos y procesos. ¡El tema legal nunca había sido tan fácil de entender!
            </p>
            <button class="btn">CONOCER M&Aacute;S</button>
          </div>
        </div>
      </div>

    -->

      <div class="mdDts">
        <div class="lmts"> 
          <div class="thumb" >
            <img src="./imgs/planes_blue.svg" alt=""/>
            <img src="./imgs/planes_white.svg" alt=""/>
          </div>
          <div class="nfrmtv smH">
            <h5>Paga únicamente por lo que necesitas</h5>
            <p class="opcion_pago">1. Elige una Suscripción<br>
              2. Elige un paquete que se adecue a tus necesidades</p>
            <button class="btn">CONOCER M&Aacute;S</button>
            <img class="banner_fin" src="./imgs/banner_buen_fin_2021.svg" alt="">
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
