var AppComponent = require('components/app');

var routing = require('routes');

require('rxjs-extensions');

module.exports =
	ng.core.NgModule({
		imports: [
			ng.platformBrowser.BrowserModule,
			ng.forms.FormsModule,
			ng.http.HttpModule,
			routing
		],
		declarations: [
			AppComponent
		],
		bootstrap: [AppComponent],
		providers: []
	})
	.Class({
		constructor: function () {
			
		}
	});
	