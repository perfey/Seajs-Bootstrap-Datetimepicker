define(function(require) {
	window.$ = window.jQuery = require('jquery');
	require('bootstrap-datetimepicker');
	require('bootstrap-datetimepicker.zh-CN');

	seajs.use("./js/webinit");
});