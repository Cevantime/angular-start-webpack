var AppComponent = ng.core.Component({
	selector: 'my-app',
	templateUrl: 'templates/app.html',
	styleUrls: [
		'styles/app.css'
	]
}).Class({
	constructor: function () {
		this.title = 'Hello app !';
	}
});
module.exports = AppComponent;

