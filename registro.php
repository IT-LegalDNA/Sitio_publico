<?php
include('./_globals_includes.php');
 $register = true;
?>
<!DOCTYPE html>
<html lang="es" prefix="og: http://ogp.me/ns#" itemscope itemtype="http://schema.org/Article">
<head>
<?php
	include('./modules/head.php');
?>
<title>Legal DNA - Registro</title>
  </head>

<body class="rgstr">
    <?php
      include('./modules/header.php');
    ?>
    <form class="nwscc" autocomplete="off" >
    <div class="container">
        <div class="ntr">
            <div class="lmts">
                <h1>Crear cuenta<span>Crea tu cuenta  deberás llenar completar el registro correspondiente así como el perfil complementario. De manera adicional, debes aceptar nuestra Política de privacidad así como los Términos y condiciones de uso.</span></h1>
            </div>
        </div>
       
            
            <ul>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"3"}'>
                        <label class="lbl">Nombre(s)</label>
                        <input type="text" name="name" class="fld name cptlz" maxlength="35" data-frmt='{"f":"txt"}' autocomplete="off" autocapitalize="off" tabindex="1"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"3"}'>
                        <label class="lbl">Apellido paterno</label>
                        <input type="text" name="app" class="fld app cptlz" maxlength="35" data-frmt='{"f":"txt"}' autocomplete="off" autocapitalize="on" tabindex="2"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"3"}'>
                        <label class="lbl">Apellido materno</label>
                        <input type="text" name="apm" class="fld apm cptlz" maxlength="35" data-frmt='{"f":"txt"}' autocomplete="off" autocapitalize="on" tabindex="3"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"12"}'>
                        <label class="lbl">Correo electrónico</label>
                        <input type="email" name="emls" class="fld eml" maxlength="75" data-frmt='{"f":"eml"}' autocomplete="off" autocapitalize="off" tabindex="4"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"12"}'>
                        <label class="lbl">Teléfono</label>
                        <input type="phone" name="phone" class="fld phone" maxlength="75" data-frmt='{"f":"nmb","e":"phone"}' autocomplete="off" autocapitalize="off" tabindex="5"/>
                    </div>
                </li>
                
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"10"}'>
                        <label class="lbl">Fecha de nacimiento <span>dd-mm-aaaa</span></label>
                        <input type="text" name="brt" class="fld brt" maxlength="10" data-frmt='{"f":"nmb","e":"dt"}' autocomplete="off" autocapitalize="off" tabindex="6"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"6"}'>
                        <label class="lbl">Contraseña</label>
                        <input type="password" name="pss" class="fld pss" maxlength="20" data-frmt='{"f":"pss"}' autocomplete="off" autocapitalize="off" tabindex="7"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"fld","m":"6","cnfrm":".pss"}'>
                        <label class="lbl">Confirma contraseña</label>
                        <input type="password" name="cps" class="fld cps" maxlength="20" data-frmt='{"f":"pss"}' autocomplete="off" autocapitalize="off" tabindex="8"/>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"rds"}'>
                    <label class="lbl tp">Tipo sociedad</label>
                        <div class="w40">
                            <input type="radio" value="fisica" name="typs" data-frm='{"lbl":"Física","tab":"9"}'>
                        </div>
                        <div class="w40">
                            <input type="radio" value="moral" name="typs" data-frm='{"lbl":"Moral","tab":"10"}'>
                        </div>
                    </div>
                </li>
                <li class="w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"rds"}'>
                        <label class="lbl tp">Género</label>
                        <div class="w40">
                            <input type="radio" value="0" name="gender" data-frm='{"lbl":"Masculino","tab":"11"}'>
                        </div>
                        <div class="w40">
                            <input type="radio" value="1" name="gender" data-frm='{"lbl":"Femenino","tab":"12"}'>
                        </div>
                    </div>
                </li>
                <li class="lgls w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"chk"}'>
                        <input type="checkbox" value="1" name="tyc" data-frm='{"lbl":"Acepto Términos y condiciones","tab":"13","s":"Consultar","mdl":"conditions"}' checked>
                    </div>
                </li>
                <li class="lgls w33 to50_800  to100_650">
                    <div class="flds" data-frm='{"r":"0","t":"chk","f":"sg"}'>
                        <input type="checkbox" value="1" name="avp" data-frm='{"lbl":"Aviso de Privacidad","tab":"14","s":"Consultar","mdl":"privacy","cbs":"v"}'>
                    </div>
                </li>  
                
            </ul>
            <p class="advice">Al hacer click en “Crear cuenta” declaro que he leído y acepto los <span>Términos y condiciones</span> y el <span>Aviso de privacidad</span> para poder operar la plataforma</p>
            
        
 
    
        
    </div>
    <div class="btns aCenter crtr">
        <button class="btn" data-opt='{"t":"lgn","f":"rgr","tg":".nwscc"}' tabindex="15">CREAR CUENTA</button>
    </div>
    </form>
</body>
<script type="text/javascript" src="./js/jq/jquery.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/jq/r.ui.xd.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/ux.selector.js<? echo  $ver;?>"></script>
<script type="text/javascript" src="./js/ux.main.js<? echo  $ver;?>"></script>
</html>