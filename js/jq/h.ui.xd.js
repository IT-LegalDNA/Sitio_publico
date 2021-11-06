(function ($, undefined) {
	var o, x, S, e, m, fldObj, oVl, oNewValue, oCleanedValue, z, keyCode, keyPressedString, pMsk, creator, tm, sc, clss, SAT = 6, SUN = 0, LH = 17, LM = 30, LA = 8000, bnfcrs = [], clrcns = [], paths = [], pos = 0, mx = 0, i = {
		int: function (alphabet) {
			
			//window.paths = paths;
			var t = this;
			t.i = function () {
				if (mbl) {
					
				} else {
					
				}
				$B.on(o.a[0], o.e[0], function (e) {
					$T = $(this);
					if($T.is('a')){
						window.location = $T.attr('href')
					}
					e.preventDefault(); e.stopPropagation();
                    if(!$T.hasClass('dsbl')){
                        if ($T.closest('.dsbl').length < 1) {
                            !$T.hasClass(o.c[17]) ? (
                                //$T.nxt() ? ( 
                                $(o.e[3]).breakCl(o.c[18]),
                                o.o = $(this).data(),
                                t.act($(this))
                                //) : $B
                            ) : ($T);
                        }
                    }
					
				}).on(o.a[0], o.e[1], function (e) {
					$T = $(this);
					e.preventDefault();
					e.stopPropagation();
					if (!$T.hasClass(o.c[17]) && !$.isEmptyObject($T.data())) {
						o.o = $T.data();
						t.act($T);
					}
				});
                i.F();
                t.chk($(o.el[12]));
			},
			$B.extensible.prototype = {
				A: function (s) {
					!this.b ? (
						o.o.opt.hasOwnProperty('r') ?
							this.d = $(o.el[0], { 'class': this.s + ' ' + this.c }).appendTo($('.' + o.o.opt.r)) :
							this.d = $(o.el[0], { 'class': this.s + ' ' + this.c }).appendTo($(o.e[13]))
					) : (
							this.d = $(o.el[0], { 'class': this.s }).appendTo($(this.c))
						)
					return this.d;
				},
				TR: function (s, P) {
					P = s.closest('tr');
					P.redoCl('vw').after(o.el[5]).siblings().breakCl('vw');
					return s.closest('tr').next();
				}
			},
			t.act = function (O, U, oo) {
				$(o.el[7] + '.' + o.c[18] + ', .' + o.c[7]).remove();
				O.siblings('.' + o.c[18]).remove();
				L = function (St, el, F) {
					$B.delays();
					if(!o.o.opt.hasOwnProperty('mdl'))i.W(o.b.t, el);
                    creator = o.o.opt.c;
					U = ($B.valglobal(1))+o.o.opt.f+o.xt;
					paths.push(U);
					$.log(U);
					_jQ_object = $B.package(U, o.v, function () {
						
						$(o.el[8]).scrollTop(0);
						setTimeout(function(){
							if (window.o) {
								o.L = new $B.extensible(o.c[7], o.b.t, O.closest(o.el[12]));
								o.L.A().redoCl($('.lgrcvr').length == 0 ? '':'lsstp').html(window.w.msg	);
								O.breakCl('sndng');
							}else{
								O.breakCl('sndng').addClass('rdy');
								if(window.ch){
									window.location = window.ch;
								}else{
									var exist = ['rules','privacy','conditions'];
									if( $.inArray(o.o.opt.f, exist) !== -1 ){
										$B.css({overflow:'hidden'})
										$('.ctnsr').redoCl('wt')
										o.L = new $B.extensible(o.c[8], o.b.t,$B);
										o.L.A().html(window.w);
									}
									if(o.o.opt.f=='rcvr'){
										$(o.o.opt.ba).remove();
										o.L = new $B.extensible('lgrcvr', o.b.t, $('.sssn'));
										o.L.A().html(window.w);
										$(o.o.opt.ab).redoCl(o.c[0]);
										setTimeout(function(){
											$(o.o.opt.ba).redoCl(o.c[0]);
											$(o.o.opt.ab).fadeOut();
										}, 150)
										
									}
								}
	
							}
							i.F(); 
							i.W(o.b.f);
						},500)
						
                    });
				}

				switch (o.o.opt.t) {
					case 'sct':
                        L();
						/*i.v(O) 
                        ? ( t.v(O), L() ) 
                        : O*/
                    break;
                    
					case 'clsr':
						$(o.o.opt.tg).breakCl(o.c[0])
						$('.mdHdr.mbl').css({'z-index':''})
					break;
					case 'rtrnSl':
						$(o.o.opt.ba).breakCl(o.c[0]);
						$(o.o.opt.ab).show();
						setTimeout(function(){
							$(o.o.opt.ab).breakCl(o.c[0]);
							setTimeout(function(){
								$(o.o.opt.ba).remove();
							}, 500)
						}, 50)
					break;
					case 'mblMn':
						if(O.hasClass('is-open')){
							$('.nvg').breakCl('mbl').appendTo('.mdHdr')
							O.breakCl('is-open').redoCl('is-closed');
							$('.container,.mdHdr').css({ height:'',background:''})
							$('.container,.mdHdr').breakCl('mbl')
							$B.breakCl('open')
						}else{
							$('.container,.mdHdr').css({height:'100%'})
							O.breakCl('is-closed').redoCl('is-open');
							$B.addClass('open');
							setTimeout(function(){
								$('.nvg').redoCl('mbl').appendTo($B)
								$('.container, 	.mdHdr').addClass('mbl')
							}, 250)
							


						}
					break;
				}
			},
			
			t.v = function (bool, obj, typ) {
				var n = '', opts = {}, myJSON = {}, opt = bool.data('opt');
				obj = bool.closest('form').find(o.e[2]);
				obj.each(function (c) {
                    var _T = $(this);typ = _T.data();
                    if(_T.is(o.st[0])) {
                        switch (typ.frm.t) {
                            case 'ddw':
                                n = typ.frm.nm;
                                myJSON[n] = i.e(typ.frm.v);
                                typ.frm.tyc != undefined ? (
                                    n = 'tyc' + typ.frm.nm,
                                    myJSON[n] = i.e(typ.frm.tyc)
                                ) : $B;
                                break;
                            case 'fld':
                                _T.find(o.e[3]).each(function () {
									n = $(this).attr('name');
									if($(this).hasClass('pss') || $(this).hasClass('cps')){
										myJSON[n] = $.en( $(this).ksy() )
									}else
                                    myJSON[n] = $(this).ksy();
                                });
                                break;
                            case 'rds':
                                var $e = _T.find(o.e[4] + o.st[2]);
                                n = $e.attr('name');
                                myJSON[n] = i.e($e.val());
                                break;
                            case 'chk':
                                var $e = _T.find(o.e[5]+ o.st[2]),
                                    n = $e.attr('name'),
                                    v = [];
                                if($e.is(o.st[0])){
                                    $e.each(function () { v.push($(this).val()); });
                                    myJSON[n] = v.join(',');
                                }
                                break;
                        }
                    }
					
				});

				o.v = myJSON;
				$.log(o.v);
            },
            t.chk = function (e) {
				var input = e, c = [],
					$r = e.find(o.e[4] + ',' + o.e[5]),
					$_jQ_object;

				$r.each(function () {
					$T = $(this);
					if ($T.hasClass(o.c[0])) return;
					var $bt = $T.next(), $_jQ_object = $T.data();
					if (!$bt.hasClass(o.c[4]) && !$bt.hasClass(o.c[5])) {
						$T.after(o.chkr);
						$bt = $T.next();
					}

					if ($T.attr(o.c[3])) $bt.redoCl(o.c[3]);
					if ($T.is(o.st[2])) $bt.redoCl(o.c[0]);
					if ($_jQ_object.frm.hasOwnProperty('c')) $bt.redoCl($_jQ_object.frm.c);
					
					if ($_jQ_object.frm.hasOwnProperty('cbs')) $bt.data('cbs', $_jQ_object.frm.cbs);
					$T.is(o.e[4]) ? (
						$bt.redoCl(o.c[4]).html($_jQ_object.frm.lbl)
					) : (
						$bt.redoCl(o.c[5]).html($_jQ_object.frm.lbl)
                    )
					if ($_jQ_object.frm.hasOwnProperty('s')) {
						$bt.after('<a class="lSw lnk" data-opt=\'{"t":"sct","c":"lgn","f":"","mdl":"1"}\'>' + $_jQ_object.frm.s + '</a>')
						$bt.next().data('opt').f=$_jQ_object.frm.mdl
					}
					$bt.attr('tabindex', $_jQ_object.frm.tab);
					$T.redoCl(o.c[11]);
				});
				var sel = function (op, cbs) {
					if (op.hasClass(o.c[2])) return o.b.f;
					op.prev().is(o.e[4]) ? (
						op.redoCl(o.c[0]).prev().prop('checked', o.b.t).closest(o.e[2]).find('.' + o.c[0]).not(op).breakCl(o.c[0]).prev().removeAttr('checked'),
						typeof cbs === 'function' ? (cbs.call()) : ($_jQ_object)
					) : (
							!op.hasClass(o.c[0]) ? (
								op.redoCl(o.c[0]).prev().prop('checked', o.b.t)
							) : (
								op.breakCl(o.c[0]).prev().removeAttr('checked')
								),
							typeof cbs === 'function' ? (cbs.call()) : ($_jQ_object)

						)
				}
				if ($r.length > 0)
					input.find('.' + o.c[4] + ',.' + o.c[5]).unbind(o.a[0]).bind(o.a[0], function (e) {
						e.preventDefault();
						var els = $(this), npt = els.prev();
						sel(els, function () {
							els.removeClass(o.c[18]).closest(o.e[2]).find(o.e[5]).next().removeClass(o.c[18]);
							els.siblings('button.sqr').removeClass(o.c[18]);
							if (els.data('cbs')) {
								switch(els.data('cbs')){
                                    case 'v':
                                        els.hasClass(o.c[0]) ? (
                                            i.v(false,els) ? ($(o.e[0]).redoCl(o.c[0])) : (
												els.breakCl(o.c[0]).prev().removeAttr('checked'),
												$(o.e[0]).breakCl(o.c[0])
											)
                                        ): $(o.e[0]).breakCl(o.c[0])
                                        break;
                                }
							}
						});
					});

			}
			t.i();
		},
		W: function (bool, obj) {
			var t = $('<h3>Espera un momento, estamos procesando tu informaci&oacute;n</h3>');
			return false;
			if (bool) {
				obj == null || obj == undefined ? (
					o.L = new $B.extensible(o.c[9], o.b.t, $B),
					o.L.A().append(t)
				) : $('<div/>', { 'class': 'owt' }).html('<h3>Espera un momento, estamos procesando tu informaci&oacute;n</h3>').appendTo(obj)
				
				$D.bind('keypress keydown keyup', function (e) {
					var code = (e.keyCode ? e.keyCode : e.which);
					if (code == 116) {
						e.preventDefault();
						return o.b.f;
					}
				});

			} else {
				$('.' + o.c[9] + ',.owt').fadeOut().remove();
				$D.unbind('keypress keydown keyup');
			}
		},
		F: function (context, ch) {
			/*$(o.e[3]).bind(
				'contextmenu dragenter dragover dragleave dragexit drop dragdrop'
				, function(event){ event.preventDefault && event.preventDefault (); }
			);*/
			$(o.e[3]).off('keypress keydown keyup change input paste focusout').on('keypress keydown keyup change input paste', function (e) {
				context = $(this);
				k = (document.all) ? e.keyCode : e.which;
				var valor = context.val(), newFrmt;
				valor = valor.replace(/`/g, '').replace(/´/g, '').replace(/Â´/g, '').replace(/%+/g, '');
				context.ksy(valor);
				switch (context.data('frmt').f) {
					case 'txt':
						if (k == 0 || k == 8 || k == 9 || k == 32 || k == 39 || (k > 64 && k < 91) || (k > 95 && k < 123) || k == 164 || k == 165 || k == 186 || k == 209 || k == 241) return o.b.t;
						ch = o.t[4];
						break;
					case 'nmb':
						if (k != 8 && k != 0) {
                            var mm;
                            context.data('frmt').e === 'dt' && valor.length == 2 ? context.val(valor + '/') : (
                                context.data('frmt').e === 'dt' && valor.length == 5 ? context.val(valor + '/') :context
                            )
						} else {
							context.breakCl(o.c[1]).next().remove();
                        }
                        if(context.data('frmt').e === 'dt'){
                            var yy = new Date().getFullYear(),anio = valor.split('/')[2];
                            valor.split('/')[0] > 31 || valor.split('/')[1] > 12 ? i.v(true, context, 12):context;

                            if((anio+String.fromCharCode(k)) <= (yy-95)){
                                if((anio+String.fromCharCode(k)).length > 4)i.v(true, context, 12)
                            }
                            if( anio > (yy-18) )i.v(true, context, 12)
                            if(anio!= undefined){
                                console.log(anio)
                                if(anio.length == 4){
                                    var bol = (((valor.split('/')[2] % 4 == 0) && (valor.split('/')[2] % 100 != 0)) || (valor.split('/')[2] % 400 == 0))
                                    if(!bol && valor.split('/')[0] == 29 && valor.split('/')[1] == 02 ){
                                        i.v(true, context, 12)
                                    }
                                }
                            }
                            
                        }
						if(e.shiftKey)return false;
						if (k == 0 || k == 8 || k == 9 || k == 32 || k == 37 || k == 39 || k == 44 || k == 46 || k == 110 || (k > 47 && k < 58) || (k > 95 && k < 123) || (context.data('frmt').e === 'mny' && k === 190)) return o.b.t;
						ch = o.t[3];
						break;
					case 'eml':
						if (k >= 0) return o.b.t;
						ch = o.t[1];
						break;
					case 'alpha':
						if (k == 0 || k == 8 || k == 9 || k == 32 || k == 37 || k == 39 || k == 44 || k == 46 || (k > 47 && k < 58) || (k > 64 && k < 91) || (k > 95 && k < 123) || k == 164 || k == 165 || k == 186 || k == 209 || k == 241) return o.b.t;
						ch = o.t[10];
						break;
					default:
                        console.log();  
                        if(context.hasClass('usr') && context.closest(o.el[12]).hasClass(o.c[6])){
                            if($('.lgnb .pss').ksy()!='' && context.ksy().length >= 5){$(o.e[0]).redoCl(o.c[0]);}
                            else $(o.e[0]).breakCl(o.c[0]);
                        }
                        if(context.hasClass('pss') && context.closest(o.el[12]).hasClass(o.c[6]) ){
                            if($('.lgnb .usr').ksy()!='' && context.ksy().length >= 5){$(o.e[0]).redoCl(o.c[0]);}
                            else $(o.e[0]).breakCl(o.c[0]);
                        }
						return;
				}
				var n = String.fromCharCode(k);
				return ch.test(n);
			}).focusin(function () {
                context = $(this);
                context.breakCl(o.c[1]).prev().redoCl('tp');
				context.next().remove();
				$('.'+o.c[2]+'.async').remove();
				$('.'+o.c[7]).remove()
                
			}).focusout(function () {
				context = $(this);
				context.ksy() == '' ? context.prev().breakCl('tp') : ( context.hasClass('eml') ? i.v(true, context, 11) : context )
			});
			
		},
		v: function (fld,obj, flds) {
			var btn = obj,
				eCount = 0,
				bool = o.b.t,
				cError = 0,
				fError = 0,
				_fs,
                _$f,
                formater;
				
			
			if (flds instanceof jQuery && flds.length > 0) {
				obj = flds;
            }
            if(fld){
                _$f = obj;
                formater = o.t[1].test(obj.ksy());
                if (!formater) {
                    cError++;
                    obj.redoCl(o.c[1]);
                    mmErr=o.t[flds];
                    if(obj.next().length == 0)
                        $(o.el[6], { 'class': o.c[2] }).html(mmErr).appendTo(obj.parent());
                }
            }else{
                obj = btn.closest('form').find(o.e[2]+o.st[0]);
				if(btn.closest('form').length == 0){
					obj = $('form'+btn.data('opt').tg).find(o.e[2]+o.st[0]);
				}
                $('.'+o.c[2]).not($('.async')).remove()
                $(o.e[3]).breakCl(o.c[1])
                obj.each(function (tm) {
                    $T = $(this);
                    fError = 0;
    
                    var typ = $T.data(),
                        _ty = {},
                        mmnt, mmErr;
    
                    if (typ.frm.hasOwnProperty('r')) {
                        switch (typ.frm.t) {
                            case 'fld':
                                var vlen;
                                _$fs = $T.find(o.e[3]).not('.ncptr');
                                _$fs.each(function () {
                                    _$f = $(this);
                                    _ty = _$f.data('frmt');
                                    if (_$f.ksy() == '') {
                                        cError++;
										mmErr = o.t[5];
										$(o.el[6], { 'class': o.c[2] }).html(mmErr).appendTo($T);
                                    } else {
                                        _$f.ksy().length < typ.frm.m ? (
                                            cError++,
											mmErr = o.t[7],
											$(o.el[6], { 'class': o.c[2] }).html(mmErr).appendTo($T)
                                        ) : (
                                            typ.frm.hasOwnProperty('cnfrm') && _$f.ksy() != _$f.closest('form').find(typ.frm.cnfrm).ksy() ? (
                                                cError++,
												mmErr = 'Las contraseñas no coinciden',
												$(o.el[6], { 'class': o.c[2] }).html(mmErr).appendTo($T)
                                            ):(typ.frm)

                                        )
									}

									

								});
								
                            break;
                        }
                        
                    } else {
                        
                        switch (typ.frm.t) {
                            case 'fld':
                                _$f = $T.find(o.e[3]);
                                if (_$f.data('frmt') && (_$f.data('frmt').f == 'eml' && _$f.ksy() != '')) {
                                    formater = o.t[1].test(_$f.ksy());
                                    //$.log(formater)
                                    if (!formater) {
                                        cError++;
                                        _$f.redoCl(o.c[18]);
                                        $(o.el[6], { 'class': o.c[18] }).html(o.t[11]).appendTo($T)
                                    }
                                }
                                break;
                        }
                    }
                });

                
            }
            
            
			cError > 0 ? (bool = o.b.f,_$f.redoCl(o.c[1])) : bool = o.b.t;
			if($('.'+o.c[2]).length>0){	bool = o.b.f;cError+=$('.'+o.c[2]).length}
			
            return bool;
		}

	},
	op = {
		a: [
			'click',      //0
			'mouseenter', //1
			'mouseleave', //2
			'focusin',    //3
			'focusout',   //4
			'mousedown',  //5
			'touchstart', //6
			'keyup',      //7
			'touchend',   //8
			'touch',      //9
			'focus',      //10
			'mousemove',  //11
			'scroll',     //12
			'mousewheel'  //13
		],
		e: [
			'.btn',				//0
			'.lnk',				//1
			'.flds',			//2
            '.fld',			//3
            'input:radio',		//4
			'input:checkbox'	//5
		],
		c: [
            'ctv',
            'flr',
            'msgErr',
            'disabled', //3
            'ratios',	//4
            'checks',//5
			'sssn',//6
			'frmErr',	//7
			'frmrmdl', //8
			'loading'//9
		],
		b: { f: false, t: true },
		v: {},
		o: {},
		L: '',
		el: [
			'<div/>', 	//0
			'initialize.owl.carousel initialized.owl.carousel resize.owl.carousel resized.owl.carousel refresh.owl.carousel refreshed.owl.carousel',//1
			'ul',		//2
			'<button/>',//3
			'select',	//4
			'<tr/>',	//5
			'<span/>',	//6
			'span',		//7
			'div',		//8
			'li',		//9
			'<label/>',	//10
            'radio',    //11
            'form'      //12
		],
		st: [
			':visible', //0
			':hidden',  //1
            ':checked', //2
            'visible',  //3  
            'checked',  //4
			'hidden'    //5
		],
		pth: './',
		xt: '.php',
		chkr: '<button></button>',
		bPK: [9, 37, 38, 39, 40],
		sCh: { ':': 191, '-': 189, '.': 190, '(': 57, ')': 48, '/': 191, ',': 188, '_': 189, ' ': 32, '+': 187 },
		t: [
			/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/, // Teléfono 
			/^([a-zA-Z0-9_.+-]{2,})+\@(([a-zA-Z0-9-]{2,})+\.)+([a-zA-Z0-9]{2,4})+$/, // Email
			/^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/, // Fechas
			/^[0-9]+$/, // Numeros
			/^[a-zA-Z]+$/, // Texto
			'El campo esta vac&iacute;o', // Campo vacío
			'Selecciona una de las opciones', //selects
			'Captura inv&aacute;lida', // Campo inválido combinado con o.o.t
			'El campo es requerido',
			'Las contrase&ntilde;as no coinciden',
			/^[a-zA-Z0-9]+$/,
            '\x46\x6F\x72\x6D\x61\x74\x6F\x20\x64\x65\x20\x63\x6F\x72\x72\x65\x6F\x20\x69\x6E\x63\x6F\x72\x72\x65\x63\x74\x6F', // Formato de correo incorrecto
            'Fecha incorrecta'
			
			
		]
	};

	$.extend({
		en: function (string) {

			function RotateLeft(lValue, iShiftBits) {
					return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
			}

			function AddUnsigned(lX,lY) {
					var lX4,lY4,lX8,lY8,lResult;
					lX8 = (lX & 0x80000000);
					lY8 = (lY & 0x80000000);
					lX4 = (lX & 0x40000000);
					lY4 = (lY & 0x40000000);
					lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
					if (lX4 & lY4) {
							return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
					}
					if (lX4 | lY4) {
							if (lResult & 0x40000000) {
									return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
							} else {
									return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
							}
					} else {
							return (lResult ^ lX8 ^ lY8);
					}
			}

			function F(x,y,z) { return (x & y) | ((~x) & z); }
			function G(x,y,z) { return (x & z) | (y & (~z)); }
			function H(x,y,z) { return (x ^ y ^ z); }
			function I(x,y,z) { return (y ^ (x | (~z))); }

			function FF(a,b,c,d,x,s,ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
			};

			function GG(a,b,c,d,x,s,ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
			};

			function HH(a,b,c,d,x,s,ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
			};

			function II(a,b,c,d,x,s,ac) {
					a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
					return AddUnsigned(RotateLeft(a, s), b);
			};

			function ConvertToWordArray(string) {
					var lWordCount;
					var lMessageLength = string.length;
					var lNumberOfWords_temp1=lMessageLength + 8;
					var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
					var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
					var lWordArray=Array(lNumberOfWords-1);
					var lBytePosition = 0;
					var lByteCount = 0;
					while ( lByteCount < lMessageLength ) {
							lWordCount = (lByteCount-(lByteCount % 4))/4;
							lBytePosition = (lByteCount % 4)*8;
							lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
							lByteCount++;
					}
					lWordCount = (lByteCount-(lByteCount % 4))/4;
					lBytePosition = (lByteCount % 4)*8;
					lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
					lWordArray[lNumberOfWords-2] = lMessageLength<<3;
					lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
					return lWordArray;
			};

			function WordToHex(lValue) {
					var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
					for (lCount = 0;lCount<=3;lCount++) {
							lByte = (lValue>>>(lCount*8)) & 255;
							WordToHexValue_temp = "0" + lByte.toString(16);
							WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
					}
					return WordToHexValue;
			};

			function Utf8Encode(string) {
					string = string.replace(/\r\n/g,"\n");
					var utftext = "";

					for (var n = 0; n < string.length; n++) {

							var c = string.charCodeAt(n);

							if (c < 128) {
									utftext += String.fromCharCode(c);
							}
							else if((c > 127) && (c < 2048)) {
									utftext += String.fromCharCode((c >> 6) | 192);
									utftext += String.fromCharCode((c & 63) | 128);
							}
							else {
									utftext += String.fromCharCode((c >> 12) | 224);
									utftext += String.fromCharCode(((c >> 6) & 63) | 128);
									utftext += String.fromCharCode((c & 63) | 128);
							}

					}

					return utftext;
			};

			var x=Array();
			var k,AA,BB,CC,DD,a,b,c,d;
			var S11=7, S12=12, S13=17, S14=22;
			var S21=5, S22=9 , S23=14, S24=20;
			var S31=4, S32=11, S33=16, S34=23;
			var S41=6, S42=10, S43=15, S44=21;

			string = Utf8Encode(string);

			x = ConvertToWordArray(string);

			a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

			for (k=0;k<x.length;k+=16) {
					AA=a; BB=b; CC=c; DD=d;
					a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
					d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
					c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
					b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
					a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
					d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
					c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
					b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
					a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
					d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
					c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
					b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
					a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
					d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
					c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
					b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
					a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
					d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
					c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
					b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
					a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
					d=GG(d,a,b,c,x[k+10],S22,0x2441453);
					c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
					b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
					a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
					d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
					c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
					b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
					a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
					d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
					c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
					b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
					a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
					d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
					c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
					b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
					a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
					d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
					c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
					b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
					a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
					d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
					c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
					b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
					a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
					d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
					c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
					b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
					a=II(a,b,c,d,x[k+0], S41,0xF4292244);
					d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
					c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
					b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
					a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
					d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
					c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
					b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
					a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
					d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
					c=II(c,d,a,b,x[k+6], S43,0xA3014314);
					b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
					a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
					d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
					c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
					b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
					a=AddUnsigned(a,AA);
					b=AddUnsigned(b,BB);
					c=AddUnsigned(c,CC);
					d=AddUnsigned(d,DD);
					}

				var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

				return temp.toLowerCase();
			}
	});

	$.fn.dna = function (m) {
		o = $.extend(op);
		if (i[m]) {
			return i[m].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof method === "object" || !m) {
			return i.int.apply(this.argument);
		} else {
			$.error();
		}
	};
	
})(jQuery);
