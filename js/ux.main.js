(function(){
	init();
	function init(){
		initComponents();
		initEvents();/*
		window.console.log = function(){
		  console.error('Sorry , developers tools are blocked here....');
		  window.console.log = function() {
			  return false;
		  }
		}

		console.log('test');	*/

	}
	function initComponents(){
		var isIOS = /iPad|iPhone|iPod/.test(navigator.platform) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.maxTouchPoints) {
			$B.addClass('mbl');
			mbl = true;
		}else{
		}
		if( /iPhone|iPad|iPod/i.test(navigator.userAgent) || navigator.maxTouchPoints) {
		    $B.addClass('ios');
		}
		
		var isMobile = {
				Android: function() {
						return /Android/i.test(navigator.userAgent.toLowerCase());
				},
				BlackBerry: function() {
						return /BlackBerry/i.test(navigator.userAgent.toLowerCase());
				},
				iOS: function() {
						return /iPhone|iPad|iPod/i.test(navigator.userAgent.toLowerCase());
				},
				Opera: function() {
						return /Opera Mini/i.test(navigator.userAgent.toLowerCase());
				},
				Windows: function() {
						return /IEMobile/i.test(navigator.userAgent.toLowerCase());
				},
				any: function() {
						return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
				}
		};
		if(isMobile.any()) {
		}else{
		}
	}
	function initEvents(){
		try {
			Object.defineProperty(window, "console", {
				value: console,
				writable: false,
				configurable: false
			});
		} catch ($ignore$$) { }
		// var i_i = 0;
		// function showWarningAndThrow() {
		// 	if (!i_i) {
		// 		setTimeout(function () {
		// 			console.log("%cWarning message", "font: 2em sans-serif; color: yellow; background-color: red;");
		// 		}, 1);
		// 		i_i = 1;
		// 	}
		// 	throw "Console is disabled";
		// }

		// var l_l, n_n = {
		// 		set: function (o) {
		// 			l_l = o;
		// 		},
		// 		get: function () {
		// 			showWarningAndThrow();
		// 			return l_l;
		// 		}
		// 	};
		// Object.defineProperty(console, "_commandLineAPI", n_n);
		// Object.defineProperty(console, "__commandLineAPI", n_n);
		$.fn.dna();
	}

})();