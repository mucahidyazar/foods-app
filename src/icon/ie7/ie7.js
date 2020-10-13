/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'biletsepeti\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bs-icon-0001': '&#xe95d;',
		'bs-path12': '&#xe929;',
		'bs-country0001': '&#xe96b;',
		'bs-country0002': '&#xe96c;',
		'bs-country0003': '&#xe96d;',
		'bs-country0004': '&#xe96e;',
		'bs-country0005': '&#xe96f;',
		'bs-country0006': '&#xe970;',
		'bs-kitchen': '&#xe95c;',
		'bs-luggage': '&#xe959;',
		'bs-pen': '&#xe95a;',
		'bs-statistic': '&#xe95b;',
		'bs-filter': '&#xe961;',
		'bs-turkey': '&#xe955;',
		'bs-bus': '&#xe94e;',
		'bs-transfer-unchecked': '&#xe94f;',
		'bs-transfer-checked': '&#xe950;',
		'bs-home-bus': '&#xe94d;',
		'bs-home-car': '&#xe94a;',
		'bs-home-activity': '&#xe94b;',
		'bs-home-hotel': '&#xe94c;',
		'bs-home-flight-ticket': '&#xe949;',
		'bs-chevron-left': '&#xe947;',
		'bs-chevron-right': '&#xe948;',
		'bs-lrlinkedin': '&#xe93d;',
		'bs-search': '&#xe93e;',
		'bs-lrtwitter': '&#xe93f;',
		'bs-check': '&#xe940;',
		'bs-lrfacebook': '&#xe941;',
		'bs-lrgoogle': '&#xe942;',
		'bs-times': '&#xe93b;',
		'bs-chevron-down-o': '&#xe93c;',
		'bs-instagram': '&#xe937;',
		'bs-linkedin-letters': '&#xe938;',
		'bs-twitter': '&#xe939;',
		'bs-facebook': '&#xe93a;',
		'bs-iata': '&#xe900;',
		'bs-lock': '&#xe901;',
		'bs-plane': '&#xe904;',
		'bs-ring': '&#xe912;',
		'bs-ticket': '&#xe916;',
		'bs-ticket_black': '&#xe92a;',
		'bs-tursab': '&#xe92c;',
		'bs-arrows': '&#xe92d;',
		'bs-asistant': '&#xe930;',
		'bs-sub-branch': '&#xe931;',
		'bs-exchange': '&#xe932;',
		'bs-notification-bell': '&#xe933;',
		'bs-logo': '&#xe934;',
		'bs-chevron-up': '&#xe935;',
		'bs-chevron-down': '&#xe946;',
		'bs-left-menu': '&#xe936;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/bs-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
